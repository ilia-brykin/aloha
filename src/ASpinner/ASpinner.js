import {
  h,
} from "vue";

import AriaLabelAPI from "../ATranslation/compositionAPI/AriaLabelAPI";
import ClassAPI from "./compositionAPI/ClassAPI";

import {
  spinnerPluginOptions,
} from "../plugins/ASpinnerPlugin";

export default {
  name: "ASpinner",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    ariaLabel: {
      type: [String, Number, Object],
      required: false,
      default: () => spinnerPluginOptions.value.propsDefault.ariaLabel,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    safeHtml: {
      type: String,
      required: false,
      default: () => spinnerPluginOptions.value.propsDefault.safeHtml,
    },
    size: {
      type: [String, Number],
      required: false,
      default: () => spinnerPluginOptions.value.propsDefault.size,
      validator: size => ["1", "2", "3", "4", "5", "6", "7"].indexOf(`${ size }`) !== -1,
    },
    tag: {
      type: String,
      required: false,
      default: () => spinnerPluginOptions.value.propsDefault.tag,
    },
  },
  setup(props) {
    const {
      ariaLabelAttributes,
    } = AriaLabelAPI(props);

    const {
      classSize,
    } = ClassAPI(props);

    return {
      ariaLabelAttributes,
      classSize,
    };
  },
  render() {
    return h(this.tag, {
      class: [
        spinnerPluginOptions.value.propsDefault.class,
        this.classSize,
      ],
      role: "status",
      innerHTML: this.safeHtml,
      ...this.ariaLabelAttributes,
    });
  },
};
