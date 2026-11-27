import {
  computed,
  markRaw,
  ref,
} from "vue";

import {
  createListFromObject,
} from "../utils/utils";

import {
  find,
  forEach,
  isEqual,
  isNil,
  isPlainObject,
  values,
} from "lodash-es";

let notificationTimeout = 5000;
const notificationsObj = ref({});
const notifications = computed(() => {
  return values(notificationsObj.value);
});
let notificationsCount = 0;
// timers outside of the reactive data: index -> { container, remaining, startedAt, timerId }
const timers = {};
// containers (prop name of ANotification) with the mouse or the focus on their notifications
const pausedContainers = new Set();

export default function ANotificationAPI() {
  return {
    addNotification,
    clearNotifications,
    pauseNotifications,
    removeNotification,
    resumeNotifications,
    notifications,
    setNotificationTimeout,
  };
}

export function setNotificationTimeout(timeout) {
  notificationTimeout = timeout;
}

// "" is the container of <a-notification> without the prop name
export function getContainerKey(container) {
  return container ?? "";
}

/**
 * Shows a notification. Returns its id for removeNotification(id).
 * actions: buttons, e.g. [{ text: "_UNDO_", onClick: ({ notification }) => {} }], a click also closes the notification.
 * announce: how a screen reader announces it, see the prop announce of AAlert ("alert" by default).
 * component, props: own content instead of text, it gets the props, notification and close().
 * container: the name of <a-notification name="…">, without it the notification goes to <a-notification> without name.
 * deduplicate: the same notification is not shown twice, its timer restarts and it shows the count (×2).
 *   Notifications with actions or component are never merged.
 */
export function addNotification({
  actions,
  alwaysTranslate,
  announce,
  component,
  container,
  deduplicate = true,
  extra,
  icon,
  props,
  text,
  timeout,
  title,
  type = "success",
  useValuesFromObject = true,
}) {
  const TIMEOUT_LOCAL = isNil(timeout) ? notificationTimeout : timeout;
  const TYPE = type === "error" ? "danger" : type;
  const CONTAINER = getContainerKey(container);
  let textLocal = text;
  if (isPlainObject(text) && useValuesFromObject) {
    textLocal = createListFromObject(text); // TODO: filterList
  }

  if (deduplicate && !actions?.length && !component) {
    const SAME = find(notifications.value, notification => {
      return notification.container === CONTAINER &&
        notification.type === TYPE &&
        !notification.actions?.length &&
        !notification.component &&
        isEqual([notification.title, notification.text, notification.extra], [title, textLocal, extra]);
    });
    if (SAME) {
      SAME.count++;
      SAME.timeout = TIMEOUT_LOCAL;
      setTimer({ notificationIndex: SAME.index, timeout: TIMEOUT_LOCAL, container: CONTAINER });
      return SAME.index;
    }
  }

  const CURRENT_INDEX = notificationsCount;
  notificationsObj.value[CURRENT_INDEX] = {
    text: textLocal,
    type: TYPE,
    index: CURRENT_INDEX,
    extra,
    alwaysTranslate,
    actions,
    announce,
    component: component ? markRaw(component) : undefined,
    container: CONTAINER,
    count: 1,
    icon,
    props,
    title,
    timeout: TIMEOUT_LOCAL,
  };
  notificationsCount++;

  setTimer({ notificationIndex: CURRENT_INDEX, timeout: TIMEOUT_LOCAL, container: CONTAINER });
  return CURRENT_INDEX;
}

function setTimer({ notificationIndex, timeout, container }) {
  if (timers[notificationIndex]) {
    clearTimeout(timers[notificationIndex].timerId);
    delete timers[notificationIndex];
  }
  if (!timeout) {
    return;
  }
  timers[notificationIndex] = { container, remaining: timeout };
  if (!pausedContainers.has(container)) {
    startTimer(notificationIndex);
  }
}

function startTimer(notificationIndex) {
  const TIMER = timers[notificationIndex];
  TIMER.startedAt = Date.now();
  TIMER.timerId = setTimeout(() => {
    removeNotification(notificationIndex);
  }, TIMER.remaining);
}

// WCAG 2.2.1: the notifications do not disappear while the mouse or the focus is on them
export function pauseNotifications(container) {
  const CONTAINER = getContainerKey(container);
  if (pausedContainers.has(CONTAINER)) {
    return;
  }
  pausedContainers.add(CONTAINER);
  forEach(timers, timer => {
    if (timer.container === CONTAINER) {
      clearTimeout(timer.timerId);
      timer.remaining = Math.max(0, timer.remaining - (Date.now() - timer.startedAt));
    }
  });
}

export function resumeNotifications(container) {
  const CONTAINER = getContainerKey(container);
  if (!pausedContainers.has(CONTAINER)) {
    return;
  }
  pausedContainers.delete(CONTAINER);
  forEach(timers, (timer, notificationIndex) => {
    if (timer.container === CONTAINER) {
      startTimer(notificationIndex);
    }
  });
}

export function removeNotification(notificationIndex) {
  if (timers[notificationIndex]) {
    clearTimeout(timers[notificationIndex].timerId);
    delete timers[notificationIndex];
  }
  if (notificationsObj.value[notificationIndex]) {
    delete notificationsObj.value[notificationIndex];
  }
}

// closes all notifications, or only the notifications of one container
export function clearNotifications({ container } = {}) {
  forEach(notifications.value, notification => {
    if (isNil(container) || notification.container === getContainerKey(container)) {
      removeNotification(notification.index);
    }
  });
}
