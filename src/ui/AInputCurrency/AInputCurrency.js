import {
  h,
  toRef,
  watch,
} from "vue";

import AButton from "../../AButton/AButton";
import AErrorsText from "../AErrorsText/AErrorsText";
import AFormElementBtnClear from "../../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import AIcon from "../../AIcon/AIcon";
import ALabel from "../ALabel/ALabel";

import IncreaseDecreaseAPI from "./compositionAPI/IncreaseDecreaseAPI";
import InputEventsAPI from "./compositionAPI/InputEventsAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import PlaceholderAPI from "../../ATranslation/compositionAPI/PlaceholderAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiClearButtonAPI from "../compositionApi/UiClearButtonAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";
import UtilsAPI from "./compositionAPI/UtilsAPI";
import VerifyAPI from "./compositionAPI/VerifyAPI";
import WidthAPI from "./compositionAPI/WidthAPI";

import {
  inputCurrencyPluginOptions,
} from "../../plugins/AInputCurrencyPlugin";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AInputCurrency",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    clearButtonClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    controlsType: {
      type: String,
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.controlsType,
      validator: value => ["plus-minus", "arrows", "none"].indexOf(value) !== -1,
      // TODO: "arrows",
    },
    currencySymbol: {
      type: String,
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.currencySymbol,
    },
    currencySymbolPosition: {
      type: String,
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.currencySymbolPosition,
      validator: value => ["right", "left"].indexOf(value) !== -1,
    },
    decimalDivider: {
      type: String,
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.decimalDivider,
      validator: (value, props) => {
        const thousandDivider = props?.thousandDivider;

        if (thousandDivider) {
          return [".", ","].indexOf(value) !== -1 && value !== thousandDivider;
        }

        return [".", ","].indexOf(value) !== -1;
      },
    },
    decimalPartLength: {
      type: Number,
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.decimalPartLength,
      validator: value => value >= 0,
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
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    iconPrepend: {
      type: String,
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.iconPrepend,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_input_currency_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    inputAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    inputWidth: {
      type: [String, Number],
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.inputWidth,
    },
    isClearButton: {
      type: Boolean,
      required: false,
      default: true,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.isLabelFloat,
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
    labelScreenReader: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    max: {
      type: Number,
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.max,
    },
    min: {
      type: Number,
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.min,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelType: {
      type: String,
      required: false,
      default: "number",
      validator: value => ["number", "string"].indexOf(value) !== -1,
    },
    modelUndefined: {
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.modelUndefined,
    },
    modelValue: {
      type: [String, Number],
      required: false,
    },
    placeholder: {
      type: [String, Number, Object],
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.placeholder,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    step: {
      type: Number,
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.step,
      validator: value => value > 0,
    },
    thousandDivider: {
      type: String,
      required: false,
      default: () => inputCurrencyPluginOptions.value.propsDefault.thousandDivider,
      validator: (value, props) => {
        const decimalDivider = props?.decimalDivider;

        if (decimalDivider) {
          return [".", ",", " "].indexOf(value) !== -1 && value !== decimalDivider;
        }

        return [".", ",", " "].indexOf(value) !== -1;
      },
    },
    validationOnChange: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: [
    "update:modelValue",
    "focus",
    "blur",
  ],
  setup(props, context) {
    const modelValue = toRef(props, "modelValue");

    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      getCleanIntValue,
    } = UtilsAPI();

    const {
      ariaDescribedbyLocal,
      changeModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      isClearButtonLocal,
    } = UiClearButtonAPI(props, {
      isModel,
    });

    const {
      placeholderAttributes,
    } = PlaceholderAPI(props);

    const {
      inputWidthStyleValue,
    } = WidthAPI(props);

    const {
      ensurePrecision,
    } = VerifyAPI(props);

    const {
      clearModel,
      displayValue,
      isInternalChange,
      localModel,
      modelNumber,
      modelUndefinedLocal,
      setCurrentValue,
    } = ModelAPI(props, {
      changeModel,
    });

    const {
      adjustFloatPartAndDivider,
      increase,
      decrease,
    } = IncreaseDecreaseAPI(props, {
      displayValue,
      ensurePrecision,
      getCleanIntValue,
      setCurrentValue,
      modelNumber,
    });

    const {
      handleInput,
      handleKeydown,
      handlePaste,
      initFirstCheck,
      inputRef,
      onBlurNumber,
      onClickNumber,
    } = InputEventsAPI(props, {
      adjustFloatPartAndDivider,
      decrease,
      displayValue,
      getCleanIntValue,
      increase,
      modelNumber,
      modelUndefinedLocal,
      onBlur,
      setCurrentValue,
    });

    initFirstCheck();
    watch(modelValue, newVal => {
      if (!isInternalChange.value) {
        localModel.value = newVal;
        handleInput(null, newVal, true);
      }
      isInternalChange.value = false;
    });

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      clearModel,
      componentStyleHide,
      decrease,
      displayValue,
      errorsId,
      handleInput,
      handleKeydown,
      handlePaste,
      helpTextId,
      htmlIdLocal,
      increase,
      inputRef,
      inputWidthStyleValue,
      isClearButtonLocal,
      isErrors,
      isModel,
      onClickNumber,
      onBlurNumber,
      onFocus,
      placeholderAttributes,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      type: undefined,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: "a_form_element__container",
      }, [
        h("div", {
          class: ["a_form_element__parent", {
            a_form_element__parent_float: this.isLabelFloat,
            a_form_element__parent_not_empty: this.isModel,
            a_form_element__parent_float_has_icon_prepend: this.iconPrepend,
            a_form_element__parent_invalid: this.isErrors,
          }],
        }, [
          ((this.label || this.labelScreenReader) && !this.isLabelFloat) ?
            h(ALabel, {
              id: this.htmlIdLocal,
              extra: this.extra,
              isLabelFloat: this.isLabelFloat,
              isError: this.isErrors,
              label: this.label,
              labelClass: this.labelClass,
              labelScreenReader: this.labelScreenReader,
              required: this.required,
              type: "text",
            }) :
            "",
          h("div", {
            class: [
              "a_form_element_number",
              {
                a_form_element_number_controls: this.controlsType && this.controlsType !== "none",
              },
            ],
          }, [
            this.currencySymbol && this.currencySymbolPosition === "left" && h("span", {
              class: "a_form_element_number__currency_symbol",
            }, this.currencySymbol),
            h("div", {
              class: "a_form_element",
              style: {
                ...this.inputWidthStyleValue,
              },
            }, [
              ((this.label || this.labelScreenReader) && this.isLabelFloat) ?
                h(ALabel, {
                  id: this.htmlIdLocal,
                  isLabelFloat: this.isLabelFloat,
                  isError: this.isErrors,
                  label: this.label,
                  labelClass: this.labelClass,
                  labelScreenReader: this.labelScreenReader,
                  required: this.required,
                  type: "text",
                }) :
                "",
              this.iconPrepend && h(AIcon, {
                icon: this.iconPrepend,
                class: "a_input__icon_prepend",
              }),
              h("input", {
                ref: "inputRef",
                id: this.htmlIdLocal,
                value: this.displayValue,
                type: "text",
                class: [
                  "a_form_control a_input a_input_number",
                  this.inputClass,
                  {
                    a_form_element_with_one_btn: this.isClearButtonLocal,
                    a_form_control_invalid: this.isErrors,
                  },
                ],
                disabled: this.disabled,
                ariaRequired: this.required,
                ariaInvalid: this.isErrors,
                "aria-describedby": this.ariaDescribedbyLocal,
                ...this.placeholderAttributes,
                ...this.inputAttributes,
                onInput: this.handleInput,
                onKeydown: this.handleKeydown,
                onFocus: this.onFocus,
                onBlur: this.onBlurNumber,
                onClick: this.onClickNumber,
                onPaste: this.handlePaste,
              }),
              this.isClearButtonLocal ?
                h("div", {
                  class: "a_form_control__actions"
                }, [
                  h(AFormElementBtnClear, {
                    alwaysTranslate: this.alwaysTranslate,
                    disabled: false,
                    class: this.clearButtonClass,
                    onClear: this.clearModel,
                  }),
                ]) :
                "",
            ]),
            this.controlsType === "plus-minus" && h("div", {
              class: "a_btn_group",
            }, [
              h(AButton, {
                class: "a_btn a_btn_outline_secondary",
                iconLeft: "Minus",
                tabindex: -1,
                attributes: {
                  role: "button",
                },
                disabled: this.disabled,
                onClick: this.decrease,
              }),
              h(AButton, {
                class: "a_btn a_btn_outline_secondary",
                iconLeft: "Plus",
                tabindex: -1,
                attributes: {
                  role: "button",
                },
                disabled: this.disabled,
                onClick: this.increase,
              }),
            ]),
            this.currencySymbol && this.currencySymbolPosition === "right" && h("div", {
              class: "a_form_element_number__currency_symbol",
            }, this.currencySymbol),
          ]),
          h(AFormHelpText, {
            id: this.helpTextId,
            html: this.helpText,
            extra: this.extra,
          }),
          this.isErrors && h(AErrorsText, {
            id: this.errorsId,
            errors: this.errors,
          }),
        ]),
      ]),
    ]);
  },
};
