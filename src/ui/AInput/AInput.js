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

import ClassAPI from "./compositionAPI/ClassAPI";
import ColorAPI from "./compositionAPI/ColorAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import PasswordAPI from "./compositionAPI/PasswordAPI";
import TypeAPI from "./compositionAPI/TypeAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiClearButtonAPI from "../compositionApi/UiClearButtonAPI";
import UiDisabledAPI from "../compositionApi/UiDisabledAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiInputAutofillAPI from "../compositionApi/UiInputAutofillAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AInput",
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
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_input_"),
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
      default: true,
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
    maxlength: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelUndefined: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    showPassword: {
      type: Boolean,
      required: false,
      default: true,
    },
    step: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
  },
  emits: [
    "update:modelValue",
    "focus",
    "blur",
  ],
  setup(props, context) {
    const type = toRef(props, "type");

    const {
      disabledAttribut,
    } = UiDisabledAPI(props);

    const {
      setTypeLocal,
      typeForInput,
    } = TypeAPI(props);


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
      inputRef,
      onInput,
    } = ModelAPI(props, {
      changeModel,
    });

    const {
      iconBtnShowPassword,
      isBtnShowPasswordVisible,
      titleBtnShowPassword,
      toggleTypePassword,
    } = PasswordAPI(props, {
      setTypeLocal,
      typeForInput,
    });

    const {
      isAutofill,
    } = UiInputAutofillAPI({ inputRef });

    const {
      inputClassBtns,
    } = ClassAPI({
      isBtnShowPasswordVisible,
      isClearButtonLocal,
    });

    const {
      modelValueLocal,
    } = ColorAPI(props);

    watch(type, () => {
      setTypeLocal();
    });

    setTypeLocal();

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      clearModel,
      componentStyleHide,
      disabledAttribut,
      errorsId,
      helpTextId,
      htmlIdLocal,
      iconBtnShowPassword,
      inputClassBtns,
      inputRef,
      isAutofill,
      isBtnShowPasswordVisible,
      isClearButtonLocal,
      isErrors,
      isModel,
      modelValueLocal,
      onBlur,
      onFocus,
      onInput,
      titleBtnShowPassword,
      toggleTypePassword,
      typeForInput,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }
    
    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_float: this.isLabelFloat,
          a_form_element__parent_not_empty: this.isModel || this.isAutofill,
          a_form_element__parent_float_has_icon_prepend: this.iconPrepend,
        }],
      }, [
        (this.label || this.labelScreenReader) ?
          h(ALabel, {
            id: this.htmlIdLocal,
            alwaysTranslate: this.alwaysTranslate,
            label: this.label,
            labelClass: this.labelClass,
            labelScreenReader: this.labelScreenReader,
            required: this.required,
            type: this.type,
            isLabelFloat: this.isLabelFloat,
            isError: this.isErrors,
          }) :
          "",
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
            value: this.modelValueLocal,
            type: this.typeForInput,
            class: [
              "a_form_control a_input",
              this.inputClass,
              this.inputClassBtns,
              {
                a_form_control_invalid: this.isErrors,
              },
            ],
            disabled: this.disabledAttribut,
            ariaRequired: this.required,
            ariaInvalid: this.isErrors,
            "aria-describedby": this.ariaDescribedbyLocal,
            maxlength: this.maxlength,
            step: this.step,
            ...this.inputAttributes,
            onInput: this.onInput,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          }),
          (this.isBtnShowPasswordVisible || this.isClearButtonLocal) ?
            h("div", {
              class: "a_form_control__actions"
            }, [
              this.isBtnShowPasswordVisible ?
                h(AButton, {
                  alwaysTranslate: this.alwaysTranslate,
                  class: "a_btn a_btn_transparent_dark a_btn_small a_form_control__actions__btn",
                  iconLeft: this.iconBtnShowPassword,
                  type: "button",
                  title: this.titleBtnShowPassword,
                  textScreenReader: this.titleBtnShowPassword,
                  disabled: this.disabled,
                  onClick: this.toggleTypePassword,
                }) :
                "",
              this.isClearButtonLocal ?
                h(AFormElementBtnClear, {
                  alwaysTranslate: this.alwaysTranslate,
                  disabled: this.disabled,
                  class: this.clearButtonClass,
                  onClear: this.clearModel,
                }) :
                "",
            ]) :
            "",
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
