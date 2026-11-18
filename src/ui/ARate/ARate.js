import {
  h,
} from "vue";
import {
  AErrorsText,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  ALabel,
  UiAPI,
  UiDisabledAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import AIcon from "../../AIcon/AIcon";
import ATranslation from "../../ATranslation/ATranslation";

import DeprecatedAPI from "./compositionAPI/DeprecatedAPI";
import KeyboardAPI from "./compositionAPI/KeyboardAPI";
import LevelAPI from "./compositionAPI/LevelAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import PointerAPI from "./compositionAPI/PointerAPI";
import TextAPI from "./compositionAPI/TextAPI";
import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

import {
  Star,
  StarFill,
} from "./utils/icons";
import {
  isInteger,
  uniqueId,
} from "lodash-es";

export default {
  name: "ARate",
  inheritAttrs: false,
  props: {
    allowHalf: {
      type: Boolean,
      required: false,
      default: false,
    },
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    clearable: {
      type: Boolean,
      required: false,
      default: false,
    },
    colors: {
      type: [String, Array, Object],
      required: false,
      default: undefined,
    },
    dependencies: {
      type: [Array, Object],
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    errors: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    errorsClass: {
      type: [String, Object],
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
    helpText: {
      type: String,
      required: false,
      default: undefined,
    },
    highThreshold: {
      type: Number,
      required: false,
      default: 4,
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    icons: {
      type: [String, Array, Object],
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_rate_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    labelDescription: {
      type: String,
      required: false,
      default: undefined,
    },
    labelScreenReader: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    lowThreshold: {
      type: Number,
      required: false,
      default: 2,
    },
    max: {
      type: Number,
      required: false,
      default: 5,
      validator: value => isInteger(value) && value > 0,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelUndefined: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
      default: 0,
    },
    modelValue: {
      type: [Number, String],
      required: false,
      default: undefined,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: "",
    },
    readonlyValueParentClass: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    scoreTemplate: {
      type: String,
      required: false,
      default: "_A_RATE_SCORE_{{value}}_{{max}}_",
    },
    showScore: {
      type: Boolean,
      required: false,
      default: false,
    },
    showText: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["small", "large", "medium", "big"].indexOf(value) !== -1,
    },
    texts: {
      type: Array,
      required: false,
      default: () => [
        "_A_RATE_TEXT_1_",
        "_A_RATE_TEXT_2_",
        "_A_RATE_TEXT_3_",
        "_A_RATE_TEXT_4_",
        "_A_RATE_TEXT_5_",
      ],
    },
    type: {
      type: String,
      required: false,
      default: "rate",
    },
    voidIcon: {
      type: String,
      required: false,
      default: undefined,
    },
    // Deprecated (2.x), will be removed in 4.0
    color: {
      type: String,
      required: false,
      default: undefined,
    },
    halfIcon: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    hoveredColor: {
      type: String,
      required: false,
      default: undefined,
    },
    icon: {
      type: String,
      required: false,
      default: undefined,
    },
    iconFill: {
      type: String,
      required: false,
      default: undefined,
    },
    rating: {
      type: Number,
      required: false,
      default: undefined,
    },
    text: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "blur",
    "focus",
    "update:modelValue",
  ],
  setup(props, context) {
    const {
      disabledAttribut,
    } = UiDisabledAPI(props);

    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      ariaDescribedbyLocal,
      changeModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      labelDescriptionId,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      allowHalfLocal,
      colorsLocal,
      iconsLocal,
      maxLocal,
      sizeLocal,
      voidIconLocal,
    } = DeprecatedAPI(props);

    const {
      clear,
      hoverValue,
      isHovering,
      setValue,
      step,
      valueDisplayed,
      valueLocal,
      valueMin,
    } = ModelAPI(props, {
      allowHalfLocal,
      changeModel,
      maxLocal,
    });

    const {
      colorCurrent,
      iconFillCurrent,
      level,
    } = LevelAPI(props, {
      colorsLocal,
      iconsLocal,
      valueDisplayed,
    });

    const {
      ariaValuetext,
      isScoreVisible,
      isTextVisible,
      scoreExtra,
      textCurrent,
    } = TextAPI(props, {
      maxLocal,
      valueDisplayed,
      valueLocal,
    });

    const {
      onClickItem,
      onPointerleave,
      onPointermoveItem,
    } = PointerAPI(props, {
      allowHalfLocal,
      hoverValue,
      setValue,
      valueLocal,
    });

    const {
      onKeydown,
    } = KeyboardAPI(props, {
      clear,
      hoverValue,
      maxLocal,
      setValue,
      step,
      valueLocal,
      valueMin,
    });

    return {
      ariaDescribedbyLocal,
      ariaValuetext,
      attributesToExcludeFromRender,
      colorCurrent,
      componentStyleHide,
      disabledAttribut,
      errorsId,
      helpTextId,
      htmlIdLocal,
      iconFillCurrent,
      isErrors,
      isHovering,
      isScoreVisible,
      isTextVisible,
      labelDescriptionId,
      level,
      maxLocal,
      onBlur,
      onClickItem,
      onFocus,
      onKeydown,
      onPointerleave,
      onPointermoveItem,
      scoreExtra,
      sizeLocal,
      textCurrent,
      valueDisplayed,
      valueLocal,
      voidIconLocal,
    };
  },
  methods: {
    renderItems({ isInteractive }) {
      const ITEMS = [];
      for (let index = 0; index < this.maxLocal; index++) {
        const FILL = Math.min(Math.max(this.valueDisplayed - index, 0), 1) * 100;
        ITEMS.push(h("span", {
          key: index,
          class: ["a_rate__item", {
            a_rate__item_full: FILL === 100,
            a_rate__item_empty: FILL === 0,
          }],
          "aria-hidden": "true",
          onPointermove: isInteractive ? $event => this.onPointermoveItem({ $event, index }) : undefined,
          onClick: isInteractive ? $event => this.onClickItem({ $event, index }) : undefined,
        }, [
          h(AIcon, {
            icon: this.voidIconLocal || Star,
            class: "a_rate__icon a_rate__icon_void",
          }),
          FILL > 0 && h("span", {
            class: "a_rate__item__fill",
            style: `width: ${ FILL }%;`,
          }, [
            h(AIcon, {
              icon: this.iconFillCurrent || StarFill,
              class: "a_rate__icon a_rate__icon_fill",
            }),
          ]),
        ]));
      }
      return ITEMS;
    },

    renderTexts() {
      return [
        this.isScoreVisible && h(ATranslation, {
          class: "a_rate__score",
          tag: "span",
          text: this.scoreTemplate,
          extra: this.scoreExtra,
          alwaysTranslate: this.alwaysTranslate,
          "aria-hidden": "true",
        }),
        this.isTextVisible && h(ATranslation, {
          class: "a_rate__text",
          tag: "span",
          text: this.textCurrent,
          extra: this.extra,
          alwaysTranslate: this.alwaysTranslate,
          "aria-hidden": "true",
        }),
        // Deprecated (2.x): static text after the icons
        this.text && h(ATranslation, {
          class: "a_rate__text",
          tag: "span",
          text: this.text,
          extra: this.extra,
          alwaysTranslate: this.alwaysTranslate,
        }),
      ];
    },

    getClassRate({ isInteractive }) {
      return [
        "a_rate",
        `a_rate_level_${ this.level }`,
        {
          [`a_rate_${ this.sizeLocal }`]: !!this.sizeLocal,
          a_rate_disabled: this.disabled,
          a_rate_readonly: !isInteractive,
          a_rate_hovering: this.isHovering,
          a_rate_invalid: this.isErrors,
        },
      ];
    },

    getStyleRate() {
      const STYLE = {};
      if (this.colorCurrent) {
        STYLE["--a_rate_fill_color_current"] = this.colorCurrent;
      }
      if (this.hoveredColor) {
        STYLE["--a_rate_hover_fill_color"] = this.hoveredColor;
      }
      return STYLE;
    },
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    if (this.readonly) {
      return h(AFormReadonly, {
        ...this.$attrs,
        valueParentClass: this.readonlyValueParentClass,
        id: this.htmlIdLocal,
        alwaysTranslate: this.alwaysTranslate,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        modelValue: this.valueLocal,
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        style: this.componentStyleHide,
      }, () => [
        h("span", {
          class: this.getClassRate({ isInteractive: false }),
          style: this.getStyleRate(),
          role: "img",
          "aria-label": this.ariaValuetext,
        }, [
          h("span", {
            class: "a_rate__items",
          }, this.renderItems({ isInteractive: false })),
          ...this.renderTexts(),
        ]),
      ]);
    }

    const HAS_LABEL = !!(this.label || this.labelScreenReader);

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: "a_form_element__parent",
      }, [
        HAS_LABEL ?
          h(ALabel, {
            id: this.htmlIdLocal,
            alwaysTranslate: this.alwaysTranslate,
            clickLabel: () => this.$refs.rateRef?.focus(),
            extra: this.extra,
            hideFor: true,
            isError: this.isErrors,
            label: this.label,
            labelClass: this.labelClass,
            labelScreenReader: this.labelScreenReader,
            required: this.required,
            tag: "div",
          }) :
          "",
        h(AFormLabelDescription, {
          id: this.labelDescriptionId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.labelDescription,
          extra: this.extra,
          isLabelFloat: false,
        }),
        h("div", {
          class: "a_form_element",
        }, [
          h("div", {
            ref: "rateRef",
            id: this.htmlIdLocal,
            class: this.getClassRate({ isInteractive: true }),
            style: this.getStyleRate(),
            role: "slider",
            tabindex: this.disabled ? -1 : 0,
            "aria-labelledby": HAS_LABEL ? `${ this.htmlIdLocal }_label` : undefined,
            "aria-label": HAS_LABEL ?
              undefined :
              getTranslatedText({
                placeholder: "_A_RATE_ARIA_LABEL_",
                alwaysTranslate: this.alwaysTranslate,
              }),
            "aria-describedby": this.ariaDescribedbyLocal,
            "aria-valuemin": 0,
            "aria-valuemax": this.maxLocal,
            "aria-valuenow": this.valueLocal,
            "aria-valuetext": this.ariaValuetext,
            "aria-disabled": this.disabledAttribut ? "true" : undefined,
            "aria-invalid": this.isErrors ? "true" : undefined,
            onKeydown: this.onKeydown,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          }, [
            h("span", {
              class: "a_rate__items",
              onPointerleave: this.onPointerleave,
            }, this.renderItems({ isInteractive: true })),
            ...this.renderTexts(),
          ]),
        ]),
        h(AFormHelpText, {
          id: this.helpTextId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.helpText,
          extra: this.extra,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          alwaysTranslate: this.alwaysTranslate,
          errors: this.errors,
          errorsClass: this.errorsClass,
        }),
      ]),
    ]);
  },
};
