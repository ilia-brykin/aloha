import {
  computed,
  h,
  onMounted,
  ref,
  toRef,
  watch,
} from "vue";

import AAlert from "../../AAlert/AAlert";
import AErrorsElement from "./AErrorsElement";

import {
  getHtmlId
} from "../compositionApi/UiAPI";
import {
  forEach,
  isEmpty,
  isUndefined,
} from "lodash-es";

export default {
  name: "AErrors",
  props: {
    errors: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    isDismissible: {
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
    "onDismiss",
  ],
  setup(props, { emit }) {
    const errors = toRef(props, "errors");
    const isErrors = computed(() => {
      return !isEmpty(errors.value);
    });

    const onDismissLocal = () => {
      emit("onDismiss");
    };

    const optionsList = toRef(props, "optionsList");
    const idPrefix = toRef(props, "idPrefix");

    const getLabelsFromChildren = children => {
      let labelsFromChildren = {};
      forEach(children, childOptions => {
        labelsFromChildren[childOptions.id] = {
          label: childOptions.labelError || childOptions.label,
          link: !isUndefined(childOptions.isErrorLink) ? childOptions.isErrorLink : true,
          id: getHtmlId({
            id: childOptions.id,
            idPrefix: childOptions.idPrefix || idPrefix.value,
            htmlId: childOptions.htmlId,
          }),
        };
        if (childOptions.children && childOptions.children.length) {
          labelsFromChildren = {
            ...labelsFromChildren,
            ...getLabelsFromChildren(childOptions.children),
          };
        }
      });

      return labelsFromChildren;
    };

    const labelsLocal = computed(() => {
      let labelsFromOptionsList = {};
      optionsList.value.forEach(options => {
        labelsFromOptionsList[options.id] = {
          label: options.labelError || options.label,
          link: !isUndefined(options.isErrorLink) ? options.isErrorLink : true,
          id: getHtmlId({
            id: options.id,
            idPrefix: options.idPrefix || idPrefix.value,
            htmlId: options.htmlId,
          }),
        };
        if (options.children && options.children.length) {
          labelsFromOptionsList = {
            ...labelsFromOptionsList,
            ...getLabelsFromChildren(options.children),
          };
        }
      });
      return labelsFromOptionsList;
    });

    const elRef = ref(undefined);
    const autoFocus = toRef(props, "autoFocus");
    const setFocusToElement = () => {
      if (autoFocus.value && isErrors.value) {
        setTimeout(() => {
          elRef.value.$el.focus();
        });
      }
    };

    watch(isErrors, () => {
      setFocusToElement();
    });

    onMounted(() => {
      setFocusToElement();
    });

    return {
      elRef,
      isErrors,
      labelsLocal,
      onDismissLocal,
    };
  },
  render() {
    return h(AAlert, {
      ref: "elRef",
      tabindex: -1,
      role: "alert",
      "aria-atomic": true,
      isVisible: this.isErrors,
      isDismissible: this.isDismissible,
      onOnDismiss: this.onDismissLocal,
    }, () => [
      this.isErrors && h("div", {
        class: "a_errors",
      }, [
        h("div", {
          class: "a_errors__header"
        }, [
          h("strong", null, this.textErrorHeader),
        ]),
        h("div", {
          class: "a_errors__list",
        }, [
          ...Object.keys(this.errors).map(key => {
            return h(AErrorsElement, {
              key,
              error: this.errors[key],
              errorLabels: this.labelsLocal[key] || this.labelsLocal,
              goToError: this.goToError,
              isErrorLink: this.isErrorLink,
            });
          }),
        ])
      ]),
    ]);
  },
};
