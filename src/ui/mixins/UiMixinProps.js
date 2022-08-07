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
    },
    labelClass: {
      required: false,
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
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: true,
    },
    errors: {
      type: [String, Array, Object],
      required: false,
      default: undefined,
    },
  },
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
  ],
};
