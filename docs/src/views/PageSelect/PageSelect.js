import ASelect from "../../../../src/ui/ASelect/ASelect";

export default {
  name: "PageSelect",
  components: {
    ASelect,
  },
  data() {
    return {
      model: undefined,
      modelArr: undefined,
      data: [
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
          label: "Aloha 6",
          id: "aloha_6",
          group: "group 2",
        },
        {
          label: "Aloha 7",
          id: "aloha_7",
          group: "group 2",
        },
        {
          label: "Aloha 8",
          id: "aloha_8",
        },
      ],
    };
  },
  methods: {
    getLabel({ item }) {
      return `callback: ${ item.label }`;
    },
  },
};
