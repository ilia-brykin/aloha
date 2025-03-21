import {
  h,
} from "vue";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import ContentIdAPI from "./compositionAPI/ContentIdAPI";
import FocusIdAPI from "./compositionAPI/FocusIdAPI";
import VisibilityAPI from "./compositionAPI/VisibilityAPI";

export default {
  name: "AWizardTab",
  props: {
    extra: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    step: {
      type: Object,
      required: true,
    },
    stepActiveComputed: {
      type: Number,
      required: false,
      default: 0,
    },
    stepIndex: {
      type: Number,
      required: true,
    },
    stepsVisitedComputed: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    wizardAriaDescribedby: {
      type: String,
      required: true,
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

    const {
      focusId,
    } = FocusIdAPI(props);

    const {
      contentId,
    } = ContentIdAPI(props);

    return {
      contentId,
      focusId,
      isStepRender,
      styleStep,
    };
  },
  render() {
    return h("div", {
      id: this.contentId,
    }, [
      this.isStepRender && h("div", {
        class: "a_wizard__tab_pane",
        style: this.styleStep,
      }, [
        h("div", {
          id: this.focusId,
          class: "a_sr_only",
          tabindex: "-1",
          "aria-describedby": this.wizardAriaDescribedby,
        }),
        this.$slots[this.step.slot] && this.$slots[this.step.slot]({
          step: this.step,
          stepIndex: this.stepIndex,
        }),
      ]),
    ]);
  },
};
