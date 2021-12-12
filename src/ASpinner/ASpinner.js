import colors from "../const/colors";

export default {
  name: "ASpinner",
  props: {
    tag: {
      type: String,
      required: false,
      default: "div",
    },
    text: {
      type: String,
      required: false,
      default: "Loading...",
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
  },
};
