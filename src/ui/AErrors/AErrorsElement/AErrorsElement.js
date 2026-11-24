import {
  h,
  resolveComponent,
} from "vue";

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
      targetId,
    } = LinkAPI(props);


    return {
      currentLabel,
      goToErrorLocal,
      isErrorArray,
      isErrorLabelsArray,
      isErrorLinkLocal,
      isErrorObject,
      isErrorString,
      targetId,
    };
  },
  render() {
    let label = "";
    if (this.currentLabel) {
      if (this.isErrorString ||
        (this.isErrorObject && !this.useFlatErrors)) {
        if (this.isErrorLinkLocal) {
          label = h("a", {
            href: this.targetId ? `#${ this.targetId }` : undefined,
            class: "a_errors__label a_errors__link",
            "aria-describedby": this.id,
            onClick: this.goToErrorLocal,
          }, [
            h(ATranslation, {
              tag: "strong",
              safeHtml: this.currentLabel,
            }),
            ":",
          ]);
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


    // a list item; several errors of a field or nested fields are a list in it
    const HAS_LIST = this.isErrorArray || this.isErrorObject;
    return h("li", {
      class: "a_error__list__li",
    }, [
      label,
      h(
        HAS_LIST ? "ul" : "div",
        {
          id: this.id,
          class: ["a_errors__errors", {
            a_errors__list: HAS_LIST,
            a_pl_2: this.isErrorObject,
          }],
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
            Object.keys(this.error).map(key => {
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
            }) :
            [],
      ),
    ]);
  },
};
