const listeners = new Map();

const subscribe = (name, callback, context, originalCallback = callback) => {
  const subscriptions = listeners.get(name) || [];
  subscriptions.push({ callback, context, originalCallback });
  listeners.set(name, subscriptions);
};

const emitter = {
  on(name, callback, context) {
    subscribe(name, callback, context);
    return emitter;
  },
  once(name, callback, context) {
    const onceListener = (...args) => {
      emitter.off(name, onceListener);
      callback.apply(context, args);
    };
    subscribe(name, onceListener, context, callback);
    return emitter;
  },
  off(name, callback) {
    if (!callback) {
      listeners.delete(name);
      return emitter;
    }
    const remaining = (listeners.get(name) || []).filter(subscription => {
      return subscription.callback !== callback && subscription.originalCallback !== callback;
    });
    if (remaining.length) {
      listeners.set(name, remaining);
    } else {
      listeners.delete(name);
    }
    return emitter;
  },
  emit(name, ...args) {
    const subscriptions = [...(listeners.get(name) || [])];
    for (const { callback, context } of subscriptions) {
      callback.apply(context, args);
    }
    return emitter;
  },
};

export default {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args),
};
