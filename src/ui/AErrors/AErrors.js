import {
  h,
  onMounted,
  watch,
} from "vue";

import AAlert from "../../AAlert/AAlert";
import AErrorsElement from "./AErrorsElement/AErrorsElement";

import CloseAPI from "./compositionAPI/CloseAPI";
import ErrorsAPI from "./compositionAPI/ErrorsAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import LabelsAPI from "./compositionAPI/LabelsAPI";

export default {
  name: "AErrors",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    errors: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    closable: {
      type: Boolean,
      required: false,
      default: true,
    },
    goToError: {
      type: Function,
      required: false,
      default: undefined,
    },
    optionsList: {
      type: Array,
      required: false,
      default: () => [],
    },
    autoFocus: {
      type: Boolean,
      required: false,
      default: true,
    },
    textErrorHeader: {
      type: String,
      required: false,
      default: "Bitte überprüfen Sie Ihre Eingaben.",
    },
    isErrorLink: {
      type: Boolean,
      required: false,
      default: true,
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "close",
  ],
  setup(props, context) {
    const {
      hasErrors,
    } = ErrorsAPI(props);

    const {
      elRef,
      setFocusToElement,
    } = FocusAPI(props, {
      hasErrors,
    });

    const {
      labelsLocal,
    } = LabelsAPI(props);

    const {
      close,
    } = CloseAPI(context);

    watch(hasErrors, () => {
      setFocusToElement();
    });

    onMounted(() => {
      setFocusToElement();
    });

    return {
      close,
      elRef,
      hasErrors,
      labelsLocal,
    };
  },
  render() {
    return h(AAlert, {
      ref: "elRef",
      alwaysTranslate: this.alwaysTranslate,
      tabindex: -1,
      role: "alert",
      "aria-atomic": true,
      isVisible: this.hasErrors,
      closable: this.closable,
      onClose: this.close,
    }, () => [
      this.hasErrors && h("div", {
        class: "a_errors",
      }, [
        h("div", {
          class: "a_errors__header",
        }, [
          h("strong", null, this.textErrorHeader),
        ]),
        h("div", {
          class: "a_errors__list",
        }, [
          ...Object.keys(this.errors).map(key => {
            return h(AErrorsElement, {
              key,
              alwaysTranslate: this.alwaysTranslate,
              error: this.errors[key],
              errorLabels: this.labelsLocal[key] || this.labelsLocal,
              goToError: this.goToError,
              isErrorLink: this.isErrorLink,
            });
          }),
        ]),
      ]),
    ]);
  },
};
