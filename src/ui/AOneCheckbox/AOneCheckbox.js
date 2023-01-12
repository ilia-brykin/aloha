import {
  h,
  withDirectives,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";

import ASafeHtml from "../../directives/ASafeHtml";

import UiMixinProps from "../mixins/UiMixinProps";

import TrueFalseValueAPI from "./compositionAPI/TrueFalseValueAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";


export default {
  name: "AOneCheckbox",
  mixins: [
    UiMixinProps,
  ],
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      required: false,
    },
    isWidthAuto: {
      type: Boolean,
      required: false,
    },
    indeterminate: {
      type: Boolean,
      required: false,
    },
    trueValue: {
      type: [Boolean, String, Number],
      required: false,
      default: true,
    },
    falseValue: {
      type: [Boolean, String, Number],
      required: false,
      default: undefined,
    },
  },
  setup(props, context) {
    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      ariaDescribedbyLocal,
      changeModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      isChecked,
      onClick,
      onKeydown,
    } = TrueFalseValueAPI(props, {
      changeModel,
    });

    return {
      componentStyleHide,

      ariaDescribedbyLocal,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,

      isChecked,
      onClick,
      onFocus,
      onKeydown,
      onBlur,
    };
  },
  render() {
    return this.isRender && h("div", {
      style: this.componentStyleHide,
    }, [
      h("div", {
        class: ["a_form_element__parent"],
      }, [
        h("div", {
          class: "a_form_element",
        }, [
          h("div", {
            class: ["a_custom_control a_custom_checkbox", {
              a_custom_control_invalid: this.isErrors,
            }],
          }, [
            h("input", {
              id: this.htmlIdLocal,
              value: this.modelValue,
              type: "checkbox",
              checked: this.isChecked,
              class: "a_custom_control_input",
              disabled: this.disabled,
              ariaRequired: this.required,
              ariaInvalid: this.isErrors,
              "aria-describedby": this.ariaDescribedbyLocal,
              indeterminate: this.indeterminate,
              ...this.inputAttributes,
              onClick: this.onClick,
              onKeydown: this.onKeydown,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
            }),
            h("label", {
              for: this.htmlIdLocal,
              class: ["a_custom_control_label", {
                a_custom_control_label_width_auto: this.isWidthAuto,
              }],
            }, [
              this.label && h("span", {
                class: "a_custom_control_label__text",
              }, [
                withDirectives(h("span"), [
                  [ASafeHtml, this.label],
                ]),
                this.required && h("span", null, "*"),
              ]),
            ]),
          ]),
        ]),
        this.helpText && withDirectives(h("div", {
          id: this.helpTextId,
          class: "a_form_element__help_text",
        }), [
          [ASafeHtml, this.helpText],
        ]),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
