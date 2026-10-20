export default function JsAPI() {
  const codeJs = `import { ref } from "vue";
import { AValidatedJson } from "aloha-vue";

export default {
  components: { AValidatedJson },
  setup() {
    const model = ref(["Aloha", "Vue"]);
    const children = [{ id: "value", type: "text", label: "_A_VALIDATED_JSON_COMPONENT_LABEL_VALUE_", required: true }];
    return { model, children };
  },
};`;
  return { codeJs };
}
