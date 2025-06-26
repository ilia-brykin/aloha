import UiOneCheckbox from "../../UiOneCheckbox/UiOneCheckbox.vue";

import UiValidatedJsonModeSingleMixin from "../UiValidatedJsonModeSingleMixin";

// @vue/component
export default {
  name: "ModeSingle",
  components: {
    UiOneCheckbox,
  },
  mixins: [
    UiValidatedJsonModeSingleMixin,
  ],
};
