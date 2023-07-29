import AJson from "../../../../../src/AJson/AJson";


export default {
  name: "PageAJson",
  components: {
    AJson,
  },
  data() {
    return {
      model1: {
        aloha: {
          hola: ["aloha"],
        },
      },
    };
  },
};
