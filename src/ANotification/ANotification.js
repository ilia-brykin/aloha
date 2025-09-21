import {
  h,
  onMounted,
  ref,
  Teleport,
} from "vue";

import AAlert from "../AAlert/AAlert";
import ATranslation from "../ATranslation/ATranslation";

import ANotificationAPI from "../compositionAPI/ANotificationAPI";

// @vue/component
export default {
  name: "ANotification",
  setup() {
    const isMounted = ref(false);

    const {
      notifications,
      removeNotification,
    } = ANotificationAPI();

    onMounted(() => {
      isMounted.value = true;
    });

    return {
      isMounted,
      notifications,
      removeNotification,
    };
  },
  render() {
    return h(Teleport, {
      to: "body",
      disabled: !this.isMounted,
    }, [
      h("div", {
        class: "a_notification_parent",
      }, this.notifications.map(notification => {
        return h(AAlert, {
          key: notification.index,
          alwaysTranslate: notification.alwaysTranslate,
          isVisible: true,
          closable: true,
          type: notification.type,
          alertClass: "a_notification",
          onClose: () => this.removeNotification(notification.index),
        }, () => [
          h(ATranslation, {
            alwaysTranslate: notification.alwaysTranslate,
            html: notification.text,
            extra: notification.extra,
          }),
        ]);
      })),
    ]);
  },
};
