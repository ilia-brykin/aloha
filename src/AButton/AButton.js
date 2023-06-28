import {
  h,
} from "vue";

import AIcon from "../AIcon/AIcon";
import ASpinner from "../ASpinner/ASpinner";
import ATranslation from "../ATranslation/ATranslation";

import AriaLabelAPI from "../ATranslation/compositionAPI/AriaLabelAPI";
import ClickAPI from "./comositionAPI/ClickAPI";
import ComponentLocalAPI from "./comositionAPI/ComponentLocalAPI";
import HtmlTitleAPI from "./comositionAPI/HtmlTitleAPI";
import LoadingAPI from "./comositionAPI/LoadingAPI";
import SwitchAPI from "./comositionAPI/SwitchAPI";
import TextAPI from "./comositionAPI/TextAPI";
import TitleAPI from "./comositionAPI/TitleAPI";

import placements from "../const/placements";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AButton",
  inheritAttrs: false,
  props: {
    ariaDisabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    ariaLabel: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    attributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    class: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    extraData: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol, null, undefined],
      required: false,
      default: undefined,
    },
    html: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    htmlScreenReader: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    iconAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    iconClass: {
      type: String,
      required: false,
      default: undefined,
    },
    iconLeft: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    iconRight: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    iconTag: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_btn_"),
    },
    isSwitch: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    isTitleHtml: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    loadingAlign: {
      type: String,
      required: false,
      default: "right",
      validator: value => ["right", "left"].indexOf(value) !== -1,
    },
    loadingClass: {
      type: [String, Object],
      required: false,
      default: "a_spinner_small",
    },
    modelSwitch: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    prevent: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    safeHtml: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    safeHtmlScreenReader: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    stop: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    tabindex: {
      type: [Number, String],
      required: false,
      default: undefined,
    },
    tag: {
      type: String,
      required: false,
      default: "button",
    },
    text: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    textAfter: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    textAriaHidden: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    textBefore: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    textClass: {
      type: String,
      required: false,
      default: undefined,
    },
    textScreenReader: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    title: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    titlePlacement: {
      type: String,
      required: false,
      default: "top",
      validator: placement => placements.indexOf(placement) !== -1,
    },
    type: {
      type: String,
      required: false,
      default: "button",
      validator: value => ["button", "submit", "reset"].indexOf(value) !== -1,
    },
  },
  emits: [
    "click",
  ],
  setup(props, context) {
    const {
      isTitleVisible,
    } = TitleAPI(props);

    const {
      isLoadingLeft,
      isLoadingRight,
    } = LoadingAPI(props);

    const {
      isTextOrHtmlVisible,
      isTextOrHtmlScreenReaderVisible,
    } = TextAPI(props);

    const {
      onClick,
    } = ClickAPI(props, context);

    const {
      componentLocal,
    } = ComponentLocalAPI(props);

    const {
      buttonRef,
      htmlTitleAttributes,
    } = HtmlTitleAPI(props);

    const {
      ariaLabelAttributes,
    } = AriaLabelAPI(props);

    const {
      isSwitchActive,
      switchClass,
    } = SwitchAPI(props);

    return {
      ariaLabelAttributes,
      buttonRef,
      componentLocal,
      htmlTitleAttributes,
      isLoadingLeft,
      isLoadingRight,
      isSwitchActive,
      isTextOrHtmlScreenReaderVisible,
      isTextOrHtmlVisible,
      isTitleVisible,
      onClick,
      switchClass,
    };
  },
  render() {
    return h(this.componentLocal, {
      ...this.$attrs,
      ...this.attributes,
      ...this.htmlTitleAttributes,
      ...this.ariaLabelAttributes,
      ref: "buttonRef",
      id: this.id,
      class: [
        "aloha_btn",
        this.switchClass,
        this.class,
        {
          inactive: this.ariaDisabled,
        },
      ],
      type: this.type,
      tabindex: this.tabindex,
      disabled: this.disabled,
      ariaDisabled: this.ariaDisabled,
      "aria-pressed": this.isSwitchActive,
      // TODO: ATable
      isAllRowsSelected: undefined,
      onClick: this.onClick,
    }, {
      default: () => [
        (!this.isTitleHtml && this.isTitleVisible) && h(ATranslation, {
          tag: "span",
          ariaHidden: true,
          class: "a_position_absolute_all aloha_btn__hidden",
          title: this.title,
          extra: this.extra,
        }),
        this.isTextOrHtmlScreenReaderVisible && h(ATranslation, {
          class: "a_sr_only aloha_btn__hidden",
          tag: "span",
          text: this.textScreenReader,
          html: this.htmlScreenReader,
          safeHtml: this.safeHtmlScreenReader,
          extra: this.extra,
        }),
        this.$slots.buttonPrepend && this.$slots.buttonPrepend(),
        this.isLoadingLeft && h(ASpinner, {
          class: [
            "aloha_btn__spinner_left",
            this.loadingClass,
          ],
        }),
        h(AIcon, {
          icon: this.iconLeft,
          iconTag: this.iconTag,
          class: [
            "aloha_btn__icon_left",
            this.iconClass,
          ],
          ...this.iconAttributes,
        }),
        this.$slots.default && this.$slots.default({ extraData: this.extraData }),
        this.isTextOrHtmlVisible && h(ATranslation, {
          ariaHidden: this.textAriaHidden,
          class: this.textClass,
          extra: this.extra,
          html: this.html,
          safeHtml: this.safeHtml,
          tag: "span",
          text: this.text,
          textAfter: this.textAfter,
          textBefore: this.textBefore,
        }),
        h(AIcon, {
          icon: this.iconRight,
          iconTag: this.iconTag,
          class: [
            "aloha_btn__icon_right",
            this.iconClass,
          ],
          ...this.iconAttributes,
        }),
        this.isLoadingRight && h(ASpinner, {
          class: [
            "aloha_btn__spinner_right",
            this.loadingClass,
          ],
        }),
        this.$slots.buttonAppend && this.$slots.buttonAppend(),
      ],
      title: () => {
        if (!this.isTitleHtml) {
          return;
        }
        return [
          this.isTitleVisible && h(ATranslation, {
            html: this.title,
            tag: "span",
            extra: this.extra,
          }),
          this.$slots.buttonTitle && this.$slots.buttonTitle(),
        ];
      },
    });
  },
};
