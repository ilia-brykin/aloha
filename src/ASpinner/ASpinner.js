import {
  h,
} from "vue";

import ATranslation from "../ATranslation/ATranslation";

import AriaLabelAPI from "./compositionAPI/AriaLabelAPI";

import {
  spinnerPluginOptions,
} from "../plugins/ASpinnerPlugin";


export default {
  name: "ASpinner",
  components: {
    ATranslation,
  },
  props: {
    ariaLabel: {
      type: String,
      required: false,
      default: () => spinnerPluginOptions.value.propsDefault.ariaLabel,
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
      ariaLabelTranslated,
    } = AriaLabelAPI(props);

    return {
      ariaLabelTranslated,
    };
  },
  render() {
    return h(this.tag, {
      ariaLabel: this.ariaLabelTranslated,
      class: spinnerPluginOptions.value.propsDefault.class,
      role: "status",
      innerHTML: this.safeHtml,
    });
  },
};
