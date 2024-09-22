import {
  h,
  ref,
  toRef,
  watch,
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
import MinAPI from "./compositionAPI/MinAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import NumberAttributesAPI from "./compositionAPI/NumberAttributesAPI";
import PlaceholderAPI from "../../ATranslation/compositionAPI/PlaceholderAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiClearButtonAPI from "../compositionApi/UiClearButtonAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiInputAutofillAPI from "../compositionApi/UiInputAutofillAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";
import VerifyAPI from "./compositionAPI/VerifyAPI";
import WidthAPI from "./compositionAPI/WidthAPI";

import {
  inputNumberPluginOptions,
} from "../../plugins/AInputNumberPlugin";
import {
  isNumber,
} from "lodash-es";

export default {
  name: "AInputNumber",
  inheritAttrs: false,
  mixins: [
    UiClearButtonMixinProps,
    UiMixinProps,
  ],
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    controlsType: {
      type: String,
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.controlsType,
      validator: value => ["plus-minus", "arrows", "none"].indexOf(value) !== -1,
      // TODO: "arrows",
    },
    eAllowed: {
      type: Boolean,
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.eAllowed,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    iconPrepend: {
      type: String,
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.iconPrepend,
    },
    inputWidth: {
      type: [String, Number],
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.inputWidth,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.isLabelFloat,
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    max: {
      type: Number,
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.max,
    },
    min: {
      type: Number,
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.min,
    },
    modelUndefined: {
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.modelUndefined,
    },
    placeholder: {
      type: [String, Number],
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.placeholder,
    },
    precision: {
      type: Number,
      validator: value => value >= 0 && value === Number.parseInt(`${ value }`, 10),
      default: () => inputNumberPluginOptions.value.propsDefault.placeholder,
    },
    readonly: {
      type: Boolean,
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.readonly,
    },
    step: {
      type: Number,
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.step,
    },
    stepStrictly: {
      type: Boolean,
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.stepStrictly,
    },
    type: {
      type: String,
      required: false,
      default: () => inputNumberPluginOptions.value.propsDefault.type,
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
      { immediate: true }
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

    return h("div", {
      ...this.$attrs,
      class: "a_form_element__container",
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
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
                class: "a_form_control__actions"
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
            h(AButton, {
              alwaysTranslate: this.alwaysTranslate,
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
              alwaysTranslate: this.alwaysTranslate,
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
    ]);
  },
};
