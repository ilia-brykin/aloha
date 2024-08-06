import {
  h,
  ref,
} from "vue";

import AButton from "../../AButton/AButton";
import AErrorsText from "../AErrorsText/AErrorsText";
import AFormElementBtnClear from "../../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import AIcon from "../../AIcon/AIcon";
import ALabel from "../ALabel/ALabel";

import UiClearButtonMixinProps from "../mixins/UiClearButtonMixinProps";
import UiMixinProps from "../mixins/UiMixinProps";

import IncreaseDecreaseAPI from "./compositionAPI/IncreaseDecreaseAPI";
import InputEventsAPI from "./compositionAPI/InputEventsAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import NumberAttributesAPI from "./compositionAPI/NumberAttributesAPI";
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

export default {
  name: "AInputCurrency",
  mixins: [
    UiClearButtonMixinProps,
    UiMixinProps,
  ],
  props: {
    controlsType: {
      type: String,
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.controlsType,
      validator: value => ["plus-minus", "arrows", "none"].indexOf(value) !== -1,
      // TODO: "arrows",
    },
    currencySymbol: {
      type: String,
      required: false,
      default: "€",
    },
    currencySymbolPosition: {
      type: String,
      required: false,
      default: "right",
      validator: value => ["right", "left"].indexOf(value) !== -1,
    },
    decimalDivider: {
      type: String,
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.decimalDivider,
      validator: value => [".", ","].indexOf(value) !== -1,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    iconPrepend: {
      type: String,
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.iconPrepend,
    },
    inputWidth: {
      type: [String, Number],
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.inputWidth,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.isLabelFloat,
    },
    max: {
      type: Number,
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.max,
    },
    min: {
      type: Number,
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.min,
    },
    modelType: {
      type: String,
      required: false,
      default: "number",
      validator: value => ["number", "string"].indexOf(value) !== -1,
    },
    modelUndefined: {
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.modelUndefined,
    },
    placeholder: {
      type: [String, Number],
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.placeholder,
    },
    readonly: {
      type: Boolean,
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.readonly,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    symbolsAfterDecimalDivider: {
      type: Number,
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.symbolsAfterDecimalDivider,
    },
    step: {
      type: Number,
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.step,
    },
    thousandDivider: {
      type: String,
      required: false,
      default: inputCurrencyPluginOptions.value.propsDefault.thousandDivider,
      validator: value => [".", ",", ""].indexOf(value) !== -1,
    },
    type: {
      type: String,
      required: false,
    },
    validationOnChange: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, context) {
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
      numberAttributes,
    } = NumberAttributesAPI(props);

    const {
      placeholderAttributes,
    } = PlaceholderAPI(props);

    const {
      inputWidthStyleValue,
    } = WidthAPI(props);

    const inputRef = ref(undefined);

    const {
      ensurePrecision,
    } = VerifyAPI(props);

    const {
      clearModel,
      displayValue,
      modelNumber,
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
      onClickNumber,
      onBlurNumber,
    } = InputEventsAPI(props, {
      adjustFloatPartAndDivider,
      decrease,
      displayValue,
      getCleanIntValue,
      increase,
      inputRef,
      modelNumber,
      onBlur,
      setCurrentValue,
    });

    initFirstCheck();

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
      numberAttributes,
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
      class: "a_form_element__container",
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_float: this.isLabelFloat,
          a_form_element__parent_not_empty: this.isModel,
          a_form_element__parent_float_has_icon_prepend: this.iconPrepend,
          a_form_element__parent_invalid: this.isErrors,
        }],
      }, [
        this.label && !this.isLabelFloat && h(ALabel, {
          id: this.htmlIdLocal,
          label: this.label,
          labelClass: this.labelClass,
          required: this.required,
          type: "text",
          isLabelFloat: this.isLabelFloat,
        }),
        h("div", {
          class: [
            "a_form_element_number",
            {
              a_form_element_number_controls: this.controlsType,
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
            this.label && this.isLabelFloat && h(ALabel, {
              id: this.htmlIdLocal,
              label: this.label,
              labelClass: this.labelClass,
              required: this.required,
              type: "text",
              isLabelFloat: this.isLabelFloat,
            }),
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
                  a_form_element_with_btn_close: this.isClearButtonLocal,
                  a_form_control_invalid: this.isErrors,
                },
              ],
              disabled: this.disabled,
              ariaRequired: this.required,
              ariaInvalid: this.isErrors,
              "aria-describedby": this.ariaDescribedbyLocal,
              ...this.numberAttributes,
              ...this.placeholderAttributes,
              ...this.inputAttributes,
              onInput: this.handleInput,
              onKeydown: this.handleKeydown,
              onFocus: this.onFocus,
              onBlur: this.onBlurNumber,
              onClick: this.onClickNumber,
              onPaste: this.handlePaste,
            }),
            this.isClearButtonLocal && h(AFormElementBtnClear, {
              disabled: this.disabled,
              clearButtonClass: this.clearButtonClass,
              onClear: this.clearModel,
            }),
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
    ]);
  },
};
