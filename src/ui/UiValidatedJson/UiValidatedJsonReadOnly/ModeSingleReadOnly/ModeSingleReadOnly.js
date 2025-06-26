import UiOneCheckboxReadOnly from "../../../UiOneCheckbox/UiOneCheckboxReadOnly/UiOneCheckboxReadOnly.vue";

import UiValidatedJsonModeSingleMixin from "../../UiValidatedJsonModeSingleMixin";

// @vue/component
export default {
  name: "ModeSingleReadOnly",
  components: {
    UiOneCheckboxReadOnly,
  },
  mixins: [
    UiValidatedJsonModeSingleMixin,
  ],
  computed: {
    isReadonly() {
      return true;
    },
  },
};
