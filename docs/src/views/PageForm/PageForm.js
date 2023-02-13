import AForm from "../../../../src/ui/AForm/AForm";

export default {
  name: "PageForm",
  components: {
    AForm,
  },
  data() {
    return {
      model: {
        alohadate: "2023-01-10",
      },
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
          type: "textarea",
          label: "Aloha tiny",
          id: "aloha_textarea",
          classColumn: "a_column a_column_8",
          required: true,
        },
        {
          type: "tinymce",
          label: "Aloha tiny",
          id: "aloha_tiny",
          classColumn: "a_column_8",
          required: true,
        },
        {
          type: "color",
          label: "Aloha Color",
          id: "alohaColor",
          classColumn: "a_column_8",
          required: true,
        },
        {
          type: "text",
          label: "Aloha 1",
          id: "aloha1",
          classColumn: "a_column_8",
          required: true,
          isHide: true,
        },
        {
          type: "number",
          label: "Aloha 1",
          id: "aloha1_number",
          classColumn: "a_column_3",
          step: 0.01,
          required: true,
        },
        {
          type: "date",
          label: "Aloha date",
          id: "alohadate",
          classColumn: "a_column_8",
          required: true,
        },
        {
          type: "file",
          label: "Aloha File",
          id: "alohaFile",
          classColumn: "a_column_8",
          required: true,
        },
        {
          type: "file",
          label: "Aloha File Multiple",
          id: "alohaFileMultiple",
          classColumn: "a_column_8",
          required: true,
          isMultiple: true,
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
          change: this.changeAloha,
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
        {
          type: "fieldset",
          label: "Aloha 11",
          id: "aloha11",
          classColumn: "a_column_8",
          helpText: "ALOHA help!!!",
          children: [
            {
              type: "text",
              label: "Aloha 12",
              id: "aloha12",
              classColumn: "a_column_4",
            },
            {
              type: "text",
              label: "Aloha 13",
              id: "aloha13",
              classColumn: "a_column_8",
            },
            {
              type: "fieldset",
              label: "Aloha fieldset",
              id: "aloha111",
              classColumn: "a_column_8",
              helpText: "ALOHA help!!!",
              children: [
                {
                  type: "text",
                  label: "Aloha 12",
                  id: "aloha122",
                  classColumn: "a_column_4",
                },
                {
                  type: "text",
                  label: "Aloha 13",
                  id: "aloha132",
                  classColumn: "a_column_8",
                },
              ],
            },
          ],
        },
        {
          type: "fieldset",
          id: "aloha112",
          classColumn: "a_column_8",
          inputClass: "a_p_0",
          helpText: "fieldset without border",
          hasBorder: false,
          children: [
            {
              type: "text",
              label: "Aloha 12",
              id: "aloha122",
              classColumn: "a_column_4",
            },
            {
              type: "text",
              label: "Aloha 13",
              id: "aloha132",
              classColumn: "a_column_8",
            },
          ],
        },
        {
          type: "group",
          id: "group1",
          helpText: "group text",
          children: [
            {
              type: "text",
              label: "Group text",
              labelClass: "a_column_4 a_text_right",
              id: "group_text",
              classColumn: "a_column_4",
            },
            {
              type: "switch",
              label: "Group switch",
              id: "group_switch",
              classColumn: "a_column_4",
              labelClass: "a_sr_only",
              helpText: "ALOHA help!!!",
            },
          ],
        },
        {
          type: "template",
          id: "aloha14",
          classColumn: "a_column_8",
          html: "<strong>TEMPLATE</strong>",
        },
      ];
    },
  },
  methods: {
    validate() {
      const TEXT_INVALID = "Example invalid text";
      this.errors = {
        aloha_tiny: [TEXT_INVALID],
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
        aloha11: [TEXT_INVALID],
        aloha12: [TEXT_INVALID],
        aloha13: [TEXT_INVALID],
      };
    },

    reset() {
      this.errors = undefined;
    },

    changeAloha(arg) {
      console.log("arg", arg);
    },
  },
};
