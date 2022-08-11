import ACheckbox from "../../../../src/ui/ACheckbox/ACheckbox";
import AOneCheckbox from "../../../../src/ui/AOneCheckbox/AOneCheckbox";

export default {
  name: "PageCheckbox",
  components: {
    ACheckbox,
    AOneCheckbox,
  },
  data() {
    return {
      model: false,
      model1: false,
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
};
