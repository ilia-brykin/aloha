import {
  computed,
  ref,
} from "vue";

import {
  isNil,
  values,
} from "lodash-es";

let notificationTimeout = 5000;
const notificationsObj = ref({});
const notifications = computed(() => {
  return values(notificationsObj.value);
});
let notificationsCount = 0;

export default function ANotificationAPI() {
  return {
    addNotification,
    removeNotification,
    notifications,
    setNotificationTimeout,
  };
}

export function setNotificationTimeout(timeout) {
  notificationTimeout = timeout;
}

export function addNotification({ text, type = "success", timeout }) {
  const TIMEOUT_LOCAL = isNil(timeout) ? notificationTimeout : timeout;
  const CURRENT_INDEX = notificationsCount;
  const TYPE = type === "error" ? "danger" : type;

  notificationsObj.value[CURRENT_INDEX] = {
    text,
    type: TYPE,
    index: CURRENT_INDEX,
  };
  notificationsCount++;

  if (TIMEOUT_LOCAL) {
    setTimeout(() => {
      removeNotification(CURRENT_INDEX);
    }, TIMEOUT_LOCAL);
  }
}

function removeNotification(notificationIndex) {
  if (notificationsObj.value[notificationIndex]) {
    delete notificationsObj.value[notificationIndex];
  }
}
