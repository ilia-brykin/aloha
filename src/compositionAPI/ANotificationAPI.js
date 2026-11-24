import {
  computed,
  ref,
} from "vue";

import {
  createListFromObject,
} from "../utils/utils";

import {
  forEach,
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
// timers outside of the reactive data: index -> { remaining, startedAt, timerId }
const timers = {};
let isPaused = false;

export default function ANotificationAPI() {
  return {
    addNotification,
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

export function addNotification({ text, type = "success", timeout, extra, alwaysTranslate, useValuesFromObject = true }) {
  const TIMEOUT_LOCAL = isNil(timeout) ? notificationTimeout : timeout;
  const CURRENT_INDEX = notificationsCount;
  const TYPE = type === "error" ? "danger" : type;
  let textLocal = text;
  if (isPlainObject(text) && useValuesFromObject) {
    textLocal = createListFromObject(text); // TODO: filterList
  }

  notificationsObj.value[CURRENT_INDEX] = {
    text: textLocal,
    type: TYPE,
    index: CURRENT_INDEX,
    extra,
    alwaysTranslate,
  };
  notificationsCount++;

  if (TIMEOUT_LOCAL) {
    timers[CURRENT_INDEX] = { remaining: TIMEOUT_LOCAL };
    if (!isPaused) {
      startTimer(CURRENT_INDEX);
    }
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
export function pauseNotifications() {
  if (isPaused) {
    return;
  }
  isPaused = true;
  forEach(timers, timer => {
    clearTimeout(timer.timerId);
    timer.remaining = Math.max(0, timer.remaining - (Date.now() - timer.startedAt));
  });
}

export function resumeNotifications() {
  if (!isPaused) {
    return;
  }
  isPaused = false;
  forEach(timers, (timer, notificationIndex) => {
    startTimer(notificationIndex);
  });
}

function removeNotification(notificationIndex) {
  if (timers[notificationIndex]) {
    clearTimeout(timers[notificationIndex].timerId);
    delete timers[notificationIndex];
  }
  if (notificationsObj.value[notificationIndex]) {
    delete notificationsObj.value[notificationIndex];
  }
}
