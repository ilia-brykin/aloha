import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AInput,
  ATree,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTreeJson",
  components: {
    AlohaExample,
    AInput,
    ATree,
  },
  setup() {
    const json = {
      id: 42,
      name: "Anna Becker",
      email: "anna.becker@example.com",
      active: true,
      manager: null,
      roles: ["admin", "editor"],
      address: {
        street: "Hauptstraße 1",
        city: "Berlin",
        geo: { lat: 52.52, lng: 13.405 },
      },
    };
    const searchModel = ref("");
    const selected = ref(undefined);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      json,
      searchModel,
      selected,
    };
  },
};
