import ATranslation from "../ATranslation/ATranslation.vue";

import colors from "../const/colors";

export default {
  name: "ASpinner",
  components: {
    ATranslation,
  },
  props: {
    size: {
      type: String,
      required: false,
      default: "1",
      validator: size => ["1", "2", "3", "4", "5", "6"].indexOf(size) !== -1,
    },
    tag: {
      type: String,
      required: false,
      default: "div",
    },
    text: {
      type: String,
      required: false,
      default: "_LOADING_",
    },
    type: {
      type: String,
      required: false,
      default: "border",
      validator: type => ["border", "grow"].indexOf(type) !== -1,
    },
    typeColor: {
      type: String,
      required: false,
      validator: typeColor => colors.indexOf(typeColor) !== -1,
    },
  },
  computed: {
    typeClass() {
      return `spinner-${ this.type }`;
    },

    typeColorClass() {
      if (this.typeColor) {
        return `text-${ this.typeColor }`;
      }
    },

    typeSizeClass() {
      if (this.size) {
        return `a_spinner_${ this.size }`;
      }
    },
  },
};
