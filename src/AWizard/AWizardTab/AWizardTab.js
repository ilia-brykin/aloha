import {
  h,
} from "vue";

import ActiveAPI from "./compositionAPI/ActiveAPI";
import ContentIdAPI from "./compositionAPI/ContentIdAPI";
import HeadingAPI from "./compositionAPI/HeadingAPI";
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
    isStepHeadingVisible: {
      type: Boolean,
      required: false,
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
    stepHeadingTag: {
      type: String,
      required: false,
      default: "h3",
    },
    stepIconErrorText: {
      type: String,
      required: false,
      default: "_A_WIZARD_STEP_ERROR_",
    },
    stepIconWarningText: {
      type: String,
      required: false,
      default: "_A_WIZARD_STEP_WARNING_",
    },
    stepIndex: {
      type: Number,
      required: true,
    },
    stepsCount: {
      type: Number,
      required: true,
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
      contentId,
    } = ContentIdAPI(props);

    const {
      headingId,
      headingText,
    } = HeadingAPI(props);

    return {
      contentId,
      headingId,
      headingText,
      isStepRender,
      styleStep,
    };
  },
  render() {
    if (!this.isStepRender) {
      return null;
    }
    // a group named by the heading; after a change of the step the focus goes to the heading
    return h("div", {
      id: this.contentId,
      class: "a_wizard__tab_pane",
      style: this.styleStep,
      role: "group",
      "aria-labelledby": this.headingId,
    }, [
      h(this.stepHeadingTag, {
        id: this.headingId,
        class: ["a_wizard__step_heading", {
          a_sr_only: !this.isStepHeadingVisible,
        }],
        tabindex: -1,
      }, this.headingText),
      this.$slots[this.step.slot] && this.$slots[this.step.slot]({
        step: this.step,
        stepIndex: this.stepIndex,
      }),
    ]);
  },
};
