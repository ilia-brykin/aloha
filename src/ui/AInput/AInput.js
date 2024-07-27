import {
  computed,
  h,
  ref,
  toRef,
} from "vue";

import AButton from "../../AButton/AButton";
import AErrorsText from "../AErrorsText/AErrorsText";
import AFormElementBtnClear from "../../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import AIcon from "../../AIcon/AIcon";
import ALabel from "../ALabel/ALabel";

import UiClearButtonMixinProps from "../mixins/UiClearButtonMixinProps";
import UiMixinProps from "../mixins/UiMixinProps";

import ToggleAPI from "./compositionAPI/ToggleAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiClearButtonAPI from "../compositionApi/UiClearButtonAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiInputAutofillAPI from "../compositionApi/UiInputAutofillAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import {
  cloneDeep,
} from "lodash-es";


export default {
  name: "AInput",
  mixins: [
    UiClearButtonMixinProps,
    UiMixinProps,
  ],
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    iconPrepend: {
      type: String,
      required: false,
      default: undefined,
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    maxlength: {
      type: [String, Number],
      required: false,
    },
    modelUndefined: {
      required: false,
      default: "",
    },
    step: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    togglePasswordVisibility: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: "text",
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

    const type = toRef(props, "type");
    const typeLocal = ref(undefined);
    typeLocal.value = cloneDeep(type.value);

    const typeForInput = computed(() => {
      if (typeLocal.value === "integer") {
        return "text";
      }
      return typeLocal.value;
    });
    
    const isTypePassword = computed(() => typeForInput.value === "password");
    
    const inputRef = ref(undefined);
    const disabled = toRef(props, "disabled");
    const onInput = $event => {
      if (disabled.value) {
        return;
      }
      let value = $event.target.value;
      if (type.value === "integer") {
        value = value.replace(/\D/g, "");
        if (value !== "") {
          value = +value;
        }
        inputRef.value.value = value;
      }
      if (type.value === "number") {
        if (value !== "") {
          value = +value;
        }
      }
      changeModel({
        model: value,
      });
    };

    const {
      btnToggleTypeTitle,
      toggleType,
    } = ToggleAPI({ isTypePassword, typeLocal });

    const {
      isAutofill,
    } = UiInputAutofillAPI({ inputRef });

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      btnToggleTypeTitle,
      clearModel,
      componentStyleHide,
      errorsId,
      helpTextId,
      htmlIdLocal,
      inputRef,
      isAutofill,
      isClearButtonLocal,
      isErrors,
      isModel,
      isTypePassword,
      onBlur,
      onFocus,
      onInput,
      toggleType,
      typeForInput,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }
    
    return h("div", {
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
        this.label && h(ALabel, {
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
          class: "a_form_element",
        }, [
          this.iconPrepend && h(AIcon, {
            icon: this.iconPrepend,
            class: "a_input__icon_prepend",
          }),
          h("input", {
            ref: "inputRef",
            id: this.htmlIdLocal,
            value: this.modelValue,
            type: this.typeForInput,
            class: [
              "a_form_control a_input",
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
            maxlength: this.maxlength,
            step: this.step,
            ...this.inputAttributes,
            onInput: this.onInput,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          }),
          this.isClearButtonLocal && h(AFormElementBtnClear, {
            alwaysTranslate: this.alwaysTranslate,
            disabled: this.disabled,
            clearButtonClass: this.clearButtonClass,
            onClear: this.clearModel,
          }),
        ]),
        this.type === "password" && this.togglePasswordVisibility && h(AButton, {
          alwaysTranslate: this.alwaysTranslate,
          class: "a_btn a_btn_outline_secondary",
          iconLeft: this.isTypePassword ? "EyeClose" : "EyeOpen",
          type: "button",
          title: this.btnToggleTypeTitle,
          textScreenReader: this.btnToggleTypeTitle,
          disabled: this.disabled,
          onClick: this.toggleType,
        }),
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
