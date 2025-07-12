import {
  h,
  ref,
  toRef,
  watch,
} from "vue";
import {
  AElement,
  AErrorsText,
  AFormElementBtnClear,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  AIcon,
  AInputNumberPluginOptions,
  ALabel,
  UiAPI,
  UiClearButtonAPI,
  UIExcludeRenderAttributesAPI,
  UiInputAutofillAPI,
  UiStyleHideAPI,
} from "../../index";

import IncreaseDecreaseAPI from "./compositionAPI/IncreaseDecreaseAPI";
import InputEventsAPI from "./compositionAPI/InputEventsAPI";
import MinAPI from "./compositionAPI/MinAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import NumberAttributesAPI from "./compositionAPI/NumberAttributesAPI";
import PlaceholderAPI from "../../ATranslation/compositionAPI/PlaceholderAPI";
import VerifyAPI from "./compositionAPI/VerifyAPI";
import WidthAPI from "./compositionAPI/WidthAPI";

import Dash from "aloha-svg/dist/js/bootstrap/Dash";
import Plus from "aloha-svg/dist/js/bootstrap/Plus";
import UiMixinProps from "../mixins/UiMixinProps";
import {
  isNumber,
} from "lodash-es";

export default {
  name: "AInputNumber",
  inheritAttrs: false,
  mixins: [
    UiMixinProps,
  ],
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    autocomplete: {
      type: String,
      required: false,
      default: undefined,
    },
    clearButtonClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    controlsType: {
      type: String,
      required: false,
      default: () => AInputNumberPluginOptions.propsDefault.controlsType,
      validator: value => ["plus-minus", "arrows", "none"].indexOf(value) !== -1,
      // TODO: "arrows",
    },
    eAllowed: {
      type: Boolean,
      required: false,
      default: () => AInputNumberPluginOptions.propsDefault.eAllowed,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    iconPrepend: {
      type: String,
      required: false,
      default: () => AInputNumberPluginOptions.propsDefault.iconPrepend,
    },
    inputWidth: {
      type: [String, Number],
      required: false,
      default: () => AInputNumberPluginOptions.propsDefault.inputWidth,
    },
    isClearButton: {
      type: Boolean,
      required: false,
      default: true,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: () => AInputNumberPluginOptions.propsDefault.isLabelFloat,
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    max: {
      type: Number,
      required: false,
      default: () => AInputNumberPluginOptions.propsDefault.max,
    },
    min: {
      type: Number,
      required: false,
      default: () => AInputNumberPluginOptions.propsDefault.min,
    },
    modelUndefined: {
      required: false,
      default: () => AInputNumberPluginOptions.propsDefault.modelUndefined,
    },
    placeholder: {
      type: [String, Number, Object],
      required: false,
      default: () => AInputNumberPluginOptions.propsDefault.placeholder,
    },
    precision: {
      type: Number,
      validator: value => value >= 0 && value === Number.parseInt(`${ value }`, 10),
      default: () => AInputNumberPluginOptions.propsDefault.precision,
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
    step: {
      type: Number,
      required: false,
      default: () => AInputNumberPluginOptions.propsDefault.step,
    },
    stepStrictly: {
      type: Boolean,
      required: false,
      default: () => AInputNumberPluginOptions.propsDefault.stepStrictly,
    },
    type: {
      type: String,
      required: false,
      default: () => AInputNumberPluginOptions.propsDefault.type,
      validator: value => ["number", "integerNonNegative", "integerPositive", "integer"].indexOf(value) !== -1,
      // TODO: "float", "floatPositiv", "floatNonNegative"
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
      ariaDescribedbyLocal,
      changeModel,
      clearModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      labelDescriptionId,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      isClearButtonLocal,
    } = UiClearButtonAPI(props, {
      isModel,
    });

    const {
      minLocal,
    } = MinAPI(props);

    const {
      inputType,
      isTypeNumber,
      numberAttributes,
    } = NumberAttributesAPI(props);

    const {
      placeholderAttributes,
    } = PlaceholderAPI(props);

    const {
      inputWidthStyleValue,
    } = WidthAPI(props);

    const inputRef = ref(undefined);
    const disabled = toRef(props, "disabled");
    const onInput = $event => {
      if (disabled.value) {
        return;
      }
      const value = $event.target.value;
      changeModel({
        model: +value,
      });
    };

    const {
      isAutofill,
    } = UiInputAutofillAPI({ inputRef });

    const {
      ensurePrecision,
      verifyValue,
    } = VerifyAPI(props, {
      changeModel,
      minLocal,
    });

    const {
      currentValue,
      displayValue,
      initCurrentValue,
      setCurrentValue,
      userInput,
    } = ModelAPI(props, {
      verifyValue,
      changeModel,
    });

    const {
      increase,
      decrease,
    } = IncreaseDecreaseAPI(props, {
      currentValue,
      displayValue,
      ensurePrecision,
      setCurrentValue,
      minLocal,
    });

    const {
      handleInput,
      handleInputChange,
      handleKeydown,
      onBlurNumber,
    } = InputEventsAPI(props, {
      currentValue,
      decrease,
      displayValue,
      increase,
      inputRef,
      onBlur,
      setCurrentValue,
      userInput,
      isTypeNumber,
    });

    initCurrentValue();

    watch(
      () => props.modelValue,
      value => {
        const userInputLocal = verifyValue(userInput.value);
        const newValue = verifyValue(value, true);
        if (!isNumber(userInputLocal) && (!userInputLocal || userInputLocal !== newValue)) {
          currentValue.value = newValue;
          userInput.value = null;
        }
      },
      { immediate: true },
    );

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      clearModel,
      componentStyleHide,
      currentValue,
      decrease,
      displayValue,
      errorsId,
      handleInput,
      handleInputChange,
      handleKeydown,
      helpTextId,
      htmlIdLocal,
      increase,
      inputRef,
      inputType,
      inputWidthStyleValue,
      isAutofill,
      isClearButtonLocal,
      isErrors,
      isModel,
      labelDescriptionId,
      numberAttributes,
      onBlurNumber,
      onFocus,
      onInput,
      placeholderAttributes,
      userInput,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    if (this.readonly) {
      return h(AFormReadonly, {
        ...this.$attrs,
        id: this.htmlIdLocal,
        alwaysTranslate: this.alwaysTranslate,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        modelValue: this.displayValue,
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        style: this.componentStyleHide,
        type: this.type,
      });
    }

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: "a_form_element__container",
      }, [
        h("div", {
          class: ["a_form_element__parent", {
            a_form_element__parent_float: this.isLabelFloat,
            a_form_element__parent_not_empty: this.isModel || this.isAutofill,
            a_form_element__parent_float_has_icon_prepend: this.iconPrepend,
            a_form_element__parent_invalid: this.isErrors,
          }],
        }, [
          this.label && !this.isLabelFloat && h(ALabel, {
            id: this.htmlIdLocal,
            alwaysTranslate: this.alwaysTranslate,
            label: this.label,
            labelClass: this.labelClass,
            labelScreenReader: this.labelScreenReader,
            required: this.required,
            type: this.type,
            isLabelFloat: this.isLabelFloat,
            isError: this.isErrors,
          }),
          h(AFormLabelDescription, {
            id: this.labelDescriptionId,
            alwaysTranslate: this.alwaysTranslate,
            html: this.labelDescription,
            extra: this.extra,
            isLabelFloat: this.isLabelFloat,
          }),
          h("div", {
            class: [
              "a_form_element_number",
              {
                a_form_element_number_controls: this.controlsType !== "none",
              },
            ],
          }, [
            h("div", {
              class: "a_form_element",
              style: {
                ...this.inputWidthStyleValue,
              },
            }, [
              this.label && this.isLabelFloat && h(ALabel, {
                id: this.htmlIdLocal,
                alwaysTranslate: this.alwaysTranslate,
                label: this.label,
                labelClass: this.labelClass,
                labelScreenReader: this.labelScreenReader,
                required: this.required,
                type: this.type,
                isLabelFloat: this.isLabelFloat,
                isError: this.isErrors,
              }),
              this.iconPrepend && h(AIcon, {
                icon: this.iconPrepend,
                class: "a_input__icon_prepend",
              }),
              h("input", {
                ref: "inputRef",
                id: this.htmlIdLocal,
                autocomplete: this.autocomplete,
                value: this.displayValue,
                type: this.inputType,
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
                ...this.numberAttributes,
                ...this.placeholderAttributes,
                ...this.inputAttributes,
                onInput: this.handleInput,
                onChange: this.handleInputChange,
                onKeydown: this.handleKeydown,
                onFocus: this.onFocus,
                onBlur: this.onBlurNumber,
              }),
              this.isClearButtonLocal ?
                h("div", {
                  class: "a_form_control__actions",
                }, [
                  h(AFormElementBtnClear, {
                    alwaysTranslate: this.alwaysTranslate,
                    disabled: this.disabled,
                    class: this.clearButtonClass,
                    onClear: this.clearModel,
                  }),
                ]) :
                "",
            ]),
            this.controlsType === "plus-minus" && h("div", {
              class: "a_btn_group",
            }, [
              h(AElement, {
                alwaysTranslate: this.alwaysTranslate,
                class: "a_btn a_btn_outline_secondary",
                iconLeft: Dash,
                tabindex: -1,
                disabled: this.disabled,
                title: "_A_INPUT_NUMBER_BTN_DECREASE_",
                textScreenReader: "_A_INPUT_NUMBER_BTN_DECREASE_",
                type: "button",
                onClick: this.decrease,
              }),
              h(AElement, {
                alwaysTranslate: this.alwaysTranslate,
                class: "a_btn a_btn_outline_secondary",
                iconLeft: Plus,
                tabindex: -1,
                disabled: this.disabled,
                title: "_A_INPUT_NUMBER_BTN_INCREASE_",
                textScreenReader: "_A_INPUT_NUMBER_BTN_INCREASE_",
                type: "button",
                onClick: this.increase,
              }),
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
          }),
        ]),
      ]),
    ]);
  },
};
