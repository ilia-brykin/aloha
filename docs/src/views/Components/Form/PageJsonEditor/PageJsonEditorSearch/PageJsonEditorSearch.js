import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AJsonEditor,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorSearch",
  components: {
    AJsonEditor,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const CITIES = ["Bonn", "Berlin", "Köln", "Hamburg", "München"];
    const model = ref({
      users: Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        name: `User ${ index + 1 }`,
        address: { city: CITIES[index % CITIES.length], zip: `${ 10000 + index * 731 }` },
        active: index % 3 !== 0,
      })),
    });

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
