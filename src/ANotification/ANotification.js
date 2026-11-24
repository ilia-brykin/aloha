import {
  h,
  nextTick,
  onBeforeUnmount,
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
      pauseNotifications,
      removeNotification,
      resumeNotifications,
    } = ANotificationAPI();

    // paused while the mouse or the focus is in the notifications
    const isHovered = ref(false);
    const hasFocus = ref(false);
    const updatePause = () => {
      if (isHovered.value || hasFocus.value) {
        pauseNotifications();
      } else {
        resumeNotifications();
      }
    };
    const onMouseenter = () => {
      isHovered.value = true;
      updatePause();
    };
    const onMouseleave = () => {
      isHovered.value = false;
      updatePause();
    };
    const onFocusin = () => {
      hasFocus.value = true;
      updatePause();
    };
    const onFocusout = $event => {
      if (!$event.currentTarget.contains($event.relatedTarget)) {
        hasFocus.value = false;
        updatePause();
      }
    };

    // the closed notification can have had the focus: removed elements do not always fire focusout
    const parentRef = ref(undefined);
    const closeNotification = notificationIndex => {
      removeNotification(notificationIndex);
      nextTick().then(() => {
        hasFocus.value = !!parentRef.value?.contains(document.activeElement);
        updatePause();
      });
    };

    onBeforeUnmount(() => {
      resumeNotifications();
    });

    onMounted(() => {
      isMounted.value = true;
    });

    return {
      closeNotification,
      isMounted,
      notifications,
      onFocusin,
      onFocusout,
      onMouseenter,
      onMouseleave,
      parentRef,
    };
  },
  render() {
    return h(Teleport, {
      to: "body",
      disabled: !this.isMounted,
    }, [
      h("div", {
        ref: "parentRef",
        class: "a_notification_parent",
        onMouseenter: this.onMouseenter,
        onMouseleave: this.onMouseleave,
        onFocusin: this.onFocusin,
        onFocusout: this.onFocusout,
      }, this.notifications.map(notification => {
        return h(AAlert, {
          key: notification.index,
          alwaysTranslate: notification.alwaysTranslate,
          isVisible: true,
          closable: true,
          type: notification.type,
          alertClass: "a_notification",
          onClose: () => this.closeNotification(notification.index),
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
