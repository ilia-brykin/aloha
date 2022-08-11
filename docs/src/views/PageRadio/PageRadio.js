import ARadio from "../../../../src/ui/ARadio/ARadio";

export default {
  name: "PageRadio",
  components: {
    ARadio,
  },
  data() {
    return {
      model: undefined,
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
};
