export default function JsAPI() {
  const codeJs = `import { ref } from "vue";
import { AForm } from "aloha-vue";

export default {
  components: { AForm },
  setup() {
    const data = [
      {
        type: "switch",
        id: "hasDetails",
        label: "Show details",
      },
      {
        type: "radio",
        id: "detailsType",
        label: "Detail type",
        data: [
          { label: "Basic", value: "basic" },
          { label: "Advanced", value: "advanced" },
        ],
      },
      {
        type: "text",
        id: "details",
        label: "Details",
        dependencies: { id: "hasDetails", value: true },
      },
      {
        type: "dateRange",
        id: "period",
        label: "Period",
        dependencies: [
          { id: "hasDetails", value: true },
          { id: "detailsType", value: "advanced" },
        ],
      },
    ];
    const model = ref({
      hasDetails: false,
      detailsType: "basic",
    });

    return { data, model };
  },
};`;

  return {
    codeJs,
  };
}
