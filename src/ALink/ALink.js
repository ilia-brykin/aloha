import {
  h,
} from "vue";

import AIcon from "../AIcon/AIcon";
import ASpinner from "../ASpinner/ASpinner";
import ATranslation from "../ATranslation/ATranslation";

import AriaLabelAPI from "../ATranslation/compositionAPI/AriaLabelAPI";
import ClickAPI from "./compositionAPI/ClickAPI";
import ComponentLocalAPI from "./compositionAPI/ComponentLocalAPI";
import HtmlTitleAPI from "./compositionAPI/HtmlTitleAPI";
import LoadingAPI from "../AButton/comositionAPI/LoadingAPI";
import TextAPI from "../AButton/comositionAPI/TextAPI";
import TitleAPI from "../AButton/comositionAPI/TitleAPI";
import ToHrefAPI from "./compositionAPI/ToHrefAPI";

import placements from "../const/placements";
import {
  isInteger,
  isString,
  uniqueId,
} from "lodash-es";

export default {
  name: "ALink",
  inheritAttrs: false,
  props: {
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
    href: {
      type: String,
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
      default: () => uniqueId("a_link_"),
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
    target: {
      type: String,
      required: false,
      default: undefined,
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
    textTag: {
      type: String,
      required: false,
      default: "span",
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
    to: {
      type: [Object, String],
      required: false,
      default: undefined,
    },
    zIndexForTitle: {
      type: [Number, String],
      required: false,
      default: "auto",
      validator: value => {
        if (isString(value)) {
          return value === "auto";
        }
        return isInteger(value);
      },
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
      componentLocal,
      isRouterLink,
      tagLocal,
    } = ComponentLocalAPI(props);

    const {
      htmlTitleAttributes,
    } = HtmlTitleAPI(props, {
      tagLocal,
    });

    const {
      toHrefAttributes,
    } = ToHrefAPI(props, {
      isRouterLink,
    });

    const {
      ariaLabelAttributes,
    } = AriaLabelAPI(props);

    const {
      onClick,
    } = ClickAPI(props, context);

    return {
      ariaLabelAttributes,
      componentLocal,
      htmlTitleAttributes,
      isLoadingLeft,
      isLoadingRight,
      isTextOrHtmlScreenReaderVisible,
      isTextOrHtmlVisible,
      isTitleVisible,
      onClick,
      toHrefAttributes,
    };
  },
  render() {
    return h(this.componentLocal, {
      ...this.$attrs,
      ...this.attributes,
      ...this.htmlTitleAttributes,
      ...this.toHrefAttributes,
      ...this.ariaLabelAttributes,
      id: this.id,
      target: this.target,
      class: [
        "aloha_link",
        this.class,
        {
          inactive: this.disabled,
        },
      ],
      ariaDisabled: this.disabled,
      onClick: this.onClick,
    }, {
      default: () => [
        (!this.isTitleHtml && this.isTitleVisible) && h(ATranslation, {
          tag: "span",
          ariaHidden: true,
          class: "a_position_absolute_all aloha_link__hidden",
          title: this.title,
          extra: this.extra,
          style: {
            zIndex: this.zIndexForTitle,
          },
        }),
        this.isTextOrHtmlScreenReaderVisible && h(ATranslation, {
          class: "a_sr_only aloha_link__hidden",
          tag: "span",
          text: this.textScreenReader,
          html: this.htmlScreenReader,
          safeHtml: this.safeHtmlScreenReader,
          extra: this.extra,
        }),
        this.$slots.linkPrepend && this.$slots.linkPrepend(),
        this.isLoadingLeft && h(ASpinner, {
          class: [
            "aloha_link__spinner_left",
            this.loadingClass,
          ],
        }),
        h(AIcon, {
          icon: this.iconLeft,
          iconTag: this.iconTag,
          class: [
            "aloha_link__icon_left",
            this.iconClass,
          ],
          ...this.iconAttributes,
        }),
        this.$slots.default && this.$slots.default(),
        this.isTextOrHtmlVisible && h(ATranslation, {
          ariaHidden: this.textAriaHidden,
          class: this.textClass,
          extra: this.extra,
          html: this.html,
          safeHtml: this.safeHtml,
          tag: this.textTag,
          text: this.text,
          textAfter: this.textAfter,
          textBefore: this.textBefore,
        }),
        h(AIcon, {
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
        this.$slots.linkAppend && this.$slots.linkAppend(),
      ],
      title: () => {
        if (!this.isTitleHtml) {
          return;
        }
        return [
          this.isTitleVisible && h(ATranslation, {
            html: this.title,
            tag: "span",
          }),
          this.$slots.linkTitle && this.$slots.linkTitle(),
        ];
      },
    });
  },
};
