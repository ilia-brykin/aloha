import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AModalForm,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageModalFormElements",
  components: {
    AButton,
    AlohaExample,
    AModalForm,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref({
      name: "Aloha",
      email: "aloha@example.com",
      birthday: undefined,
      country: "de",
      budget: 1500,
      contact: "email",
      interests: ["music"],
      notifications: true,
      notes: "",
    });
    const modelSaved = ref(undefined);
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
        type: "date",
        id: "birthday",
        label: "_A_MODAL_FORM_EXAMPLE_BIRTHDAY_",
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
        type: "currency",
        id: "budget",
        label: "_A_MODAL_FORM_EXAMPLE_BUDGET_",
      },
      {
        type: "radio",
        id: "contact",
        label: "_A_MODAL_FORM_EXAMPLE_CONTACT_",
        data: [
          { label: "_A_MODAL_FORM_EXAMPLE_CONTACT_EMAIL_", value: "email" },
          { label: "_A_MODAL_FORM_EXAMPLE_CONTACT_PHONE_", value: "phone" },
        ],
      },
      {
        type: "checkbox",
        id: "interests",
        label: "_A_MODAL_FORM_EXAMPLE_INTERESTS_",
        data: [
          { label: "_A_MODAL_FORM_EXAMPLE_INTEREST_MUSIC_", value: "music" },
          { label: "_A_MODAL_FORM_EXAMPLE_INTEREST_SPORT_", value: "sport" },
          { label: "_A_MODAL_FORM_EXAMPLE_INTEREST_TRAVEL_", value: "travel" },
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
        classColumn: "a_column a_column_12",
      },
    ];
    const isModalVisible = ref(false);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    const save = () => {
      modelSaved.value = { ...model.value };
      closeModal();
    };

    return {
      closeModal,
      codeHtml,
      codeJs,
      dataForm,
      isModalVisible,
      model,
      modelSaved,
      openModal,
      save,
    };
  },
};
