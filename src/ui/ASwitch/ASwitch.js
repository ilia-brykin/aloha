import {
  computed,
  h,
  toRef,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import ALabel from "../ALabel/ALabel";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";
import UiDependenciesAPI from "../compositionApi/UiDependenciesAPI";

const KEY_CODE_SPACE = 32;

export default {
  name: "ASwitch",
  mixins: [
    UiMixinProps,
  ],
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    trueValue: {
      type: [Boolean, String, Number],
      required: false,
      default: true,
    },
    falseValue: {
      type: [Boolean, String, Number],
      required: false,
      default: false,
    },
    defaultValue: {
      type: [Boolean, String, Number],
      required: false,
      default: undefined,
    },
    trueLabel: {
      type: String,
      required: false,
      default: "Ja",
    },
    falseLabel: {
      type: String,
      required: false,
      default: "Nein",
    },
    defaultLabel: {
      type: String,
      required: false,
      default: "Nicht ausgewählt",
    },
    isThreeState: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, context) {
    const {
      componentStyleHideDependencies,
    } = UiDependenciesAPI(props);

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

    const modelValue = toRef(props, "modelValue");

    const trueLabel = toRef(props, "trueLabel");

    const falseLabel = toRef(props, "falseLabel");

    const defaultLabel = toRef(props, "defaultLabel");

    const trueValue = toRef(props, "trueValue");

    const falseValue = toRef(props, "falseValue");

    const defaultValue = toRef(props, "defaultValue");

    const isModelTrue = computed(() => {
      return modelValue.value === trueValue.value ||
        modelValue.value === "true";
    });

    const isModelFalse = computed(() => {
      return modelValue.value === falseValue.value ||
        modelValue.value === "false";
    });

    const isModelDefault = computed(() => {
      return !isModelTrue.value && !isModelFalse.value;
    });

    const labelValueLocal = computed(() => {
      if (isModelTrue.value) {
        return trueLabel.value;
      }
      if (isModelFalse.value) {
        return falseLabel.value;
      }
      return defaultLabel.value;
    });

    const isThreeState = toRef(props, "isThreeState");

    const isChecked = computed(() => {
      if (isModelTrue.value) {
        return true;
      }
      if (isModelFalse.value) {
        return false;
      }
      return undefined;
    });

    const disabled = toRef(props, "disabled");
    const onInput = $event => {
      if (disabled.value) {
        return;
      }
      let model;
      if (isModelTrue.value) {
        model = falseValue.value;
      } else if (isThreeState.value && isModelFalse.value) {
        model = defaultValue.value;
      } else {
        model = trueValue.value;
      }

      changeModel({
        model,
        $event,
      });
    };

    const onKeydown = $event => {
      if ($event.key === "Enter" ||
        $event.keyCode === KEY_CODE_SPACE) {
        onInput($event);
        $event.stopPropagation();
        $event.preventDefault();
      }
    };

    return {
      componentStyleHideDependencies,

      ariaDescribedbyLocal,
      clearModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      onFocus,
      onBlur,

      isChecked,
      isModelDefault,
      labelValueLocal,
      onInput,
      onKeydown,
    };
  },
  render() {
    return h("div", {
      style: this.componentStyleHideDependencies,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_not_empty: this.isModel,
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
          class: ["switch_button", {
            switch_button_undefined: this.isModelDefault,
            switch_button_invalid: this.isErrors,
          }],
        }, [
          h("input", {
            id: this.htmlIdLocal,
            ref: "input",
            checked: this.isChecked,
            type: "checkbox",
            class: [
              "switch_button__input",
              this.inputClass,
            ],
            disabled: this.disabled,
            ariaRequired: this.required,
            ariaInvalid: this.isErrors,
            "aria-describedby": this.ariaDescribedbyLocal,
            ...this.inputAttributes,
            onClick: this.onInput,
            onKeydown: this.onKeydown,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          }),
          h("label", {
            class: "switch_button__label",
            for: this.htmlIdLocal,
            innerHTML: this.labelValueLocal
          }),
        ]),
        this.helpText && h("div", {
          id: this.helpTextId,
          class: "a_form_element__help_text",
          innerHTML: this.helpText,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
