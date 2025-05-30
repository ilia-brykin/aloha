import {
  h,
  resolveComponent,
} from "vue";

import AElement from "../../../AElement/AElement";
import ATranslation from "../../../ATranslation/ATranslation";

import ErrorTypeAPI from "./compositionAPI/ErrorTypeAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import LinkAPI from "./compositionAPI/LinkAPI";

import {
  AKeyChildren,
} from "../../../const/AKeys";
import {
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
    useFlatErrors: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const {
      currentLabel,
      isErrorLabelsArray,
    } = LabelAPI(props);

    const {
      isErrorArray,
      isErrorObject,
      isErrorString,
    } = ErrorTypeAPI(props);

    const {
      goToErrorLocal,
      isErrorLinkLocal,
      onKeydown,
    } = LinkAPI(props);


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
    let label = "";
    if (this.currentLabel) {
      if (this.isErrorString ||
        (this.isErrorObject && !this.useFlatErrors)) {
        if (this.isErrorLinkLocal) {
          label = h(AElement, {
            type: "link",
            class: "a_errors__label a_btn a_btn_link a_p_0",
            tabindex: 0,
            "aria-describedby": this.id,
            safeHtml: this.currentLabel,
            textTag: "strong",
            textAfter: ":",
            onClick: this.goToErrorLocal,
            onKeydown: this.onKeydown,
          });
        } else {
          label = h("div", {
            class: "a_errors__label",
            "aria-describedby": this.id,
          }, [
            h(ATranslation, {
              tag: "strong",
              safeHtml: this.currentLabel,
            }),
          ]);
        }
      }
    }


    return h("div", {
      class: "a_error__list__li",
    }, [
      label,
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
            }),
          ] :
          this.isErrorArray ?
            [...this.error.map((error, erIndex) => {
              return h(resolveComponent("AErrorsElement"), {
                key: erIndex,
                error,
                alwaysTranslate: this.alwaysTranslate,
                errorLabels: this.isErrorLabelsArray ? this.errorLabels[erIndex] || this.errorLabels : this.errorLabels,
                goToError: this.goToError,
                isErrorLink: this.isErrorLink,
                useFlatErrors: this.useFlatErrors,
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
                    errorLabels: this.useFlatErrors ?
                      this.errorLabels[key] || this.errorLabels :
                      this.errorLabels?.[AKeyChildren]?.[key] || this.errorLabels[key] || this.errorLabels,
                    goToError: this.goToError,
                    isErrorLink: this.isErrorLink,
                    useFlatErrors: this.useFlatErrors,
                  });
                }),
              ]),
            ] :
            [],
      ),
    ]);
  },
};
