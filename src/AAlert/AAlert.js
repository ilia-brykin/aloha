import {
  h,
} from "vue";

import AButton from "../AButton/AButton";
import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";

import ClassAPI from "./compositionAPI/ClassAPI";
import CloseAPI from "./compositionAPI/CloseAPI";
import IconAPI from "./compositionAPI/IconAPI";

import {
  alertPluginOptions,
} from "../plugins/AAlertPlugin";

export default {
  name: "AAlert",
  props: {
    alertClass: {
      type: [String, Object],
      required: false,
      default: () => alertPluginOptions.value.propsDefault.alertClass,
    },
    alertContentClass: {
      type: [String, Object],
      required: false,
      default: () => alertPluginOptions.value.propsDefault.alertContentClass,
    },
    closable: {
      type: Boolean,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.closable,
    },
    closableFromOutside: {
      type: Boolean,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.closableFromOutside,
    },
    hasIcon: {
      type: Boolean,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.hasIcon,
    },
    html: {
      type: String,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.html,
    },
    icon: {
      type: String,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.icon,
    },
    iconClass: {
      type: String,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.iconClass,
    },
    isVisible: {
      type: Boolean,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.isVisible,
    },
    textClose: {
      type: String,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.textClose,
    },
    type: {
      type: String,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.type,
    },
  },
  emits: [
    "close",
  ],
  setup(props, context) {
    const {
      expose,
    } = context;

    const {
      alertClassLocal,
    } = ClassAPI(props);

    const {
      close,
      isHidden,
    } = CloseAPI(props, context);

    const {
      iconLocal,
    } = IconAPI(props);

    expose({
      close,
      isHidden,
    });

    return {
      alertClassLocal,
      close,
      iconLocal,
      isHidden,
    };
  },
  render() {
    if (this.isHidden) {
      return "";
    }
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
          class: [
            "a_alert__content",
            this.alertContentClass,
          ],
        }, [
          this.html && h(ATranslation, {
            html: this.html,
          }),
          this.$slots.default && this.$slots.default(),
        ]),
        this.closable && h(AButton, {
          type: "button",
          class: "a_btn_close",
          textScreenReader: this.textClose,
          onClick: this.close,
        })
      ]),
    ]);
  },
};
