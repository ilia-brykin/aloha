import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

import frameworks from "../../const/frameworks";
import {
  frameworksApi,
} from "../../API/frameworksApi";

export default {
  name: "ALabel",
  components: {
    ATranslation,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    labelClass: {
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
    },
    framework: {
      type: String,
      required: false,
      validator: framework => frameworks.indexOf(framework) !== -1,
    },
  },
  setup(props) {
    const {
      frameworkLocal,
    } = frameworksApi(props);
    return {
      frameworkLocal,
    };
  },
  computed: {
    textAfterLabel() {
      return this.required ? "*" : "";
    },

    labelClassLocal() {
      if (this.frameworkLocal) {
        const LABEL_CLASS_FRAMEWORK = {
          bootstrap: "form-label",
          bulma: "label",
          foundation: "",
          uikit: "",
        };
        return LABEL_CLASS_FRAMEWORK[this.frameworkLocal];
      }
    },
  },
  render() {
    return h("label", {
      for: this.id,
      class: ["a_form_element_label", this.labelClass, this.labelClassLocal],
    }, [
      h(ATranslation, {
        tag: "span",
        text: this.label,
        textAfter: this.textAfterLabel,
      }),
    ]);
  },
};
