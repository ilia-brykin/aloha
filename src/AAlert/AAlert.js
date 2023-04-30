import {
  h,
} from "vue";

import AButton from "../AButton/AButton";
import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";

import ClassAPI from "./compositionAPI/ClassAPI";
import DismissAPI from "./compositionAPI/DismissAPI";
import IconAPI from "./compositionAPI/IconAPI";

export default {
  name: "AAlert",
  props: {
    alertClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    hasIcon: {
      type: Boolean,
      required: false,
    },
    html: {
      type: String,
      required: false,
      default: undefined,
    },
    icon: {
      type: String,
      required: false,
      default: undefined,
    },
    isDismissible: {
      type: Boolean,
      required: false,
      default: false,
    },
    isVisible: {
      type: Boolean,
      required: false,
    },
    textClose: {
      type: String,
      required: false,
      default: "_ALERT_CLOSE_",
    },
    type: {
      type: String,
      required: false,
      default: "danger",
    },
    iconClass: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "onDismiss",
  ],
  setup(props, context) {
    const {
      alertClassLocal,
    } = ClassAPI(props);

    const {
      onDismiss,
    } = DismissAPI(context);

    const {
      iconLocal,
    } = IconAPI(props);

    return {
      alertClassLocal,
      iconLocal,
      onDismiss,
    };
  },
  render() {
    return h("div", {
      role: "alert",
    }, [
      this.isVisible && h("div", {
        class: [this.alertClass, this.alertClassLocal],
      }, [
        this.iconLocal && h(AIcon, {
          icon: this.iconLocal,
          class: [
            "a_alert__icon",
            this.iconClass,
          ],
        }),
        h("div", {
          class: "a_alert_content",
        }, [
          this.html && h(ATranslation, {
            html: this.html,
          }),
          this.$slots.default && this.$slots.default(),
          this.isDismissible && h(AButton, {
            type: "button",
            class: "a_btn_close",
            textScreenReader: this.textClose,
            onClick: this.onDismiss,
          })
        ]),
      ]),
    ]);
  },
};
