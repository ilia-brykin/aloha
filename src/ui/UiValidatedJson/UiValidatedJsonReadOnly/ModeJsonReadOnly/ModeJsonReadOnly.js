import {
  AButton,
  ATranslation,
} from "aloha-vue";

import UiValidatedJsonModeManyMixin from "../../UiValidatedJsonModeManyMixin";


// @vue/component
export default {
  name: "ModeJsonReadOnly",
  components: {
    AButton,
    ATranslation,
  },
  mixins: [
    UiValidatedJsonModeManyMixin,
  ],
  props: {
    model: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isReadonly() {
      return true;
    },
  },
};
