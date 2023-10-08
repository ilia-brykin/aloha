import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import FocusIdAPI from "./compositionAPI/FocusIdAPI";
import VisibilityAPI from "./compositionAPI/VisibilityAPI";

export default {
  name: "AWizardTab",
  props: {
    id: {
      type: String,
      required: true,
    },
    extra: {
      type: Object,
      required: true,
    },
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

    const {
      focusId,
    } = FocusIdAPI(props);

    return {
      focusId,
      isStepRender,
      styleStep,
    };
  },
  render() {
    return this.isStepRender && h("div", {
      class: "a_wizard__tab_pane",
      style: this.styleStep,
    }, [
      h("div", {
        id: this.focusId,
        class: "a_sr_only",
        tabindex: "-1",
      }, [
        h(ATranslation, {
          tag: "span",
          text: "_A_WIZARD_HEADER_STEP_SCREEN_READER_{{stepNumber}}_",
          extra: {
            stepNumber: this.stepIndex + 1,
          },
        }),
        (!this.step.slotLabel || this.$slots[this.step.slotLabel]) &&
        h(ATranslation, {
          tag: "span",
          html: this.step.label,
          class: "a_wizard__step__text",
          extra: this.extra,
        }),
      ]),
      this.$slots[this.step.slot] && this.$slots[this.step.slot]({
        step: this.step,
        stepIndex: this.stepIndex,
      }),
    ]);
  },
};
