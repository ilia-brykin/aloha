import frameworks from "../const/frameworks";

export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    inputAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputClass: {
      required: false,
    },
    isError: {
      type: Boolean,
      default: false,
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
    framework: {
      type: String,
      required: false,
      validator: framework => frameworks.indexOf(framework) !== -1,
    },
  },
  emits: [
    "update:modelValue",
    "change",
  ],
};
