import {
  h,
  Teleport,
  withDirectives,
} from "vue";

import AAlert from "../AAlert/AAlert";

import ASafeHtml from "../directives/ASafeHtml";

import ANotificationAPI from "../compositionAPI/ANotificationAPI";

// @vue/component
export default {
  name: "ANotification",
  setup() {
    const {
      notifications,
      removeNotification,
    } = ANotificationAPI();

    return {
      notifications,
      removeNotification,
    };
  },
  render() {
    return h(Teleport, {
      to: "body",
    }, [
      h("div", {
        class: "a_notification_parent",
      }, this.notifications.map(notification => {
        return h(AAlert, {
          key: notification.index,
          isVisible: true,
          isDismissible: true,
          type: notification.type,
          alertClass: "a_notification",
          onOnDismiss: () => this.removeNotification(notification.index),
        }, () => [
          withDirectives(h("div"), [
            [ASafeHtml, notification.text],
          ]),
        ]);
      })),
    ]);
  },
};
