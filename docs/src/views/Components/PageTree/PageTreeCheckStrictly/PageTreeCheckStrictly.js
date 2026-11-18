import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATree,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTreeCheckStrictly",
  components: {
    AlohaExample,
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    const checked = ref(["it"]);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      checked,
      codeHtml,
      codeJs,
      data,
    };
  },
};
