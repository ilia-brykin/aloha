import ActionsPageMain from "../ActionsPageMain/ActionsPageMain.vue";
import ContextPanel from "../ContextPanel/ContextPanel.vue";
import PuxButton from "../PuxButton/PuxButton.vue";
import PuxTranslate from "../PuxTranslate/PuxTranslate.vue";

import Spinner from "../Spinner/Spinner.vue";
import {
  isFunction,
  isUndefined,
} from "lodash-es";

// @vue/component
export default {
  name: "Wizard",
  components: {
    ActionsPageMain,
    ContextPanel,
    PuxButton,
    PuxTranslate,
    Spinner,
  },
  props: {
    steps: {
      type: Array,
      default: () => [],
    },
    stepActive: {
      type: Number,
      default: undefined,
    },
    stepsVisited: {
      type: Object,
      default: undefined,
    },
    booleanProps: {
      type: Object,
      default: () => ({
        backTargetStepDisabled: undefined,
        backStepHide: undefined,
        backStepDisabled: undefined,
        buttonsLoading: undefined,
        forwardStepHide: undefined,
        forwardStepDisabled: undefined,
        closeButtonShow: undefined,
        closeButtonBottomHide: undefined,
        buttonStepNeverDisabled: undefined,
      }),
    },
    options: {
      type: Object,
      default: () => ({
        closeButtonTitle: "_BTN_CANCEL_",
        closeButtonLabel: "_BTN_CANCEL_",
      }),
    },
    close: {
      type: Function,
      default: undefined,
    },
    goStepBack: {
      type: Function,
      default: undefined,
    },
    goOneStepBack: {
      type: Function,
      default: undefined,
    },
    goTargetStepBack: {
      type: Function,
      default: undefined,
    },
    goOneStepForward: {
      type: Function,
      default: undefined,
    },
  },
  data() {
    return {
      localStepActive: 0,
      localStepsVisited: {
        0: true,
      },
    };
  },
  computed: {
    getContextPanelOptions() {
      return ({ step, stepIndex }) => ({
        label: step.label,
        labelIndex: `${ stepIndex + 1 }.`,
        active: true,
      });
    },
    getClassForStepButton() {
      return stepIndex => ({
        wizard__steps__button_active: this.getStepActive === stepIndex,
        wizard__steps__button_before: this.getStepActive > stepIndex,
        "btn-default": this.getStepActive < stepIndex,
        "ml-0": stepIndex === 0,
        "ml-2": stepIndex !== 0,
      });
    },

    getStepActive() {
      return !isUndefined(this.stepActive) ? this.stepActive : this.localStepActive;
    },

    getStepsVisited() {
      return !isUndefined(this.stepsVisited) ? this.stepsVisited : this.localStepsVisited;
    },

    getCloseButtonTitle() {
      return this.options.closeButtonTitle || "_BTN_CANCEL_";
    },

    getCloseButtonLabel() {
      return this.options.closeButtonLabel || "_BTN_CANCEL_";
    },

    isButtonStepDisabledLocal() {
      return stepIndex => this.stepActive <= stepIndex || this.booleanProps.backTargetStepDisabled;
    },

    isButtonStepBackDisabled() {
      return this.booleanProps.backStepDisabled;
    },

    isButtonStepBack() {
      return !this.booleanProps.backStepHide && this.getStepActive !== 0;
    },

    isButtonStepForwardDisabled() {
      return this.booleanProps.forwardStepDisabled;
    },

    isButtonStepForward() {
      return !this.booleanProps.forwardStepHide && this.getStepActive !== this.steps.length - 1;
    },

    isCloseWizardButton() {
      return isFunction(this.close) && (!isUndefined(this.booleanProps.closeButtonShow) && this.booleanProps.closeButtonShow);
    },

    isCloseWizardButtonBottom() {
      return this.isCloseWizardButton && !this.booleanProps.closeButtonBottomHide;
    },
  },
  methods: {
    onGoStepBack({ stepIndex }) {
      isFunction(this.goStepBack) ? this.goStepBack({ stepIndex }) : this.goStepBackLocal({ stepIndex });
    },

    onGoOneStepBack() {
      isFunction(this.goOneStepBack) ? this.goOneStepBack() : this.goOneStepBackLocal();
    },

    onGoTargetStepBack({ stepIndex }) {
      isFunction(this.goTargetStepBack) ? this.goTargetStepBack({ stepIndex }) : this.goTargetStepBackLocal({ stepIndex });
    },

    onGoOneStepForward() {
      isFunction(this.goOneStepForward) ? this.goOneStepForward() : this.goOneStepForwardLocal();
    },

    goStepBackLocal({ stepIndex }) {
      this.getStepActive - stepIndex === 1 ? this.onGoOneStepBack() : this.onGoTargetStepBack({ stepIndex });
    },

    goOneStepBackLocal() {
      this.localStepActive -= 1;
    },

    goTargetStepBackLocal({ stepIndex }) {
      this.localStepActive = stepIndex;
    },

    goOneStepForwardLocal() {
      this.localStepActive += 1;
      this.localStepsVisited[this.localStepActive] = true;
    },
  },
};
