import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ADrawer,
  AForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDrawerForm",
  components: {
    AButton,
    ADrawer,
    AForm,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const dataForm = [
      {
        type: "text",
        id: "name",
        label: "_A_FORM_EXAMPLE_NAME_",
        required: true,
      },
      {
        type: "email",
        id: "email",
        label: "_A_FORM_EXAMPLE_EMAIL_",
      },
      {
        type: "select",
        id: "country",
        label: "_A_FORM_EXAMPLE_COUNTRY_",
        data: [
          { label: "Deutschland", value: "de" },
          { label: "France", value: "fr" },
          { label: "Italia", value: "it" },
        ],
      },
      {
        type: "switch",
        id: "notifications",
        label: "_A_FORM_EXAMPLE_NOTIFICATIONS_",
      },
      {
        type: "textarea",
        id: "notes",
        label: "_A_FORM_EXAMPLE_NOTES_",
      },
    ];
    const model = ref({
      name: "Aloha",
      email: "aloha@example.com",
      country: "de",
      notifications: true,
      notes: "",
    });
    // the form edits a copy, so "Cancel" does not change the model
    const modelLocal = ref({});
    const isDrawerVisible = ref(false);

    const openDrawer = () => {
      modelLocal.value = { ...model.value };
      isDrawerVisible.value = true;
    };

    const closeDrawer = () => {
      isDrawerVisible.value = false;
    };

    const save = () => {
      model.value = { ...modelLocal.value };
      closeDrawer();
    };

    return {
      closeDrawer,
      codeHtml,
      codeJs,
      dataForm,
      isDrawerVisible,
      model,
      modelLocal,
      openDrawer,
      save,
    };
  },
};
