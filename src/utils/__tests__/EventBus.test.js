import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import EventBus from "../EventBus";

const EVENT = "event-bus-test";
const OTHER_EVENT = "event-bus-other-test";

afterEach(() => {
  EventBus.$off(EVENT);
  EventBus.$off(OTHER_EVENT);
  EventBus.$off("__proto__");
});

describe("EventBus", () => {
  it("passes all arguments and the supplied context in registration order", () => {
    const calls = [];
    const context = {};
    EventBus.$on(EVENT, function(...args) {
      calls.push({ context: this, args });
    }, context);
    EventBus.$on(EVENT, () => calls.push("second"));

    EventBus.$emit(EVENT, 1, { value: 2 });

    expect(calls).toEqual([{ context, args: [1, { value: 2 }] }, "second"]);
  });

  it("keeps duplicate subscriptions and removes every match for a callback", () => {
    const callback = vi.fn();
    const remaining = vi.fn();
    EventBus.$on(EVENT, callback);
    EventBus.$on(EVENT, callback);
    EventBus.$on(EVENT, remaining);

    EventBus.$emit(EVENT);
    expect(callback).toHaveBeenCalledTimes(2);

    EventBus.$off(EVENT, callback);
    EventBus.$emit(EVENT);
    expect(callback).toHaveBeenCalledTimes(2);
    expect(remaining).toHaveBeenCalledTimes(2);
  });

  it("removes all listeners for one event without affecting other events", () => {
    const callback = vi.fn();
    EventBus.$on(EVENT, callback);
    EventBus.$on(OTHER_EVENT, callback);

    EventBus.$off(EVENT);
    EventBus.$emit(EVENT);
    expect(callback).not.toHaveBeenCalled();
    EventBus.$emit(OTHER_EVENT);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("removes a once listener before a recursive emit and preserves its context", () => {
    const context = {};
    const callback = vi.fn(function(value) {
      expect(this).toBe(context);
      expect(value).toBe(42);
      EventBus.$emit(EVENT, value);
    });
    EventBus.$once(EVENT, callback, context);

    EventBus.$emit(EVENT, 42);
    EventBus.$emit(EVENT, 42);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("can cancel once listeners using the original callback", () => {
    const callback = vi.fn();
    EventBus.$once(EVENT, callback);
    EventBus.$on(EVENT, callback);
    EventBus.$once(EVENT, callback);

    EventBus.$off(EVENT, callback);
    EventBus.$emit(EVENT);

    expect(callback).not.toHaveBeenCalled();
  });

  it("uses a snapshot when subscriptions change during an emit", () => {
    const removed = vi.fn();
    const added = vi.fn();
    EventBus.$once(EVENT, () => {
      EventBus.$off(EVENT, removed);
      EventBus.$on(EVENT, added);
    });
    EventBus.$on(EVENT, removed);

    EventBus.$emit(EVENT);
    expect(removed).toHaveBeenCalledTimes(1);
    expect(added).not.toHaveBeenCalled();

    EventBus.$emit(EVENT);
    expect(removed).toHaveBeenCalledTimes(1);
    expect(added).toHaveBeenCalledTimes(1);
  });

  it("propagates listener errors and keeps a throwing once listener removed", () => {
    const error = new Error("Listener failed");
    const remaining = vi.fn();
    EventBus.$once(EVENT, () => {
      throw error;
    });
    EventBus.$on(EVENT, remaining);

    expect(() => EventBus.$emit(EVENT)).toThrow(error);
    expect(remaining).not.toHaveBeenCalled();
    EventBus.$emit(EVENT);
    expect(remaining).toHaveBeenCalledTimes(1);
  });

  it("supports arbitrary event names and emitting without subscribers", () => {
    const callback = vi.fn();
    expect(() => EventBus.$emit(EVENT)).not.toThrow();
    EventBus.$on("__proto__", callback);
    EventBus.$emit("__proto__", "value");
    expect(callback).toHaveBeenCalledWith("value");
  });

  it("preserves chaining through the emitter returned by the public methods", () => {
    const callback = vi.fn();
    const emitter = EventBus.$on(EVENT, callback);
    expect(emitter.emit(EVENT).off(EVENT, callback).once(EVENT, callback)).toBe(emitter);
    expect(EventBus.$emit(EVENT)).toBe(emitter);
    expect(EventBus.$off(EVENT)).toBe(emitter);
    expect(EventBus.$once(EVENT, callback)).toBe(emitter);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
