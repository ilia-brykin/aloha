import AInputNumber from "../../../../../src/ui/AInputNumber/AInputNumber";

export default {
  name: "PageInputNumber",
  components: {
    AInputNumber,
  },
  data() {
    return {
      model1: 10,
      model2: 123,
      model3: 321,
      model4: 432,
    };
  },
  methods: {
    changeModel1(arg) {
      console.log("arg", arg);
    },
  },
};
