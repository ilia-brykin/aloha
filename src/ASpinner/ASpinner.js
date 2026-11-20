import {
  h,
} from "vue";

import AriaLabelAPI from "../ATranslation/compositionAPI/AriaLabelAPI";
import ClassAPI from "./compositionAPI/ClassAPI";

import {
  getPropDefault,
} from "../plugins/AComponentsPlugin";

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
      default: () => getPropDefault("ASpinner", "ariaLabel", "_A_SPINNER_LOADING_"),
    },
    extra: {
      type: Object,
      required: false,
      default: () => getPropDefault("ASpinner", "extra"),
    },
    safeHtml: {
      type: String,
      required: false,
      default: () => getPropDefault("ASpinner", "safeHtml", ""),
    },
    size: {
      type: [String, Number],
      required: false,
      default: () => getPropDefault("ASpinner", "size"),
      validator: size => ["1", "2", "3", "4", "5", "6", "7"].indexOf(`${ size }`) !== -1,
    },
    tag: {
      type: String,
      required: false,
      default: () => getPropDefault("ASpinner", "tag", "span"),
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
        "a_spinner",
        this.classSize,
      ],
      role: "status",
      innerHTML: this.safeHtml,
      ...this.ariaLabelAttributes,
    });
  },
};
