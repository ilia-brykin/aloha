import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AForm,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFormEventsSlots",
  components: {
    AForm,
    AlohaExample,
    ATranslation,
  },
  setup() {
    const data = [
      {
        type: "text",
        id: "title",
        label: "_A_FORM_EXAMPLE_TITLE_",
        required: true,
      },
    ];
    const lastEvent = ref(undefined);
    const model = ref({
      title: "",
    });

    const onChange = ({ id, model: modelField, fullModel }) => {
      lastEvent.value = {
        event: "change",
        id,
        model: modelField,
        fullModel,
      };
    };
    const onUpdateModelValue = modelUpdated => {
      lastEvent.value = {
        event: "update:modelValue",
        model: modelUpdated,
      };
    };

    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      data,
      lastEvent,
      model,
      onChange,
      onUpdateModelValue,
    };
  },
};
