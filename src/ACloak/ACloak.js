import ASpinner from "../ASpinner/ASpinner.vue";
import ATranslation from "../ATranslation/ATranslation.vue";

export default {
  name: "ACloak",
  components: {
    ASpinner,
    ATranslation,
  },
  props: {
    align: {
      type: String,
      required: false,
      default: "center",
      validator: value => ["start", "center", "end"].indexOf(value) !== -1,
    },
    text: {
      type: String,
      required: false,
      default: "_LOADING_",
    },
    isTextLeft: {
      type: Boolean,
      required: false,
    },
    extraTranslate: {
      type: Object,
      required: false,
    },
    tag: {
      type: String,
      required: false,
      default: "div",
    },
    spinnerType: {
      type: String,
      required: false,
      default: "border",
    },
    spinnerTypeColor: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
      default: "1",
      validator: size => ["1", "2", "3", "4", "5", "6"].indexOf(size) !== -1,
    },
  },
  computed: {
    classAlign() {
      return `text-${ this.align }`;
    },

    classForBox() {
      return this.isTextLeft ? "a_cloak__box_text_left" : "a_cloak__box_text_right";
    },

    classTextSize() {
      return `fs-${ this.size }`;
    },
  },
};
