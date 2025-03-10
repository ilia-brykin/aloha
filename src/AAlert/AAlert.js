import {
  h,
} from "vue";

import AButton from "../AButton/AButton";
import AIcon from "../AIcon/AIcon";
import ATranslation from "../ATranslation/ATranslation";

import AttributesAPI from "./compositionAPI/AttributesAPI";
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
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    ariaAtomic: {
      type: Boolean,
      required: false,
      default: true,
    },
    btnCloseAttributes: {
      type: Object,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.btnCloseAttributes,
    },
    closable: {
      type: Boolean,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.closable,
    },
    extra: {
      type: Object,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.extra,
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
    removeAlertOnClose: {
      type: Boolean,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.removeAlertOnClose,
    },
    role: {
      type: String,
      required: false,
      default: "alert",
    },
    safeHtml: {
      type: String,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.safeHtml,
    },
    showIcon: {
      type: Boolean,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.showIcon,
    },
    text: {
      type: String,
      required: false,
      default: () => alertPluginOptions.value.propsDefault.text,
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

    const {
      ariaAtomicLocal,
      roleLocal,
    } = AttributesAPI(props);

    expose({
      close,
      isHidden,
    });

    return {
      alertClassLocal,
      ariaAtomicLocal,
      close,
      iconLocal,
      isHidden,
      roleLocal,
    };
  },
  render() {
    if (this.isHidden) {
      return null;
    }
    return h("div", {
      class: [
        "a_alert__parent",
        {
          a_alert__parent_closable: this.closable,
        },
      ],
    }, [
      h("div", {
        role: this.roleLocal,
        ariaAtomic: this.ariaAtomicLocal,
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
            (this.html || this.text || this.safeHtml) && h(ATranslation, {
              alwaysTranslate: this.alwaysTranslate,
              extra: this.extra,
              html: this.html,
              safeHtml: this.safeHtml,
              text: this.text,
            }),
            this.$slots.default && this.$slots.default(),
          ]),
        ]),
      ]),
      (this.isVisible && this.closable) && h(AButton, {
        alwaysTranslate: this.alwaysTranslate,
        type: "button",
        class: "a_btn_close",
        textScreenReader: this.textClose,
        ...this.btnCloseAttributes,
        onClick: this.close,
      }),
    ]);
  },
};
