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

      errors: undefined,
    };
  },
  computed: {
    data() {
      return [
        {
          type: "text",
          label: "Aloha 1",
          id: "aloha1",
          classColumn: "a_column_8",
          required: true,
        },
        {
          type: "text",
          label: "Aloha 2",
          id: "aloha2",
          classColumn: "a_column_4",
          helpText: "ALOHA help!!!",
        },
        {
          type: "select",
          label: "Aloha 3",
          id: "aloha3",
          classColumn: "a_column_5",
          keyId: "id",
          keyLabel: "label",
          search: true,
          keyGroup: "group",
          data: this.selectData,
          helpText: "ALOHA help!!!",
        },
        {
          type: "text",
          label: "Aloha 4",
          id: "aloha4",
          classColumn: "a_column_4",
          dependencies: [
            {
              id: "aloha3",
              value: "aloha_1",
            },
          ],
        },
        {
          type: "text",
          label: "Aloha 5",
          id: "aloha5",
          classColumn: "a_column_4",
          dependencies: {
            id: "aloha3",
            value: "aloha_2",
          },
        },
        {
          type: "textarea",
          label: "Aloha 6",
          id: "aloha6",
          classColumn: "a_column_12",
          helpText: "ALOHA help!!!",
        },
        {
          type: "switch",
          label: "Aloha 7",
          id: "aloha7",
          classColumn: "a_column_5",
          helpText: "ALOHA help!!!",
        },
        {
          type: "oneCheckbox",
          label: "Aloha 8",
          id: "aloha8",
          classColumn: "a_column_5",
          helpText: "ALOHA help!!!",
        },
        {
          type: "checkbox",
          label: "Aloha 9",
          id: "aloha9",
          classColumn: "a_column_6",
          keyId: "id",
          keyLabel: "label",
          data: this.selectData,
          helpText: "ALOHA help!!!",
        },
        {
          type: "radio",
          label: "Aloha 10",
          id: "aloha10",
          classColumn: "a_column_6",
          keyId: "id",
          keyLabel: "label",
          data: this.selectData,
          helpText: "ALOHA help!!!",
        },
      ];
    },
  },
  methods: {
    validate() {
      const TEXT_INVALID = "Example invalid text";
      this.errors = {
        aloha1: [TEXT_INVALID, TEXT_INVALID],
        aloha2: [TEXT_INVALID],
        aloha3: [TEXT_INVALID],
        aloha4: [TEXT_INVALID],
        aloha5: [TEXT_INVALID],
        aloha6: [TEXT_INVALID],
        aloha7: [TEXT_INVALID],
        aloha8: [TEXT_INVALID],
        aloha9: [TEXT_INVALID],
        aloha10: [TEXT_INVALID],
      };
    },

    reset() {
      this.errors = undefined;
    },
  },
};
