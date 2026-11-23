import {
  h,
} from "vue";
import {
  AButton,
  AIcon,
  ATranslation,
} from "../index";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import ClassAPI from "./compositionAPI/ClassAPI";
import CloseAPI from "./compositionAPI/CloseAPI";
import IconAPI from "./compositionAPI/IconAPI";

import Close from "../AIcon/Icons/Close";
import {
  getPropDefault,
} from "../plugins/AComponentsPlugin";

export default {
  name: "AAlert",
  props: {
    alertClass: {
      type: [String, Object],
      required: false,
      default: () => getPropDefault("AAlert", "alertClass"),
    },
    alertContentClass: {
      type: [String, Object],
      required: false,
      default: () => getPropDefault("AAlert", "alertContentClass"),
    },
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    announce: {
      type: String,
      required: false,
      default: () => getPropDefault("AAlert", "announce", "alert"),
      validator: value => ["alert", "alert-changes", "status", "status-changes", "none"].includes(value),
    },
    ariaAtomic: {
      type: [Boolean, String],
      required: false,
      default: undefined,
    },
    btnCloseAttributes: {
      type: Object,
      required: false,
      default: () => getPropDefault("AAlert", "btnCloseAttributes", {}),
    },
    btnCloseIcon: {
      type: String,
      required: false,
      default: () => getPropDefault("AAlert", "btnCloseIcon", Close),
    },
    closable: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("AAlert", "closable", false),
    },
    extra: {
      type: Object,
      required: false,
      default: () => getPropDefault("AAlert", "extra"),
    },
    html: {
      type: String,
      required: false,
      default: () => getPropDefault("AAlert", "html"),
    },
    icon: {
      type: String,
      required: false,
      default: () => getPropDefault("AAlert", "icon"),
    },
    iconClass: {
      type: String,
      required: false,
      default: () => getPropDefault("AAlert", "iconClass"),
    },
    isVisible: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("AAlert", "isVisible", false),
    },
    removeAlertOnClose: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("AAlert", "removeAlertOnClose", false),
    },
    role: {
      type: String,
      required: false,
      default: undefined,
    },
    safeHtml: {
      type: String,
      required: false,
      default: () => getPropDefault("AAlert", "safeHtml"),
    },
    showIcon: {
      type: Boolean,
      required: false,
      default: () => getPropDefault("AAlert", "showIcon", false),
    },
    text: {
      type: String,
      required: false,
      default: () => getPropDefault("AAlert", "text"),
    },
    textClose: {
      type: String,
      required: false,
      default: () => getPropDefault("AAlert", "textClose", "_A_ALERT_CLOSE_"),
    },
    type: {
      type: String,
      required: false,
      default: () => getPropDefault("AAlert", "type", "danger"),
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
      alertParentClassLocal,
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
      alertParentClassLocal,
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
        this.alertParentClassLocal,
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
        class: "a_btn_close",
        iconLeft: this.btnCloseIcon,
        textScreenReader: this.textClose,
        title: this.textClose,
        type: "button",
        ...this.btnCloseAttributes,
        onClick: this.close,
      }),
    ]);
  },
};
