import {
  h,
} from "vue";

import AIcon from "../AIcon/AIcon";
import ASpinner from "../ASpinner/ASpinner";
import ATranslation from "../ATranslation/ATranslation";

import ClickAPI from "./comositionAPI/ClickAPI";
import IconsAPI from "./comositionAPI/IconsAPI";
import LoadingAPI from "./comositionAPI/LoadingAPI";
import TextAPI from "./comositionAPI/TextAPI";
import TitleAPI from "./comositionAPI/TitleAPI";

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
      validator: value => ["top", "left", "bottom", "right"].indexOf(value) !== -1,
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
      iconLeftCurrentDevice,
      iconRightCurrentDevice,
    } = IconsAPI(props);

    const {
      isTextOrHtmlVisible,
      isTextOrHtmlScreenReaderVisible,
    } = TextAPI(props);

    const {
      onClick,
    } = ClickAPI(props, context);

    return {
      iconLeftCurrentDevice,
      iconRightCurrentDevice,
      isLoadingLeft,
      isLoadingRight,
      isTextOrHtmlVisible,
      isTextOrHtmlScreenReaderVisible,
      isTitleVisible,
      onClick,
    };
  },
  render() {
    return h(this.tag, {
      ...this.$attrs,
      ...this.attributes,
      id: this.id,
      class: [
        "aloha_btn",
        this.class,
        {
          inactive: this.ariaDisabled,
        },
      ],
      type: this.type,
      tabindex: this.tabindex,
      disabled: this.disabled,
      ariaDisabled: this.ariaDisabled,
      // TODO: ATable
      isHiddenCallback: undefined,
      isAllRowsSelected: undefined,
      onClick: this.onClick,
    }, [
      this.isTitleVisible && h(ATranslation, {
        tag: "span",
        ariaHidden: true,
        class: "a_position_absolute_all aloha_btn__hidden",
        title: this.title,
      }),
      this.isTextOrHtmlScreenReaderVisible && h(ATranslation, {
        class: "a_sr_only aloha_btn__hidden",
        tag: "span",
        text: this.textScreenReader,
        html: this.htmlScreenReader,
        safeHtml: this.safeHtmlScreenReader,
        extra: this.extra,
      }),
      this.isLoadingLeft && h(ASpinner, {
        class: [
          "aloha_btn__spinner_left",
          this.loadingClass,
        ],
      }),
      this.iconLeftCurrentDevice && h(AIcon, {
        icon: this.iconLeftCurrentDevice,
        iconTag: this.iconTag,
        class: [
          "aloha_btn__icon_left",
          this.iconClass,
        ],
        ...this.iconAttributes,
      }),
      this.$slots.default && this.$slots.default(),
      this.isTextOrHtmlVisible && h(ATranslation, {
        ariaHidden: this.textAriaHidden,
        ariaLabel: this.ariaLabel,
        class: this.textClass,
        extra: this.extra,
        html: this.html,
        safeHtml: this.safeHtml,
        tag: "span",
        text: this.text,
        textAfter: this.textAfter,
        textBefore: this.textBefore,
      }),
      this.iconRightCurrentDevice && h(AIcon, {
        icon: this.iconRightCurrentDevice,
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
    ]);
  },
};
