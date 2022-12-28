import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

export default {
  name: "ARequired",
  props: {
    text: {
      type: String,
      required: false,
      default: "Die mit *Sternchen versehenen Felder sind Pflichtfelder.",
    },
  },
  render() {
    return h(ATranslation, {
      class: "a_required",
      html: this.text,
    });
  },
};
