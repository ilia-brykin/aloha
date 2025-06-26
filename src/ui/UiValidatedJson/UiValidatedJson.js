import {
  defineAsyncComponent,
} from "vue";

import UIComponentMixin from "../UIComponentMixin";
import UiValidatedJsonMixin from "./UiValidatedJsonMixin";

import {
  cloneDeep,
  isArray,
  keyBy,
} from "lodash-es";

// @vue/component
export default {
  name: "UiValidatedJson",
  components: {
    ModeJson: defineAsyncComponent(() => import("./ModeJson/ModeJson.vue")),
    ModeList: defineAsyncComponent(() => import("./ModeList/ModeList.vue")),
    ModeSingle: defineAsyncComponent(() => import("./ModeSingle/ModeSingle.vue")),
  },
  mixins: [
    UIComponentMixin,
    UiValidatedJsonMixin,
  ],
  computed: {
    errorsObj() {
      if (isArray(this.errors)) {
        return keyBy(this.errors);
      }
      return this.errors;
    },
    subIdPrefix() {
      return `${ this.getId }`;
    },
  },
  methods: {
    onChange({ currentModel }) {
      const VALUE_LOCAL = this.checkUndefinedValue({ value: cloneDeep(currentModel) });
      if (VALUE_LOCAL === this.model) { // Workaround für ie11
        return;
      }
      this.input({
        currentModel: VALUE_LOCAL,
        model: VALUE_LOCAL,
        id: this.options.id,
        $event: null,
        param: this.options.param,
        options: this.options,
      });
      this.change({
        currentModel: VALUE_LOCAL,
        model: VALUE_LOCAL,
        id: this.options.id,
        $event: null,
        param: this.options.param,
        options: this.options,
      });
    },
  },
};
