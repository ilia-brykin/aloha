import ModeJsonReadOnly from "./ModeJsonReadOnly/ModeJsonReadOnly.vue";
import ModeListReadOnly from "./ModeListReadOnly/ModeListReadOnly.vue";
import ModeSingleReadOnly from "./ModeSingleReadOnly/ModeSingleReadOnly.vue";

import UIReadOnlyMixin from "../../UIReadOnlyMixin";
import UiValidatedJsonMixin from "../UiValidatedJsonMixin";

import {
  random,
} from "lodash-es";

// @vue/component
export default {
  name: "UiValidatedJsonReadOnly",
  components: {
    ModeJsonReadOnly,
    ModeListReadOnly,
    ModeSingleReadOnly,
  },
  mixins: [
    UIReadOnlyMixin,
    UiValidatedJsonMixin,
  ],
  props: {
    idPrefix: {
      type: String,
      default: () => `${ random(0, 1000) }`,
    },
  },
  computed: {
    subIdPrefix() {
      if (this.options.htmlId) {
        return this.options.htmlId;
      }
      return `${ this.idPrefix }${ this.options.attrId || this.options.key || this.options.id }`;
    },
  },
};
