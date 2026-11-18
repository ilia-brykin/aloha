export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AInput,
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeSearch",
  components: {
    AInput,
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

    const searchModel = ref("end");

    return {
      data,
      searchModel,
    };
  },
};`;

  return {
    codeJs,
  };
}
