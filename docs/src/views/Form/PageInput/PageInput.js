import AInput from "../../../../../src/ui/AInput/AInput";
import ATextarea from "../../../../../src/ui/ATextarea/ATextarea";


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
      model3: "",
      model4: "FakePass",
    };
  },
  methods: {
    changeModel1(arg) {
      console.log("arg", arg);
    },
  },
};
