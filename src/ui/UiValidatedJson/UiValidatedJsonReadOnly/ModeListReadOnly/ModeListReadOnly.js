import {
  AButton,
  ATranslation,
} from "aloha-vue";

import UiValidatedJsonModeManyMixin from "../../UiValidatedJsonModeManyMixin";


// @vue/component
export default {
  name: "ModeListReadOnly",
  components: {
    AButton,
    ATranslation,
  },
  mixins: [
    UiValidatedJsonModeManyMixin,
  ],
  props: {
    model: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isReadonly() {
      return true;
    },
  },
};
