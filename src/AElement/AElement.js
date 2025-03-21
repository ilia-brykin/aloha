import {
  h,
} from "vue";
import {
  AIcon,
  APlacements,
  ASpinner,
  ATranslation,
} from "../index";

import AriaLabelAPI from "../ATranslation/compositionAPI/AriaLabelAPI";
import AttributesAPI from "./comositionAPI/AttributesAPI";
import ClickAPI from "./comositionAPI/ClickAPI";
import ComponentLocalAPI from "./comositionAPI/ComponentLocalAPI";
import DisabledAPI from "./comositionAPI/DisabledAPI";
import HtmlTitleAPI from "./comositionAPI/HtmlTitleAPI";
import LoadingAPI from "./comositionAPI/LoadingAPI";
import RouterLinkAPI from "./comositionAPI/RouterLinkAPI";
import SwitchAPI from "./comositionAPI/SwitchAPI";
import TagAPI from "./comositionAPI/TagAPI";
import TextAPI from "./comositionAPI/TextAPI";
import TitleAPI from "./comositionAPI/TitleAPI";
import UIExcludeRenderAttributesAPI from "../ui/compositionApi/UIExcludeRenderAttributesAPI";

import {
  isInteger,
  isString,
  uniqueId,
} from "lodash-es";

export default {
  name: "AElement",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
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
    classDefault: {
      type: String,
      required: false,
      default: "aloha_element",
    },
    classDefaultHidden: {
      type: String,
      required: false,
      default: "aloha_element__hidden",
    },
    classDisabled: {
      type: String,
      required: false,
      default: "disabled",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
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
    href: {
      type: String,
      required: false,
      default: undefined,
    },
    html: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    htmlScreenReader: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    iconAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    iconClass: {
      type: [String, Object],
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
      default: () => uniqueId("a_element_"),
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
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    safeHtmlScreenReader: {
      type: [String, Number, Object, Array],
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
      default: undefined,
    },
    target: {
      type: String,
      required: false,
      default: undefined,
    },
    text: {
      type: [String, Number, Object, Array],
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
      type: [String, Number, Object, Array],
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
    titleAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    titlePlacement: {
      type: String,
      required: false,
      default: "top",
      validator: placement => APlacements.indexOf(placement) !== -1,
    },
    titleZIndex: {
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
    to: {
      type: [Object, String],
      required: false,
      default: undefined,
    },
    type: {
      type: String,
      required: true,
      default: "text",
      validator: value => ["button", "submit", "reset", "link", "text"].indexOf(value) !== -1,
    },
  },
  emits: [
    "click",
  ],
  setup(props, context) {
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      isRouterLink,
    } = RouterLinkAPI(props);

    const {
      disabledLocal,
    } = DisabledAPI(props);

    const {
      tagLocal,
    } = TagAPI(props, {
      isRouterLink,
    });

    const {
      toHrefAttributes,
      typeAttribut,
    } = AttributesAPI(props, {
      isRouterLink,
      tagLocal,
    });

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
    } = ComponentLocalAPI(props, {
      tagLocal,
    });

    const {
      elementRef,
      htmlTitleAttributes,
    } = HtmlTitleAPI(props, {
      tagLocal,
    });

    const {
      ariaLabelAttributes,
    } = AriaLabelAPI(props);

    const {
      isSwitchActive,
      switchClass,
    } = SwitchAPI(props);


    return {
      ariaLabelAttributes,
      attributesToExcludeFromRender,
      componentLocal,
      disabledLocal,
      elementRef,
      htmlTitleAttributes,
      isLoadingLeft,
      isLoadingRight,
      isSwitchActive,
      isTextOrHtmlScreenReaderVisible,
      isTextOrHtmlVisible,
      isTitleVisible,
      onClick,
      switchClass,
      tagLocal,
      toHrefAttributes,
      typeAttribut,
    };
  },
  render() {
    return h(this.componentLocal, {
      ...this.$attrs,
      ...this.htmlTitleAttributes,
      ...this.ariaLabelAttributes,
      ...this.toHrefAttributes,
      ref: "elementRef",
      id: this.id,
      class: [
        this.classDefault,
        this.switchClass,
        this.class,
        {
          [this.classDisabled]: this.ariaDisabled,
        },
      ],
      type: this.typeAttribut,
      tabindex: this.tabindex,
      disabled: this.disabledLocal,
      ariaDisabled: this.ariaDisabled,
      "aria-pressed": this.isSwitchActive,
      isAllRowsSelected: undefined, // TODO: ATable
      onClick: this.onClick,
      ...this.attributes,
      ...this.attributesToExcludeFromRender,
    }, {
      default: () => [
        (!this.isTitleHtml && this.isTitleVisible) ?
          h(ATranslation, {
            tag: "span",
            alwaysTranslate: this.alwaysTranslate,
            ariaHidden: true,
            class: [
              "a_position_absolute_all",
              this.classDefaultHidden,
            ],
            title: this.title,
            extra: this.extra,
            style: {
              zIndex: this.titleZIndex,
            },
            ...this.titleAttributes,
          }) :
          "",
        this.isTextOrHtmlScreenReaderVisible ?
          h(ATranslation, {
            alwaysTranslate: this.alwaysTranslate,
            class: [
              "a_sr_only",
              this.classDefaultHidden,
            ],
            tag: "span",
            text: this.textScreenReader,
            html: this.htmlScreenReader,
            safeHtml: this.safeHtmlScreenReader,
            extra: this.extra,
          }) :
          "",
        this.$slots.buttonPrepend ?
          this.$slots.buttonPrepend({ extraData: this.extraData }) :
          "",
        this.isLoadingLeft ?
          h(ASpinner, {
            class: [
              "aloha_btn__spinner_left",
              this.loadingClass,
            ],
          }) :
          "",
        h(AIcon, {
          icon: this.iconLeft,
          iconTag: this.iconTag,
          class: [
            "aloha_btn__icon_left",
            this.iconClass,
          ],
          ...this.iconAttributes,
        }),
        this.$slots.default ?
          this.$slots.default({ extraData: this.extraData }) :
          "",
        this.isTextOrHtmlVisible ?
          h(ATranslation, {
            alwaysTranslate: this.alwaysTranslate,
            ariaHidden: this.textAriaHidden,
            class: this.textClass,
            extra: this.extra,
            html: this.html,
            safeHtml: this.safeHtml,
            tag: this.textTag,
            text: this.text,
            textAfter: this.textAfter,
            textBefore: this.textBefore,
          }) :
          "",
        h(AIcon, {
          icon: this.iconRight,
          iconTag: this.iconTag,
          class: [
            "aloha_btn__icon_right",
            this.iconClass,
          ],
          ...this.iconAttributes,
        }),
        this.isLoadingRight ?
          h(ASpinner, {
            class: [
              "aloha_btn__spinner_right",
              this.loadingClass,
            ],
          }) :
          "",
        this.$slots.buttonAppend ?
          this.$slots.buttonAppend({ extraData: this.extraData }) :
          "",
      ],
      title: !this.isTitleHtml ||
        (!this.title && !this.$slots.buttonTitle) ?
        () => "" :
        () => {
          return [
            this.isTitleVisible ?
              h(ATranslation, {
                alwaysTranslate: this.alwaysTranslate,
                html: this.title,
                tag: "span",
                extra: this.extra,
              }) :
              "",
            this.$slots.buttonTitle ?
              this.$slots.buttonTitle({ extraData: this.extraData }) :
              "",
          ];
        },
    });
  },
};
