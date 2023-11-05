import {
  ref,
} from "vue";

import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import AFilters from "../../../../../src/AFilters/AFilters/AFilters";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFiltersModelId",
  components: {
    AlohaExample,
    AFilters,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const filters = [
      {
        type: "text",
        id: "search",
        label: "_A_TABLE_FILTER_SEARCH_",
        main: true,
      },
      {
        type: "checkbox",
        id: "aloha1",
        modelId: "aloha",
        label: "Aloha 1",
        alwaysVisible: true,
        keyLabel: "label",
        keyId: "id",
        data: [
          {
            label: "Aloha 0",
            id: "aloha_0",
          },
          {
            label: "Aloha 1",
            id: "aloha_1",
          },
        ],
      },
      {
        type: "checkbox",
        id: "aloha2",
        modelId: "aloha",
        label: "Aloha 2",
        alwaysVisible: true,
        keyLabel: "label",
        keyId: "id",
        data: [
          {
            label: "Aloha 2",
            id: "aloha_2",
          },
          {
            label: "Aloha 3",
            id: "aloha_3",
          },
        ],
      },
    ];

    const appliedModel = ref({});
    const unappliedModel = ref({});

    return {
      appliedModel,
      codeHtml,
      codeJs,
      filters,
      unappliedModel,
    };
  },
};
