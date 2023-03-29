import AInputNumber from "../../../../src/ui/AInputNumber/AInputNumber";

export default {
  name: "PageInputNumber",
  components: {
    AInputNumber,
  },
  data() {
    return {
      model1: 10,
      model2: 11.2,
      model3: undefined,
    };
  },
  methods: {
    changeModel1(arg) {
      console.log("arg", arg);
    },
  },
};
