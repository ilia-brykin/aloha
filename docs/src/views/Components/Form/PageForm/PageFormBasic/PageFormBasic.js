import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFormBasic",
  components: {
    AForm,
    AlohaExample,
  },
  setup() {
    const data = [
      {
        type: "text",
        id: "name",
        label: "_A_FORM_EXAMPLE_NAME_",
        required: true,
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
      {
        type: "email",
        id: "email",
        label: "_A_FORM_EXAMPLE_EMAIL_",
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
      {
        type: "select",
        id: "country",
        label: "_A_FORM_EXAMPLE_COUNTRY_",
        data: [
          {
            label: "Deutschland",
            value: "de",
          },
          {
            label: "France",
            value: "fr",
          },
          {
            label: "Italia",
            value: "it",
          },
        ],
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
      {
        type: "switch",
        id: "notifications",
        label: "_A_FORM_EXAMPLE_NOTIFICATIONS_",
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
    ];
    const model = ref({
      name: "Aloha",
      email: "aloha@example.com",
      country: "de",
      notifications: true,
    });

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
      model,
    };
  },
};
