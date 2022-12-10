import {
  h,
} from "vue";

import AIcon from "../AIcon/AIcon";
import ASpinner from "../ASpinner/ASpinner";
import ATranslation from "../ATranslation/ATranslation";

import ClickAPI from "./comositionAPI/ClickAPI";
import IconAPI from "./comositionAPI/IconAPI";
import LoadingAPI from "./comositionAPI/LoadingAPI";
import TextAPI from "./comositionAPI/TextAPI";
import TitleAPI from "./comositionAPI/TitleAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AButton",
  props: {
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_ui_"),
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
      default: undefined,
    },
    loadingAlign: {
      type: String,
      required: false,
      default: "right",
      validator: value => ["right", "left"].indexOf(value) !== -1,
    },
    icon: {
      type: String,
      required: false,
      default: undefined,
    },
    iconAlign: {
      type: String,
      required: false,
      default: "right",
      validator: value => ["right", "left"].indexOf(value) !== -1,
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
      type: [String, Number],
      required: false,
      default: undefined,
    },
    textScreenReader: {
      type: String,
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
      isIconLeft,
      isIconRight,
    } = IconAPI(props);

    const {
      isTextScreenReaderVisible,
      isTextVisible,
    } = TextAPI(props);

    const {
      onClick,
    } = ClickAPI(props, context);

    return {
      isIconLeft,
      isIconRight,
      isLoadingLeft,
      isLoadingRight,
      isTextScreenReaderVisible,
      isTextVisible,
      isTitleVisible,
      onClick,
    };
  },
  render() {
    return h("button", {
      id: this.id,
      class: [
        "aloha_btn",
        {
          disabled: this.ariaDisabled,
        },
      ],
      type: this.type,
      disabled: this.disabled,
      ariaDisabled: this.ariaDisabled,
      onClick: this.onClick,
    }, [
      this.isTitleVisible && h("span", {
        ariaHidden: true,
        class: "a_position_absolute_all",
        title: this.title,
      }),
      this.isLoadingLeft && h(ASpinner, {
        class: [
          "aloha_btn__spinner_left",
          this.loadingClass,
        ],
      }),
      this.isIconLeft && h(AIcon, {
        icon: this.icon,
        iconTag: this.iconTag,
        class: [
          "aloha_btn__icon_left",
          this.iconClass,
        ],
        ...this.iconAttributes,
      }),
      this.$slots.default && this.$slots.default(),
      this.isTextVisible && h(ATranslation, {
        class: this.textClass,
        html: this.text,
        extra: this.extraTranslate,
        ariaHidden: this.textAriaHidden,
      }),
      this.isTextScreenReaderVisible && h(ATranslation, {
        class: "a_sr_only",
        html: this.text,
        extra: this.extraTranslate,
      }),
      this.isIconLeft && h(AIcon, {
        icon: this.icon,
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
    ]);
  },
};
