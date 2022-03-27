import AInput from "../../../src/AInput/AInput";


export default {
  name: "PageInput",
  components: {
    AInput,
  },
  data() {
    return {
      model1: "aloha",
    };
  },
  methods: {
    changeModel1(arg) {
      console.log("arg", arg);
    },
  },
};
