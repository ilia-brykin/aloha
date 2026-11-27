import {
  isReactive,
  isRef,
} from "vue";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import ANotificationAPI, {
  addNotification,
  clearNotifications,
  getContainerKey,
  pauseNotifications,
  removeNotification,
  resumeNotifications,
  setNotificationTimeout,
} from "../ANotificationAPI";

const { notifications } = ANotificationAPI();
const texts = () => notifications.value.map(notification => notification.text);

describe("ANotificationAPI", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    clearNotifications();
    resumeNotifications();
    resumeNotifications("editor");
    setNotificationTimeout(5000);
    vi.useRealTimers();
  });

  it("returns all functions and the notifications as a computed ref", () => {
    const API = ANotificationAPI();

    expect(isRef(API.notifications)).toBe(true);
    expect(API.addNotification).toBe(addNotification);
    expect(API.clearNotifications).toBe(clearNotifications);
    expect(API.pauseNotifications).toBe(pauseNotifications);
    expect(API.removeNotification).toBe(removeNotification);
    expect(API.resumeNotifications).toBe(resumeNotifications);
    expect(API.setNotificationTimeout).toBe(setNotificationTimeout);
  });

  describe("addNotification", () => {
    it("adds a notification with all its fields and returns its id", () => {
      const ACTIONS = [{ text: "Undo" }];
      const ID = addNotification({
        actions: ACTIONS,
        alwaysTranslate: true,
        announce: "status",
        extra: { name: "Anna" },
        icon: "Bell",
        text: "Text",
        timeout: 1000,
        title: "Title",
        type: "info",
      });

      expect(notifications.value).toHaveLength(1);
      expect(notifications.value[0]).toEqual(expect.objectContaining({
        actions: ACTIONS,
        alwaysTranslate: true,
        announce: "status",
        container: "",
        count: 1,
        extra: { name: "Anna" },
        icon: "Bell",
        index: ID,
        text: "Text",
        timeout: 1000,
        title: "Title",
        type: "info",
      }));
    });

    it("gives every notification a new id", () => {
      const FIRST = addNotification({ text: "One", timeout: 0 });
      const SECOND = addNotification({ text: "Two", timeout: 0 });

      expect(SECOND).toBe(FIRST + 1);
    });

    it("uses success by default and danger for error", () => {
      addNotification({ text: "One", timeout: 0 });
      addNotification({ text: "Two", type: "error", timeout: 0 });

      expect(notifications.value.map(notification => notification.type)).toEqual(["success", "danger"]);
    });

    it("makes a list of the values of an object, unless useValuesFromObject is false", () => {
      const OBJECT = { name: "is required", email: "is invalid" };
      addNotification({ text: OBJECT, timeout: 0 });
      addNotification({ text: OBJECT, timeout: 0, useValuesFromObject: false, deduplicate: false });

      expect(notifications.value[0].text).toContain("is required");
      expect(notifications.value[0].text).toContain("is invalid");
      expect(notifications.value[0].text).not.toBe(OBJECT);
      expect(notifications.value[1].text).toEqual(OBJECT);
    });

    it("keeps the own component out of the reactivity", () => {
      const COMPONENT = { render: () => null };
      addNotification({ component: COMPONENT, props: { a: 1 }, timeout: 0 });

      expect(isReactive(notifications.value[0].component)).toBe(false);
      expect(notifications.value[0].props).toEqual({ a: 1 });
    });

    it("puts the notification into its container", () => {
      addNotification({ text: "One", timeout: 0, container: "editor" });

      expect(notifications.value[0].container).toBe("editor");
    });
  });

  describe("timeout", () => {
    it("removes the notification after the default timeout of 5 seconds", () => {
      addNotification({ text: "One" });

      vi.advanceTimersByTime(4999);
      expect(notifications.value).toHaveLength(1);
      vi.advanceTimersByTime(1);
      expect(notifications.value).toHaveLength(0);
    });

    it("uses the timeout of setNotificationTimeout", () => {
      setNotificationTimeout(100);
      addNotification({ text: "One" });

      expect(notifications.value[0].timeout).toBe(100);
      vi.advanceTimersByTime(100);
      expect(notifications.value).toHaveLength(0);
    });

    it("keeps a notification with timeout 0", () => {
      addNotification({ text: "One", timeout: 0 });

      vi.advanceTimersByTime(60000);
      expect(notifications.value).toHaveLength(1);
    });
  });

  describe("pauseNotifications and resumeNotifications", () => {
    it("stop the timers and continue with the remaining time", () => {
      addNotification({ text: "One", timeout: 1000 });

      vi.advanceTimersByTime(600);
      pauseNotifications();
      vi.advanceTimersByTime(10000);
      expect(notifications.value).toHaveLength(1);

      resumeNotifications();
      vi.advanceTimersByTime(399);
      expect(notifications.value).toHaveLength(1);
      vi.advanceTimersByTime(1);
      expect(notifications.value).toHaveLength(0);
    });

    it("start the timer of a notification added during the pause only after the pause", () => {
      pauseNotifications();
      addNotification({ text: "One", timeout: 1000 });
      vi.advanceTimersByTime(5000);
      expect(notifications.value).toHaveLength(1);

      resumeNotifications();
      vi.advanceTimersByTime(1000);
      expect(notifications.value).toHaveLength(0);
    });

    it("pause only the timers of one container", () => {
      addNotification({ text: "Main", timeout: 1000 });
      addNotification({ text: "Editor", timeout: 1000, container: "editor" });

      pauseNotifications("editor");
      vi.advanceTimersByTime(1000);
      expect(texts()).toEqual(["Editor"]);
    });

    it("do nothing when called twice", () => {
      addNotification({ text: "One", timeout: 1000 });

      pauseNotifications();
      vi.advanceTimersByTime(500);
      pauseNotifications();
      resumeNotifications();
      resumeNotifications();
      vi.advanceTimersByTime(999);
      expect(notifications.value).toHaveLength(1);
      vi.advanceTimersByTime(1);
      expect(notifications.value).toHaveLength(0);
    });
  });

  describe("removeNotification", () => {
    it("removes the notification and its timer", () => {
      const ID = addNotification({ text: "One", timeout: 1000 });

      removeNotification(ID);
      expect(notifications.value).toHaveLength(0);
      expect(vi.getTimerCount()).toBe(0);
    });

    it("ignores an unknown id", () => {
      addNotification({ text: "One", timeout: 0 });

      removeNotification(-1);
      expect(notifications.value).toHaveLength(1);
    });
  });

  describe("clearNotifications", () => {
    it("removes all notifications and their timers", () => {
      addNotification({ text: "One", timeout: 1000 });
      addNotification({ text: "Two", timeout: 1000, container: "editor" });

      clearNotifications();
      expect(notifications.value).toHaveLength(0);
      expect(vi.getTimerCount()).toBe(0);
    });

    it("removes only the notifications of one container", () => {
      addNotification({ text: "Main", timeout: 0 });
      addNotification({ text: "Editor", timeout: 0, container: "editor" });

      clearNotifications({ container: "editor" });
      expect(texts()).toEqual(["Main"]);
    });
  });

  describe("deduplicate", () => {
    it("counts the same notification, returns its id and restarts its timer with the new timeout", () => {
      const ID = addNotification({ text: "Error", type: "error", timeout: 1000 });
      vi.advanceTimersByTime(900);

      expect(addNotification({ text: "Error", type: "error", timeout: 2000 })).toBe(ID);
      expect(notifications.value).toHaveLength(1);
      expect(notifications.value[0].count).toBe(2);
      expect(notifications.value[0].timeout).toBe(2000);

      vi.advanceTimersByTime(1999);
      expect(notifications.value).toHaveLength(1);
      vi.advanceTimersByTime(1);
      expect(notifications.value).toHaveLength(0);
    });

    it("waits for the end of the pause with the restarted timer", () => {
      addNotification({ text: "Error", timeout: 1000 });
      pauseNotifications();
      addNotification({ text: "Error", timeout: 1000 });

      vi.advanceTimersByTime(5000);
      expect(notifications.value).toHaveLength(1);
      resumeNotifications();
      vi.advanceTimersByTime(1000);
      expect(notifications.value).toHaveLength(0);
    });

    it("removes the timer when the same notification comes with timeout 0", () => {
      addNotification({ text: "Error", timeout: 1000 });
      addNotification({ text: "Error", timeout: 0 });

      vi.advanceTimersByTime(5000);
      expect(notifications.value).toHaveLength(1);
    });

    it("does not merge notifications with another type, title, extra or container", () => {
      addNotification({ text: "Text", timeout: 0 });
      addNotification({ text: "Text", type: "danger", timeout: 0 });
      addNotification({ text: "Text", title: "Title", timeout: 0 });
      addNotification({ text: "Text", extra: { a: 1 }, timeout: 0 });
      addNotification({ text: "Text", container: "editor", timeout: 0 });

      expect(notifications.value).toHaveLength(5);
    });

    it("merges notifications with equal extra objects", () => {
      addNotification({ text: "Text", extra: { a: 1 }, timeout: 0 });
      addNotification({ text: "Text", extra: { a: 1 }, timeout: 0 });

      expect(notifications.value).toHaveLength(1);
    });

    it("never merges notifications with actions or with a component", () => {
      const COMPONENT = { render: () => null };
      addNotification({ text: "Deleted", actions: [{ text: "Undo" }], timeout: 0 });
      addNotification({ text: "Deleted", actions: [{ text: "Undo" }], timeout: 0 });
      addNotification({ component: COMPONENT, timeout: 0 });
      addNotification({ component: COMPONENT, timeout: 0 });

      expect(notifications.value).toHaveLength(4);
    });

    it("does not merge a notification without actions into one with actions", () => {
      addNotification({ text: "Deleted", actions: [{ text: "Undo" }], timeout: 0 });
      addNotification({ text: "Deleted", timeout: 0 });

      expect(notifications.value).toHaveLength(2);
    });

    it("can be switched off with deduplicate false", () => {
      addNotification({ text: "Saved", timeout: 0 });
      addNotification({ text: "Saved", timeout: 0, deduplicate: false });

      expect(notifications.value).toHaveLength(2);
    });
  });

  it("getContainerKey uses an empty string for no container", () => {
    expect(getContainerKey(undefined)).toBe("");
    expect(getContainerKey(null)).toBe("");
    expect(getContainerKey("editor")).toBe("editor");
  });
});
