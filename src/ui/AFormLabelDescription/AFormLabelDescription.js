import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

export default {
  name: "AFormLabelDescription",
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
    isLabelFloat: {
      type: Boolean,
      required: false,
    },
  },
  render() {
    return (!this.isLabelFloat && this.html) ?
      h(ATranslation, {
        id: this.id,
        alwaysTranslate: this.alwaysTranslate,
        class: "a_form_element__label_description",
        html: this.html,
        extra: this.extra,
      }) :
      "";
  },
};
