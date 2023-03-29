import {
  h,
  ref,
  toRef, watch,
  withDirectives,
} from "vue";

import AButton from "../../AButton/AButton";
import AErrorsText from "../AErrorsText/AErrorsText";
import AFormElementBtnClear from "../../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import AIcon from "../../AIcon/AIcon";
import ALabel from "../ALabel/ALabel";

import ASafeHtml from "../../directives/ASafeHtml";

import UiClearButtonMixinProps from "../mixins/UiClearButtonMixinProps";
import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiInputAutofillAPI from "../compositionApi/UiInputAutofillAPI";
import UiClearButtonAPI from "../compositionApi/UiClearButtonAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import IncreaseDecreaseAPI from "./compositionAPI/IncreaseDecreaseAPI";
import VerifyAPI from "./compositionAPI/VerifyAPI";
import InputEventsAPI from "./compositionAPI/InputEventsAPI";
import { isNumber } from "lodash-es";

export default {
  name: "AInputNumber",
  mixins: [
    UiClearButtonMixinProps,
    UiMixinProps,
  ],
  props: {
    max: {
      type: Number,
      required: false,
      default: undefined,
    },
    min: {
      type: Number,
      required: false,
      default: undefined,
    },
    type: {
      type: String,
      required: false,
      default: "number",
      validator: value => ["number", "float", "integer", "float-positiv", "integer-positiv"].indexOf(value) !== -1,
    },
    iconPrepend: {
      type: String,
      required: false,
      default: undefined,
    },
    modelUndefined: {
      required: false,
      default: undefined,
    },
    step: {
      type: Number,
      required: false,
      default: 1,
    },
    precision: {
      type: Number,
      validator: value => value >= 0 && value === Number.parseInt(`${ value }`, 10),
    },
    controlsType: {
      type: String,
      required: false,
      default: "plus-minus",
      validator: value => ["plus-minus", "arrows"].indexOf(value) !== -1,
      // TODO: "arrows",
    },
    stepStrictly: {
      type: Boolean,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    eAllowed: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, context) {
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
      currentValue,
      handleInput,
      handleInputChange,
      handleKeydown,
      ariaDescribedbyLocal,
      clearModel,
      componentStyleHide,
      displayValue,
      errorsId,
      helpTextId,
      htmlIdLocal,
      inputRef,
      isAutofill,
      isClearButtonLocal,
      isErrors,
      isModel,
      onBlurNumber,
      onFocus,
      onInput,
      increase,
      decrease,
      userInput,
    };
  },
  render() {
    return this.isRender && h("div", {
      style: this.componentStyleHide,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_float: this.isLabelFloat,
          a_form_element__parent_not_empty: this.isModel || this.isAutofill,
          a_form_element__parent_float_has_icon_prepend: this.iconPrepend,
          a_form_element__parent_invalid: this.isErrors,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          label: this.label,
          labelClass: this.labelClass,
          required: this.required,
          type: this.type,
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
          h("div", {
            class: "a_form_element",
          }, [
            this.iconPrepend && h(AIcon, {
              icon: this.iconPrepend,
              class: "a_input__icon_prepend",
            }),
            h("input", {
              ref: "inputRef",
              id: this.htmlIdLocal,
              value: this.displayValue,
              type: "number",
              class: [
                "a_form_control a_input a_input_number",
                this.inputClass,
                {
                  a_form_element_with_btn_close: this.isClearButtonLocal,
                  a_form_control_invalid: this.isErrors,
                },
              ],
              min: this.min,
              max: this.max,
              step: this.step,
              disabled: this.disabled,
              ariaRequired: this.required,
              ariaInvalid: this.isErrors,
              "aria-describedby": this.ariaDescribedbyLocal,
              ...this.inputAttributes,
              onInput: this.handleInput,
              onChange: this.handleInputChange,
              onKeydown: this.handleKeydown,
              onFocus: this.onFocus,
              onBlur: this.onBlurNumber,
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
              onClick: this.decrease,
            }),
            h(AButton, {
              class: "a_btn a_btn_outline_secondary",
              iconLeft: "Plus",
              tabindex: -1,
              attributes: {
                role: "button",
              },
              onClick: this.increase,
            }),
          ]),
        ]),

        this.helpText && withDirectives(h("div", {
          id: this.helpTextId,
          class: "a_form_element__help_text",
        }), [
          [ASafeHtml, this.helpText],
        ]),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
