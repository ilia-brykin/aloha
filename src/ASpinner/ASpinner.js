import {
  h,
} from "vue";

import AriaLabelAPI from "../ATranslation/compositionAPI/AriaLabelAPI";

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
      type: String,
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

    return {
      ariaLabelAttributes,
    };
  },
  render() {
    return h(this.tag, {
      class: spinnerPluginOptions.value.propsDefault.class,
      role: "status",
      innerHTML: this.safeHtml,
      ...this.ariaLabelAttributes,
    });
  },
};
