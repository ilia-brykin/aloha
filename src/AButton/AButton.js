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
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_btn_"),
    },
    class: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    attributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    type: {
      type: String,
      required: false,
      default: "button",
      validator: value => ["button", "submit", "reset"].indexOf(value) !== -1,
    },
    title: {
      type: String,
      required: false,
      default: undefined,
    },
    isTitleHtml: {
      type: Boolean,
      required: false,
    },
    titlePlacement: {
      type: String,
      required: false,
      default: "top",
      validator: value => ["top", "left", "bottom", "right"].indexOf(value) !== -1,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    ariaDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    loadingClass: {
      type: [String, Object],
      required: false,
      default: "a_spinner_small",
    },
    loadingAlign: {
      type: String,
      required: false,
      default: "right",
      validator: value => ["right", "left"].indexOf(value) !== -1,
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
    iconClass: {
      type: String,
      required: false,
      default: undefined,
    },
    iconAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    iconTag: {
      type: String,
      required: false,
      default: undefined,
    },
    text: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    textScreenReader: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    textAriaHidden: {
      type: Boolean,
      required: false,
      default: false,
    },
    textClass: {
      type: String,
      required: false,
      default: undefined,
    },
    prevent: {
      type: Boolean,
      required: false,
    },
    stop: {
      type: Boolean,
      required: false,
    },
    extraTranslate: {
      type: Object,
      required: false,
      default: undefined,
    },
    tag: {
      type: String,
      required: false,
      default: "button",
    },
    tabindex: {
      type: [Number, String],
      required: false,
      default: undefined,
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
      isTextScreenReaderVisible,
      isTextVisible,
      textForCurrentDevice,
      textScreenReaderForCurrentDevice,
    } = TextAPI(props);

    const {
      onClick,
    } = ClickAPI(props, context);

    return {
      iconLeftCurrentDevice,
      iconRightCurrentDevice,
      isLoadingLeft,
      isLoadingRight,
      isTextScreenReaderVisible,
      isTextVisible,
      isTitleVisible,
      onClick,
      textForCurrentDevice,
      textScreenReaderForCurrentDevice,
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
      this.isTextScreenReaderVisible && h(ATranslation, {
        class: "a_sr_only aloha_btn__hidden",
        tag: "span",
        html: this.textScreenReaderForCurrentDevice,
        extra: this.extraTranslate,
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
      this.isTextVisible && h(ATranslation, {
        tag: "span",
        class: this.textClass,
        html: this.textForCurrentDevice,
        extra: this.extraTranslate,
        ariaHidden: this.textAriaHidden,
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
