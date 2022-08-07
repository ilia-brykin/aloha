import {
  computed,
  h,
  toRef,
} from "vue";

import ALabel from "../ALabel/ALabel";

import UiMixinProps from "../mixins/UiMixinProps";

import UiAPI from "../compositionApi/UiAPI";

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
      ariaRequired,
      changeModel,
      clearModel,
      disabledLocal,
      isError,
      isModel,
      labelLocal,
      onBlur,
      onFocus,
      requiredLocal,
    } = UiAPI(props, context);

    const modelValue = toRef(props, "modelValue");
    const options = toRef(props, "options");

    const trueLabel = toRef(props, "trueLabel");
    const trueLabelLocal = computed(() => {
      return "trueLabel" in options.value ?
        options.value.trueLabel :
        trueLabel.value;
    });

    const falseLabel = toRef(props, "falseLabel");
    const falseLabelLocal = computed(() => {
      return "falseLabel" in options.value ?
        options.value.falseLabel :
        falseLabel.value;
    });

    const defaultLabel = toRef(props, "defaultLabel");
    const defaultLabelLocal = computed(() => {
      return "defaultLabel" in options.value ?
        options.value.defaultLabel :
        defaultLabel.value;
    });


    const trueValue = toRef(props, "trueValue");
    const trueValueLocal = computed(() => {
      return "trueValue" in options.value ?
        options.value.trueValue :
        trueValue.value;
    });

    const falseValue = toRef(props, "falseValue");
    const falseValueLocal = computed(() => {
      return "falseValue" in options.value ?
        options.value.falseValue :
        falseValue.value;
    });

    const defaultValue = toRef(props, "defaultValue");
    const defaultValueLocal = computed(() => {
      return "defaultValue" in options.value ?
        options.value.defaultValue :
        defaultValue.value;
    });

    const isModelTrue = computed(() => {
      return modelValue.value === trueValueLocal.value ||
        modelValue.value === "true";
    });

    const isModelFalse = computed(() => {
      return modelValue.value === falseValueLocal.value ||
        modelValue.value === "false";
    });

    const isModelDefault = computed(() => {
      return !isModelTrue.value && !isModelFalse.value;
    });

    const labelValueLocal = computed(() => {
      if (isModelTrue.value) {
        return trueLabelLocal.value;
      }
      if (isModelFalse.value) {
        return falseLabelLocal.value;
      }
      return defaultLabelLocal.value;
    });

    const isThreeState = toRef(props, "isThreeState");
    const isThreeStateLocal = computed(() => {
      return "isThreeState" in options.value ?
        options.value.isThreeState :
        isThreeState.value;
    });

    const isChecked = computed(() => {
      if (isModelTrue.value) {
        return true;
      }
      if (isModelFalse.value) {
        return false;
      }
      return undefined;
    });

    const onInput = $event => {
      if (disabledLocal.value) {
        return;
      }
      let model;
      if (isModelTrue.value) {
        model = falseValueLocal.value;
      } else if (isThreeStateLocal.value && isModelFalse.value) {
        model = defaultValueLocal.value;
      } else {
        model = trueValueLocal.value;
      }

      changeModel({
        model,
        $event,
      });
    };

    return {
      ariaRequired,
      clearModel,
      disabledLocal,
      isError,
      isModel,
      labelLocal,
      requiredLocal,
      onFocus,
      onBlur,

      isChecked,
      isModelDefault,
      labelValueLocal,
      onInput,
    };
  },
  render() {
    return h("div", {
      class: ["a_form_element__parent", {
        a_form_element__parent_not_empty: this.isModel,
      }],
    }, [
      this.labelLocal && h(ALabel, {
        id: this.id,
        label: this.label,
        labelClass: this.labelClass,
        required: this.requiredLocal,
        type: this.typeLocal,
        isLabelFloat: this.isLabelFloatLocal,
      }),
      h("div", {
        class: ["switch_button", {
          switch_button_undefined: this.isModelDefault,
        }],
      }, [
        h("input", {
          id: this.id,
          ref: "input",
          checked: this.isChecked,
          type: "checkbox",
          class: [
            "switch_button__input",
            this.inputClass,
          ],
          disabled: this.disabledLocal,
          ariaRequired: this.ariaRequired,
          ariaInvalid: this.isError,
          ...this.inputAttributes,
          onClick: this.onInput,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
        }),
        h("label", {
          class: "switch_button__label",
          for: this.id,
          innerHTML: this.labelValueLocal
        }),
      ]),
    ]);
  },
};
