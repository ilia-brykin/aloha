import {
  nextTick,
} from "vue";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import ANotificationAPI, {
  addNotification,
} from "../../compositionAPI/ANotificationAPI";
import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../ATranslation/compositionAPI/ATranslationAPI";

import ANotification from "../ANotification";

const parent = () => document.body.querySelector(".a_notification_parent");
const alerts = () => document.body.querySelectorAll(".a_notification");

describe("ANotification", () => {
  let wrapper;

  beforeEach(async() => {
    vi.useFakeTimers();
    setI18n({ en: { _SAVED_: "Saved {{ name }}" } });
    setLanguage("en");
    updateTranslation();
    wrapper = mount(ANotification, { attachTo: document.body });
    await nextTick();
  });

  afterEach(async() => {
    const { notifications, removeNotification, resumeNotifications } = ANotificationAPI();
    notifications.value.forEach(notification => removeNotification(notification.index));
    resumeNotifications();
    wrapper.unmount();
    vi.useRealTimers();
    setI18n({});
    setLanguage("de");
    updateTranslation();
    await nextTick();
  });

  it("shows a translated notification as an alert, error becomes danger", async() => {
    addNotification({ text: "_SAVED_", extra: { name: "Anna" }, type: "error" });
    await nextTick();

    expect(alerts()).toHaveLength(1);
    expect(alerts()[0].textContent).toContain("Saved Anna");
    expect(alerts()[0].parentElement.getAttribute("role")).toBe("alert");
    expect(alerts()[0].className).toContain("danger");
  });

  it("removes the notification after the timeout", async() => {
    addNotification({ text: "One", timeout: 1000 });
    await nextTick();
    expect(alerts()).toHaveLength(1);

    vi.advanceTimersByTime(1000);
    await nextTick();
    expect(alerts()).toHaveLength(0);
  });

  it("pauses the timeout while the mouse is on the notifications", async() => {
    addNotification({ text: "One", timeout: 1000 });
    await nextTick();

    vi.advanceTimersByTime(600);
    parent().dispatchEvent(new MouseEvent("mouseenter"));
    vi.advanceTimersByTime(5000);
    await nextTick();
    expect(alerts()).toHaveLength(1);

    parent().dispatchEvent(new MouseEvent("mouseleave"));
    vi.advanceTimersByTime(399);
    await nextTick();
    expect(alerts()).toHaveLength(1);

    vi.advanceTimersByTime(1);
    await nextTick();
    expect(alerts()).toHaveLength(0);
  });

  it("pauses the timeout while the focus is in the notifications", async() => {
    addNotification({ text: "One", timeout: 1000 });
    await nextTick();

    parent().querySelector("button").focus();
    vi.advanceTimersByTime(5000);
    await nextTick();
    expect(alerts()).toHaveLength(1);

    parent().querySelector("button").blur();
    vi.advanceTimersByTime(1000);
    await nextTick();
    expect(alerts()).toHaveLength(0);
  });

  it("does not stay paused after the focused notification was closed", async() => {
    addNotification({ text: "One", timeout: 0 });
    await nextTick();

    const button = parent().querySelector("button");
    button.focus();
    button.click();
    await nextTick();
    await nextTick();
    expect(alerts()).toHaveLength(0);

    addNotification({ text: "Two", timeout: 1000 });
    await nextTick();
    vi.advanceTimersByTime(1000);
    await nextTick();
    expect(alerts()).toHaveLength(0);
  });

  it("passes always-translate to the notification", async() => {
    addNotification({ text: "_SAVED_", extra: { name: "Anna" }, alwaysTranslate: true });
    await nextTick();

    const { notifications } = ANotificationAPI();
    expect(notifications.value[0].alwaysTranslate).toBe(true);
    expect(alerts()[0].textContent).toContain("Saved Anna");
  });
});
