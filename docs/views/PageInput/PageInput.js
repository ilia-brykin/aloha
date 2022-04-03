import AInput from "../../../src/AInput/AInput";
import ATextarea from "../../../src/ATextarea/ATextarea";


export default {
  name: "PageInput",
  components: {
    AInput,
    ATextarea,
  },
  data() {
    return {
      model1: "aloha",
      model2: "hola",
    };
  },
  methods: {
    changeModel1(arg) {
      console.log("arg", arg);
    },
  },
};
