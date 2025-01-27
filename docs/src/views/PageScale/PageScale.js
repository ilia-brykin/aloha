import {
  AInput,
  AScale,
} from "aloha-vue";

export default {
  name: "PageScale",
  components: {
    AInput,
    AScale,
  },
  data() {
    return {
      model: {
        value: 0,
        balanceCircleRadius: 3.5,
        balanceTopHeight: 6,
        balanceWidth: 60,
        bowlRadius: 12.6,
        bowlThreadHeight: 20,
        bowlThreadPaddingX: 4,
        bowlThreadStrokeWidth: 2,
        bowlThreadWidth: 16,
        bowlWidth: 25,
        pipesWidth: 3,
        standHeight: 46,
        standWidth: 70,
        viewBoxWidth: 100,
        viewBoxHeight: 80,
      },
    };
  },
};
