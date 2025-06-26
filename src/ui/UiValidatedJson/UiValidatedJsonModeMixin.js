import {
  defineAsyncComponent,
} from "vue";

import UiValidatedJsonMixin from "./UiValidatedJsonMixin";


export default {
  components: {
    ParameterFormular: defineAsyncComponent(() => import("../../ParameterFormular/ParameterFormular.vue")),
  },
  mixins: [
    UiValidatedJsonMixin,
  ],
  props: {
    model: {
      required: true,
    },
    options: {
      type: Object,
      default: () => ({}),
      required: true,
      info: "Optionen für den Parameter",
    },
    idPrefix: {
      type: String,
      required: true,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    errors: {},
  },
};
