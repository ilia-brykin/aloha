import UiSelectElement from "../UiSelectElement/UiSelectElement.vue";

import ReadOnlyMixin from "../ReadOnlyMixin";

import {
  isNil,
} from "lodash-es";

// @vue/component
export default {
  name: "UiSelectReadOnly",
  components: {
    UiSelectElement,
  },
  mixins: [
    ReadOnlyMixin,
  ],
  computed: {
    isEmpty() {
      return (!isNil(this.options.emptyValue) && this.model == this.options.emptyValue) || (isNil(this.model) && isNil(this.getElement));
    },

    getElement() {
      if (this.options.keyArray) {
        return this.model;
      }
      const COLLECTION = this.getCollection || {};
      return COLLECTION[this.model];
    },
  },
};
