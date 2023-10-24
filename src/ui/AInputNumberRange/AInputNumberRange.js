import {
  h,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import AInputNumber from "../AInputNumber/AInputNumber";
import ALabel from "../ALabel/ALabel";

import IdAPI from "./compositionAPI/IdAPI";
import InputAttributesAPI from "./compositionAPI/InputAttributesAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import TypeAPI from "./compositionAPI/TypeAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import Types from "./utils/Types";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AInputNumberRange",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_input_number_range_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    inputAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputAttributesMax: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputAttributesMin: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelMin: {
      type: String,
      required: false,
      default: "_A_INPUT_NUMBER_RANGE_LABEL_MIN_",
    },
    labelMax: {
      type: String,
      required: false,
      default: "_A_INPUT_NUMBER_RANGE_LABEL_MAX_",
    },
    labelClass: {
      required: false,
      default: undefined,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelValue: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    errors: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    errorsAll: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    helpText: {
      type: String,
      required: false,
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
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    controlsType: {
      type: String,
      required: false,
      default: "plus-minus",
      validator: value => ["plus-minus", "arrows"].indexOf(value) !== -1,
      // TODO: "arrows",
    },
    iconPrepend: {
      type: String,
      required: false,
      default: undefined,
    },
    inputWidth: {
      type: [Number, String],
      required: false,
      default: 200,
    },
    keyMax: {
      tpe: String,
      required: false,
      default: "max",
    },
    keyMin: {
      tpe: String,
      required: false,
      default: "min",
    },
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
    modelUndefined: {
      required: false,
      default: undefined,
    },
    precision: {
      type: Number,
      validator: value => value >= 0 && value === Number.parseInt(`${ value }`, 10),
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    step: {
      type: Number,
      required: false,
      default: 1,
    },
    stepStrictly: {
      type: Boolean,
      required: false,
    },
    placeholderMin: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    placeholderMax: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    type: {
      type: String,
      required: false,
      default: "numberRange",
      validator: value => Types.indexOf(value) !== -1,
      // TODO: "float", "floatPositiv", "floatNonNegative"
    },
  },
  emits: [
    "update:modelValue",
  ],
  setup(props, context) {
    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      changeModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
    } = UiAPI(props, context);

    const {
      changeModelMax,
      changeModelMin,
      modelValueMax,
      modelValueMin,
    } = ModelAPI(props, {
      changeModel,
    });

    const {
      idMax,
      idMin,
    } = IdAPI({
      htmlIdLocal,
    });

    const {
      typeLocal,
    } = TypeAPI(props);

    const {
      inputAttributesMaxLocal,
      inputAttributesMinLocal,
    } = InputAttributesAPI(props);

    return {
      changeModelMax,
      changeModelMin,
      componentStyleHide,
      errorsId,
      helpTextId,
      idMax,
      idMin,
      inputAttributesMaxLocal,
      inputAttributesMinLocal,
      isErrors,
      modelValueMax,
      modelValueMin,
      typeLocal,
    };
  },
  render() {
    return this.isRender && h("div", {
      class: "a_input_number_range",
      style: this.componentStyleHide,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_invalid: this.isErrors,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.idMin,
          label: this.label,
          labelClass: this.labelClass,
          required: this.required,
          type: this.type,
          isLabelFloat: false,
        }),
        h("div", {
          class: "a_input_number_range__content",
        }, [
          h(ALabel, {
            id: this.idMin,
            labelClass: "a_input_number_range__label a_input_number_range__label_min",
            isLabelFloat: false,
            label: this.labelMin,
          }),
          h(AInputNumber, {
            id: this.idMin,
            controlsType: this.controlsType,
            iconPrepend: this.iconPrepend,
            inputWidth: this.inputWidth,
            isLabelFloat: true,
            max: this.max,
            min: this.min,
            modelUndefined: this.modelUndefined,
            precision: this.precision,
            readonly: this.readonly,
            step: this.step,
            stepStrictly: this.stepStrictly,
            type: this.typeLocal,
            disabled: this.disabled,
            inputAttributes: this.inputAttributesMinLocal,
            required: this.required,
            modelValue: this.modelValueMin,
            placeholder: this.placeholderMin,
            change: this.changeModelMin,
          }),
          h(ALabel, {
            id: this.idMax,
            labelClass: "a_input_number_range__label a_input_number_range__label_max",
            isLabelFloat: false,
            label: this.labelMax,
          }),
          h(AInputNumber, {
            id: this.idMax,
            controlsType: this.controlsType,
            iconPrepend: this.iconPrepend,
            inputWidth: this.inputWidth,
            isLabelFloat: true,
            max: this.max,
            min: this.min,
            modelUndefined: this.modelUndefined,
            precision: this.precision,
            readonly: this.readonly,
            step: this.step,
            stepStrictly: this.stepStrictly,
            type: this.typeLocal,
            disabled: this.disabled,
            inputAttributes: this.inputAttributesMaxLocal,
            required: this.required,
            modelValue: this.modelValueMax,
            placeholder: this.placeholderMax,
            change: this.changeModelMax,
          }),
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
