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
    html: {
      type: [String, Number],
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
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
