import AForm from "../../../../src/ui/AForm/AForm";

export default {
  name: "PageForm",
  components: {
    AForm,
  },
  data() {
    return {
      model: undefined,
      selectData: [
        {
          label: "Aloha 1",
          id: "aloha_1",
          group: "group 1",
        },
        {
          label: "Aloha 2",
          id: "aloha_2",
        },
        {
          label: "Aloha 3",
          id: "aloha_3",
          group: "group 1",
        },
        {
          label: "Aloha 4",
          id: "aloha_4",
        },
        {
          label: "Aloha 5",
          id: "aloha_5",
          group: "group 2",
        },
        {
          label: "AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 6",
          id: "aloha_6",
          group: "group 2",
        },
        {
          label: "AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 7",
          id: "aloha_7",
          group: "group 2",
        },
        {
          label: "AlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAlohaAloha 8",
          id: "aloha_8",
        },
      ],
    };
  },
  computed: {
    data() {
      return [
        {
          type: "text",
          label: "Aloha 8",
          id: "aloha8",
          classColumn: "a_column_8",
        },
        {
          type: "text",
          label: "Aloha 4",
          id: "aloha4",
          classColumn: "a_column_4",
        },
        {
          type: "select",
          label: "Aloha select",
          id: "aloha_select",
          classColumn: "a_column_5",
          keyId: "id",
          keyLabel: "label",
          search: true,
          keyGroup: "group",
          data: this.selectData,
        },
        {
          type: "text",
          label: "Aloha 12",
          id: "aloha12",
          classColumn: "a_column_4",
          dependencies: [
            {
              id: "aloha_select",
              value: "aloha_1",
            },
          ],
        },
        {
          type: "text",
          label: "Aloha 13",
          id: "aloha13",
          classColumn: "a_column_4",
          dependencies: {
            id: "aloha_select",
            value: "aloha_2",
          },
        },
      ];
    },
  },
};
