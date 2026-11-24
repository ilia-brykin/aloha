import {
  computed,
  h,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  Teleport,
  toRef,
  TransitionGroup,
  watch,
} from "vue";

import AAlert from "../AAlert/AAlert";
import AButton from "../AButton/AButton";
import ATranslation from "../ATranslation/ATranslation";

import ANotificationAPI, {
  getContainerKey,
} from "../compositionAPI/ANotificationAPI";

import {
  getPropDefault,
} from "../plugins/AComponentsPlugin";
import {
  isNumber,
} from "lodash-es";

export const PLACEMENTS = ["top-start", "top-center", "top-end", "bottom-start", "bottom-center", "bottom-end"];
export const SIZES = ["small", "large", "xl"];

// @vue/component
export default {
  name: "ANotification",
  props: {
    // shows the remaining time as a bar, it stops while the notifications are paused
    hasProgress: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("ANotification", "hasProgress", false),
    },

    /*
     * at most so many notifications, the oldest are closed
     * area for addNotification({ container: name }); without name it shows the notifications without container
     */
    name: {
      type: String,
      required: false,
      default: undefined,
    },
    max: {
      type: Number,
      required: false,
      default: () => getPropDefault("ANotification", "max"),
    },
    placement: {
      type: String,
      required: false,
      validator: value => PLACEMENTS.indexOf(value) !== -1,
      default: () => getPropDefault("ANotification", "placement", "top-center"),
    },
    size: {
      type: String,
      required: false,
      validator: value => SIZES.indexOf(value) !== -1,
      default: () => getPropDefault("ANotification", "size"),
    },
    // a number is in px
    width: {
      type: [Number, String],
      required: false,
      default: () => getPropDefault("ANotification", "width"),
    },
  },
  setup(props) {
    const max = toRef(props, "max");
    const name = toRef(props, "name");
    const placement = toRef(props, "placement");
    const size = toRef(props, "size");
    const width = toRef(props, "width");

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
    const isPaused = computed(() => isHovered.value || hasFocus.value);
    const updatePause = () => {
      if (isPaused.value) {
        pauseNotifications(name.value);
      } else {
        resumeNotifications(name.value);
      }
    };

    const notificationsLocal = computed(() => {
      const CONTAINER = getContainerKey(name.value);
      return notifications.value.filter(notification => notification.container === CONTAINER);
    });
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
    const checkFocus = () => {
      hasFocus.value = !!parentRef.value?.contains(document.activeElement);
      updatePause();
    };
    const closeNotification = notificationIndex => {
      removeNotification(notificationIndex);
      nextTick().then(checkFocus);
    };

    const onActionClick = ({ action, notification, $event }) => {
      if (action.onClick) {
        action.onClick({ notification, $event });
      }
      closeNotification(notification.index);
    };

    watch(() => notificationsLocal.value.length, length => {
      if (max.value > 0 && length > max.value) {
        notificationsLocal.value.slice(0, length - max.value).forEach(notification => {
          removeNotification(notification.index);
        });
      }
    });

    const widthLocal = computed(() => {
      if (isNumber(width.value)) {
        return `${ width.value }px`;
      }
      return width.value || undefined;
    });

    const parentClass = computed(() => {
      return [
        "a_notification_parent",
        `a_notification_parent_${ placement.value.replace("-", "_") }`,
        size.value ? `a_notification_parent_${ size.value }` : undefined,
        {
          a_notification_parent_fixed_width: !!(size.value || widthLocal.value),
          a_notification_parent_paused: isPaused.value,
        },
      ];
    });

    const parentStyle = computed(() => {
      return widthLocal.value ? { "--a_notification_width": widthLocal.value } : undefined;
    });

    onBeforeUnmount(() => {
      resumeNotifications(name.value);
    });

    onMounted(() => {
      isMounted.value = true;
    });

    return {
      checkFocus,
      closeNotification,
      isMounted,
      notificationsLocal,
      onActionClick,
      onFocusin,
      onFocusout,
      onMouseenter,
      onMouseleave,
      parentClass,
      parentRef,
      parentStyle,
    };
  },
  render() {
    return h(Teleport, {
      to: "body",
      disabled: !this.isMounted,
    }, [
      h("div", {
        ref: "parentRef",
        class: this.parentClass,
        style: this.parentStyle,
        onMouseenter: this.onMouseenter,
        onMouseleave: this.onMouseleave,
        onFocusin: this.onFocusin,
        onFocusout: this.onFocusout,
      }, [
        // after the leave animation the closed notification is gone: check where the focus is
        h(TransitionGroup, {
          name: "a_notification",
          onAfterLeave: this.checkFocus,
        }, () => this.notificationsLocal.map(notification => {
          return h(AAlert, {
            key: notification.index,
            alwaysTranslate: notification.alwaysTranslate,
            announce: notification.announce,
            icon: notification.icon,
            isVisible: true,
            closable: true,
            type: notification.type,
            alertClass: "a_notification",
            onClose: () => this.closeNotification(notification.index),
          }, () => [
            notification.title && h(ATranslation, {
              alwaysTranslate: notification.alwaysTranslate,
              class: "a_notification__title",
              extra: notification.extra,
              html: notification.title,
              tag: "strong",
            }),
            notification.component ?
              h(notification.component, {
                ...notification.props,
                notification,
                close: () => this.closeNotification(notification.index),
              }) :
              h(ATranslation, {
                alwaysTranslate: notification.alwaysTranslate,
                html: notification.text,
                extra: notification.extra,
              }),
            notification.count > 1 && h("span", {
              class: "a_badge a_notification__count",
            }, `×${ notification.count }`),
            notification.actions?.length && h("div", {
              class: "a_notification__actions",
            }, notification.actions.map(({ onClick, ...action }, actionIndex) => {
              return h(AButton, {
                key: actionIndex,
                alwaysTranslate: notification.alwaysTranslate,
                class: "a_btn a_btn_secondary a_btn_small",
                extra: notification.extra,
                type: "button",
                ...action,
                onClick: $event => this.onActionClick({ action: { onClick }, notification, $event }),
              });
            })),
            this.hasProgress && notification.timeout > 0 && h("div", {
              // a new key restarts the animation when the same notification comes again
              key: `progress_${ notification.count }`,
              "aria-hidden": "true",
              class: "a_notification__progress",
              style: { animationDuration: `${ notification.timeout }ms` },
            }),
          ]);
        })),
      ]),
    ]);
  },
};
