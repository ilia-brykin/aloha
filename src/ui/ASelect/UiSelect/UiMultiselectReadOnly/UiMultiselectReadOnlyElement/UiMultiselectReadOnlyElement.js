import PuxTranslate from "../../../../../components/PuxTranslate/PuxTranslate.vue";

// @vue/component
export default {
  name: "UiMultiselectReadOnlyElement",
  components: {
    PuxTranslate
  },
  props: {
    options: {
      type: Object,
      required: true,
    },
    currentModel: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    currentObj: {
      type: [String, Object],
      default: undefined,
    },
    last: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    getModel() {
      if (this.options.keyArray) {
        return this.currentModel;
      }
      if (this.currentObj) {
        return this.currentObj[this.options.keyLabel || "label"];
      }
      return this.currentModel;
    },
  },
};
