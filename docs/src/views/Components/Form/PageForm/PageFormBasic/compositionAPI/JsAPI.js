export default function JsAPI() {
  const codeJs = `import { ref } from "vue";
import { AForm } from "aloha-vue";

export default {
  components: { AForm },
  setup() {
    const data = [
      {
        type: "text",
        id: "name",
        label: "Name",
        required: true,
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
      {
        type: "email",
        id: "email",
        label: "Email",
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
      {
        type: "select",
        id: "country",
        label: "Country",
        data: [
          { label: "Deutschland", value: "de" },
          { label: "France", value: "fr" },
          { label: "Italia", value: "it" },
        ],
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
      {
        type: "switch",
        id: "notifications",
        label: "Notifications",
        classColumn: "a_column a_column_6 a_column_12_touch",
      },
    ];
    const model = ref({
      name: "Aloha",
      email: "aloha@example.com",
      country: "de",
      notifications: true,
    });

    return { data, model };
  },
};`;

  return {
    codeJs,
  };
}
