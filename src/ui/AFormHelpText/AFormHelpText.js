import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

export default {
  name: "AFormHelpText",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    html: {
      type: [String, Number],
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
  },
  render() {
    return this.html && h(ATranslation, {
      id: this.id,
      alwaysTranslate: this.alwaysTranslate,
      class: "a_form_element__help_text",
      html: this.html,
      extra: this.extra,
    });
  },
};
