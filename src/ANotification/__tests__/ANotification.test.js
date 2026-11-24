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
  removeNotification,
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

  it("keeps the default position and width without placement, size and width", () => {
    expect(parent().className).toContain("a_notification_parent_top_center");
    expect(parent().className).not.toContain("a_notification_parent_fixed_width");
    expect(parent().getAttribute("style")).toBeNull();
  });

  it("sets placement, size and width (a number is px)", async() => {
    await wrapper.setProps({ placement: "bottom-end", size: "small" });
    expect(parent().className).toContain("a_notification_parent_bottom_end");
    expect(parent().className).toContain("a_notification_parent_small");
    expect(parent().className).toContain("a_notification_parent_fixed_width");

    await wrapper.setProps({ size: undefined, width: 320 });
    expect(parent().style.getPropertyValue("--a_notification_width")).toBe("320px");

    await wrapper.setProps({ width: "25rem" });
    expect(parent().style.getPropertyValue("--a_notification_width")).toBe("25rem");
  });

  it("closes the oldest notifications above max", async() => {
    await wrapper.setProps({ max: 2 });
    addNotification({ text: "One", timeout: 0 });
    addNotification({ text: "Two", timeout: 0 });
    addNotification({ text: "Three", timeout: 0 });
    await nextTick();
    await nextTick();

    expect(Array.from(alerts()).map(alert => alert.textContent.trim())).toEqual(["Two", "Three"]);
  });

  it("shows a title and actions; an action calls onClick and closes the notification", async() => {
    const onClick = vi.fn();
    addNotification({
      title: "_SAVED_",
      text: "Text",
      extra: { name: "Anna" },
      timeout: 0,
      actions: [{ text: "Undo", onClick }],
    });
    await nextTick();

    expect(parent().querySelector(".a_notification__title").textContent).toBe("Saved Anna");
    const action = parent().querySelector(".a_notification__actions button");
    expect(action.textContent).toContain("Undo");

    action.click();
    await nextTick();
    expect(onClick).toHaveBeenCalledWith(expect.objectContaining({ notification: expect.objectContaining({ title: "_SAVED_" }) }));
    expect(alerts()).toHaveLength(0);
  });

  it("passes icon and announce to the alert", async() => {
    addNotification({ text: "One", timeout: 0, announce: "status", icon: "Bell" });
    await nextTick();

    expect(alerts()[0].parentElement.getAttribute("role")).toBe("status");
    const { notifications } = ANotificationAPI();
    expect(notifications.value[0].icon).toBe("Bell");
  });

  it("returns the id, removeNotification(id) closes the notification", async() => {
    const ID = addNotification({ text: "Loading", timeout: 0 });
    await nextTick();
    expect(alerts()).toHaveLength(1);

    removeNotification(ID);
    await nextTick();
    expect(alerts()).toHaveLength(0);
  });

  it("shows the remaining time with has-progress and stops it while paused", async() => {
    addNotification({ text: "No bar", timeout: 1000 });
    await nextTick();
    expect(parent().querySelector(".a_notification__progress")).toBeNull();

    await wrapper.setProps({ hasProgress: true });
    const bar = parent().querySelector(".a_notification__progress");
    expect(bar.style.animationDuration).toBe("1000ms");
    expect(bar.getAttribute("aria-hidden")).toBe("true");

    parent().dispatchEvent(new MouseEvent("mouseenter"));
    await nextTick();
    expect(parent().className).toContain("a_notification_parent_paused");
  });
});
