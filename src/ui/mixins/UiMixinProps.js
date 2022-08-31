import {
  uniqueId,
} from "lodash-es";

export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_ui_"),
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
    inputClass: {
      required: false,
    },
    label: {
      type: String,
      required: false,
      default: undefined,
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
      type: [String, Number],
      required: false,
    },
    modelUndefined: {
      required: false,
      default: null,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: true,
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
    classColumn: {
      type: String,
      required: false,
      default: undefined,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    dependencies: {
      type: [Array, Object],
      required: false,
      default: undefined,
    },
    helpText: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
  ],
};
