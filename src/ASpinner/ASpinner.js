import {
  h,
} from "vue";

import ATranslation from "../ATranslation/ATranslation";


export default {
  name: "ASpinner",
  components: {
    ATranslation,
  },
  props: {
    tag: {
      type: String,
      required: false,
      default: "span",
    },
    class: {
      type: [String, Object],
      required: false,
      default: "",
    },
    text: {
      type: String,
      required: false,
      default: "_LOADING_",
    },
  },
  render() {
    return h(this.tag, {
      class: [
        "a_spinner",
        this.class,
      ],
      role: "status",
    }, [
      this.text && h(ATranslation, {
        class: "a_sr_only",
        tag: "span",
        text: this.text,
      }),
    ]);
  },
};
