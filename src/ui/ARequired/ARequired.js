import {
  h,
} from "vue";

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
    return h("div", {
      class: "a_required",
      innerHTML: this.text,
    });
  },
};
