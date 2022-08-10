import {
  computed,
  ref,
} from "vue";

import {
  values,
} from "lodash-es";

let notificationTimeout = 5000;
const notificationsObj = ref({});
const notifications = computed(() => {
  return values(notificationsObj.value);
});
let notificationsCount = 0;

export default function ANotificationAPI() {
  const removeNotification = notificationIndex => {
    if (notificationsObj.value[notificationIndex]) {
      delete notificationsObj.value[notificationIndex];
    }
  };

  const addNotification = ({ text, type = "success", timeout }) => {
    const TIMEOUT_LOCAL = timeout || notificationTimeout;
    const CURRENT_INDEX = notificationsCount;
    notificationsObj.value[CURRENT_INDEX] = {
      text,
      type,
      index: CURRENT_INDEX,
    };
    notificationsCount++;

    if (TIMEOUT_LOCAL) {
      setTimeout(() => {
        removeNotification(CURRENT_INDEX);
      }, TIMEOUT_LOCAL);
    }
  };

  const setNotificationTimeout = timeout => {
    notificationTimeout = timeout;
  };

  return {
    addNotification,
    removeNotification,
    notifications,
    setNotificationTimeout,
  };
}
