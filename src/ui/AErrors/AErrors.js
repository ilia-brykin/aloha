import {
  h,
  onMounted,
  watch,
} from "vue";
import {
  AAlert,
  ATranslation,
} from "../../index";

import AErrorsElement from "./AErrorsElement/AErrorsElement";

import CloseAPI from "./compositionAPI/CloseAPI";
import ErrorsAPI from "./compositionAPI/ErrorsAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import LabelsAPI from "./compositionAPI/LabelsAPI";

import {
  getPropDefault,
} from "../../plugins/AComponentsPlugin";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AErrors",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    autoFocus: {
      type: Boolean,
      required: false,
      default: true,
    },
    closable: {
      type: Boolean,
      required: false,
      default: true,
    },
    errors: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    // heading of the summary, so it can be found with the headings of a screen reader
    headerTag: {
      type: String,
      required: false,
      default: () => getPropDefault("AErrors", "headerTag", "h2"),
    },
    goToError: {
      type: Function,
      required: false,
      default: undefined,
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    isErrorLink: {
      type: Boolean,
      required: false,
      default: true,
    },
    optionsList: {
      type: Array,
      required: false,
      default: () => [],
    },
    textErrorHeader: {
      type: String,
      required: false,
      default: "_A_ERRORS_TEXT_HEADER_",
    },
    useFlatErrors: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: [
    "close",
  ],
  setup(props, context) {
    const {
      errorsCount,
      hasErrors,
    } = ErrorsAPI(props);

    const headerId = uniqueId("a_errors_header_");

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

    // every new errors (also a second submit with errors) move the focus to the summary
    watch(() => props.errors, () => {
      setFocusToElement();
    }, { deep: true });

    onMounted(() => {
      setFocusToElement();
    });

    return {
      close,
      elRef,
      errorsCount,
      hasErrors,
      headerId,
      labelsLocal,
    };
  },
  render() {
    // with auto-focus the screen reader reads the summary because of the focus: no role alert, else it is read twice
    return h(AAlert, {
      ref: "elRef",
      alwaysTranslate: this.alwaysTranslate,
      tabindex: -1,
      announce: this.autoFocus ? "none" : "alert",
      isVisible: this.hasErrors,
      closable: this.closable,
      onClose: this.close,
    }, () => [
      this.hasErrors && h("div", {
        class: "a_errors",
      }, [
        h(this.headerTag, {
          id: this.headerId,
          class: "a_errors__header",
        }, [
          h(ATranslation, {
            alwaysTranslate: this.alwaysTranslate,
            extra: { count: this.errorsCount },
            html: this.textErrorHeader,
            tag: "strong",
          }),
        ]),
        h("ul", {
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
              useFlatErrors: this.useFlatErrors,
            });
          }),
        ]),
      ]),
    ]);
  },
};
