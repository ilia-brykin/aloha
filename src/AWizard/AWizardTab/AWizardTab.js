import {
  h,
} from "vue";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import VisibilityAPI from "./compositionAPI/VisibilityAPI";

export default {
  name: "AWizardTab",
  props: {
    step: {
      type: Object,
      required: true,
    },
    stepIndex: {
      type: Number,
      required: true,
    },
    stepActiveComputed: {
      type: Number,
      required: false,
      default: 0,
    },
    stepsVisitedComputed: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  setup(props) {
    const {
      isStepActive,
    } = ActiveAPI(props);

    const {
      isStepRender,
      styleStep,
    } = VisibilityAPI(props, {
      isStepActive,
    });

    return {
      isStepRender,
      styleStep,
    };
  },
  render() {
    return this.isStepRender && h("div", {
      class: "a_wizard__tab_pane",
      style: this.styleStep,
    }, [
      this.$slots[this.step.slot] && this.$slots[this.step.slot]({
        step: this.step,
        stepIndex: this.stepIndex,
      }),
    ]);
  },
};
