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
        },
        {
          label: "Aloha 2",
          id: "aloha_2",
        },
        {
          label: "Aloha 3",
          id: "aloha_3",
        },
        {
          label: "Aloha 4",
          id: "aloha_4",
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
