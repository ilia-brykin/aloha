import {
  h,
  toRef,
} from "vue";

import AUiComponents from "../AUiComponents";
import AUiContainerComponents from "../AUiContainerComponents";
import {
  AFormPluginOptions,
} from "../../plugins/AFormPlugin";

export default {
  name: "AFormElement",
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
    disabled: {
      type: Boolean,
      required: false,
      default: undefined,
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
    id: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    isHide: {
      type: Boolean,
      required: false,
      default: undefined,
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
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelValue: {
      required: false,
      default: undefined,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: "",
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
  },
  emits: [
    "update:modelValue",
  ],
  setup(props, { emit, slots }) {
    const options = toRef(props, "options");
    const type = toRef(props, "type");

    const componentTypesMapping = () => ({
      ...AUiComponents,
      ...AUiContainerComponents,
      ...AFormPluginOptions.components,
      ...AFormPluginOptions.containerComponents,
    });

    return () => {
      const COMPONENT = componentTypesMapping()[type.value];
      return h(COMPONENT, {
        ...props,
        ...options.value,
        "onUpdate:modelValue": model => emit("update:modelValue", model),
      }, slots);
    };
  },
};
