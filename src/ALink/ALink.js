import {
  h,
  resolveComponent,
} from "vue";

import AIcon from "../AIcon/AIcon";
import ASpinner from "../ASpinner/ASpinner";
import ATranslation from "../ATranslation/ATranslation";

import LoadingAPI from "../AButton/comositionAPI/LoadingAPI";
import TextAPI from "../AButton/comositionAPI/TextAPI";
import TitleAPI from "../AButton/comositionAPI/TitleAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ALink",
  inheritAttrs: false,
  props: {
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
      default: false,
    },
    extraTranslate: {
      type: Object,
      required: false,
      default: undefined,
    },
    href: {
      type: String,
      required: false,
      default: undefined,
    },
    iconLeft: {
      type: String,
      required: false,
      default: undefined,
    },
    iconRight: {
      type: String,
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
    iconTag: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_link_"),
    },
    isTitleHtml: {
      type: Boolean,
      required: false,
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
    target: {
      type: String,
      required: false,
      default: undefined,
    },
    text: {
      type: [String, Number],
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
    textScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    title: {
      type: String,
      required: false,
      default: undefined,
    },
    titlePlacement: {
      type: String,
      required: false,
      default: "top",
      validator: value => ["top", "left", "bottom", "right"].indexOf(value) !== -1,
    },
    to: {
      type: [Object, String],
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const {
      isTitleVisible,
    } = TitleAPI(props);

    const {
      isLoadingLeft,
      isLoadingRight,
    } = LoadingAPI(props);

    const {
      isTextScreenReaderVisible,
      isTextVisible,
    } = TextAPI(props);

    return {
      isLoadingLeft,
      isLoadingRight,
      isTextScreenReaderVisible,
      isTextVisible,
      isTitleVisible,
    };
  },
  render() {
    const CHILDREN = [
      this.isTitleVisible && h("span", {
        ariaHidden: true,
        class: "a_position_absolute_all aloha_link__hidden",
        title: this.title,
      }),
      this.isTextScreenReaderVisible && h(ATranslation, {
        class: "a_sr_only aloha_link__hidden",
        tag: "span",
        html: this.textScreenReader,
        extra: this.extraTranslate,
      }),
      this.isLoadingLeft && h(ASpinner, {
        class: [
          "aloha_link__spinner_left",
          this.loadingClass,
        ],
      }),
      this.iconLeft && h(AIcon, {
        icon: this.iconLeft,
        iconTag: this.iconTag,
        class: [
          "aloha_link__icon_left",
          this.iconClass,
        ],
        ...this.iconAttributes,
      }),
      this.$slots.default && this.$slots.default(),
      this.isTextVisible && h(ATranslation, {
        tag: "span",
        class: this.textClass,
        html: this.text,
        extra: this.extraTranslate,
        ariaHidden: this.textAriaHidden,
      }),
      this.iconRight && h(AIcon, {
        icon: this.iconRight,
        iconTag: this.iconTag,
        class: [
          "aloha_link__icon_right",
          this.iconClass,
        ],
        ...this.iconAttributes,
      }),
      this.isLoadingRight && h(ASpinner, {
        class: [
          "aloha_link__spinner_right",
          this.loadingClass,
        ],
      }),
    ];

    if (this.href) {
      return h("a", {
        ...this.attributes,
        href: this.href,
        target: this.target,
        id: this.id,
        class: [
          "aloha_link",
          this.class,
          {
            inactive: this.disabled,
          },
        ],
        ariaDisabled: this.disabled,
      }, CHILDREN);
    }
    if (this.to) {
      return h(resolveComponent("RouterLink"), {
        ...this.attributes,
        to: this.to,
        id: this.id,
        class: [
          "aloha_link",
          this.class,
          {
            inactive: this.disabled,
          },
        ],
        ariaDisabled: this.disabled,
      }, CHILDREN);
    }
  },
};
