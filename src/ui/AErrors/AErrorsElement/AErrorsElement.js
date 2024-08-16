import {
  computed,
  h,
  resolveComponent,
  toRef,
} from "vue";

import AElement from "../../../AElement/AElement";
import ATranslation from "../../../ATranslation/ATranslation";

import AKeysCode from "../../../const/AKeysCode";
import {
  setFocusToTinymce
} from "../../ATinymce/compositionAPI/ATinymceAPI";
import {
  scrollToElement,
} from "../../../utils/utilsDOM";
import {
  get,
  isArray,
  isFunction,
  isNil,
  isPlainObject,
  isString,
  size,
  uniqueId,
} from "lodash-es";


export default {
  name: "AErrorsElement",
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    error: {
      type: [Object, Array, String],
      required: false,
      default: undefined,
    },
    errorKey: {
      type: String,
      required: false,
      default: undefined,
    },
    errorLabels: {
      type: [String, Object],
      required: true,
    },
    goToError: {
      type: Function,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_errors_"),
    },
    isErrorLink: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const errorLabels = toRef(props, "errorLabels");
    const currentLabel = computed(() => {
      if (isString(errorLabels.value)) {
        return errorLabels.value;
      } else if (isPlainObject(errorLabels.value)) {
        return errorLabels.value.label;
      }
      return "";
    });

    const isErrorLink = toRef(props, "isErrorLink");
    const isErrorLinkLocal = computed(() => {
      return isPlainObject(errorLabels.value) &&
        errorLabels.value.link &&
        isErrorLink.value;
    });

    const error = toRef(props, "error");
    const isErrorString = computed(() => {
      return isString(error.value);
    });

    const isErrorArray = computed(() => {
      return isArray(error.value);
    });

    const isErrorObject = computed(() => {
      return isPlainObject(error.value);
    });

    const isErrorLabelsArray = computed(() => {
      return isArray(errorLabels.value);
    });

    const id = toRef(props, "id");
    const idLocal = computed(() => {
      return get(errorLabels.value, "id") || id.value;
    });

    const goToError = toRef(props, "goToError");
    const errorKey = toRef(props, "errorKey");
    const goToErrorLocal = () => {
      if (isFunction(goToError.value)) {
        return goToError.value({
          id: idLocal.value,
          key: errorKey.value
        });
      }
      let idStr = idLocal.value;
      if (!isNil(errorKey.value)) {
        idStr = `${ idStr }_${ errorKey.value }`;
      }
      if (size(idStr) > 0) {
        const ELEMENT = document.getElementById(idStr);
        if (ELEMENT) {
          if (ELEMENT.tagName === "TEXTAREA" &&
            ELEMENT.classList.contains("a_textarea_tinymce")) {
            setFocusToTinymce({ id: idStr });
            scrollToElement({ element: ELEMENT.parentNode });
            return;
          }
          ELEMENT.focus();
        }
      }
    };

    const onKeydown = $event => {
      if ($event.keyCode === AKeysCode.enter ||
        $event.keyCode === AKeysCode.space) {
        goToErrorLocal();
        $event.stopPropagation();
        $event.preventDefault();
      }
    };

    return {
      currentLabel,
      goToErrorLocal,
      isErrorArray,
      isErrorLabelsArray,
      isErrorLinkLocal,
      isErrorObject,
      isErrorString,
      onKeydown,
    };
  },
  render() {
    return h("div", {
      class: "a_error__list__li",
    }, [
      this.isErrorString ?
        this.isErrorLinkLocal ?
          h(AElement, {
            type: "link",
            class: "a_errors__label a_btn a_btn_link a_p_0",
            tabindex: 0,
            "aria-describedby": this.id,
            safeHtml: this.currentLabel,
            textTag: "strong",
            textAfter: ":",
            onClick: this.goToErrorLocal,
            onKeydown: this.onKeydown,
          }) :
          h("div", {
            class: "a_errors__label",
            "aria-describedby": this.id,
          }, [
            h(ATranslation, {
              tag: "strong",
              safeHtml: this.currentLabel,
            }),
          ]) : "",
      h(
        "div", 
        {
          id: this.id,
          class: "a_errors__errors",
        },
        this.isErrorString ?
          [
            h(ATranslation, {
              alwaysTranslate: this.alwaysTranslate,
              tag: "span",
              html: this.error,
            })
          ] :
          this.isErrorArray ? [...this.error.map((error, erIndex) => {
            return h(resolveComponent("AErrorsElement"), {
              key: erIndex,
              error,
              alwaysTranslate: this.alwaysTranslate,
              errorLabels: this.isErrorLabelsArray ? this.errorLabels[erIndex] || this.errorLabels : this.errorLabels,
              goToError: this.goToError,
              isErrorLink: this.isErrorLink,
            });
          })] :
          this.isErrorObject ?
            [
              h("div", {
                class: "a_pl_2",
              }, [
                ...Object.keys(this.error).map(key => {
                  return h(resolveComponent("AErrorsElement"), {
                    key: key,
                    alwaysTranslate: this.alwaysTranslate,
                    error: this.error[key],
                    errorLabels: this.errorLabels[key] || this.errorLabels,
                    goToError: this.goToError,
                    isErrorLink: this.isErrorLink,
                  });
                }),
              ]),
            ] :
            [],
      ),
    ]);
  },
};
