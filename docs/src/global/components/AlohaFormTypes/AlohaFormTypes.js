import {
  AElement,
  AList,
  ATranslation,
} from "aloha-vue";

import TypesAPI from "./compositionAPI/TypesAPI";

export default {
  name: "AlohaFormTypes",
  components: {
    AElement,
    AList,
    ATranslation,
  },
  setup() {
    const {
      types,
    } = TypesAPI();

    return {
      types,
    };
  },
};
