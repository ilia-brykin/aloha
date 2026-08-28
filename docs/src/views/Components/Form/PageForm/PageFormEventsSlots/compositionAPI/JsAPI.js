export default function JsAPI() {
  const codeJs = `import { ref } from "vue";
import { AForm } from "aloha-vue";

export default {
  components: { AForm },
  setup() {
    const data = [
      { type: "text", id: "title", label: "Title", required: true },
    ];
    const model = ref({ title: "" });
    const lastEvent = ref();

    const onUpdateModelValue = modelUpdated => {
      lastEvent.value = { event: "update:modelValue", model: modelUpdated };
    };
    const onChange = ({ id, model: modelField, fullModel }) => {
      lastEvent.value = {
        event: "change",
        id,
        model: modelField,
        fullModel,
      };
    };

    return {
      data,
      lastEvent,
      model,
      onChange,
      onUpdateModelValue,
    };
  },
};`;

  return {
    codeJs,
  };
}
