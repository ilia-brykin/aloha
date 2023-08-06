import {
  h,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import ATranslation from "../../ATranslation/ATranslation";

import UiMixinProps from "../mixins/UiMixinProps";

import LabelAPI from "./compositionAPI/LabelAPI";
import TrueFalseValueAPI from "./compositionAPI/TrueFalseValueAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";


export default {
  name: "AOneCheckbox",
  mixins: [
    UiMixinProps,
  ],
  props: {
    falseValue: {
      type: [Boolean, String, Number],
      required: false,
      default: undefined,
    },
    indeterminate: {
      type: Boolean,
      required: false,
    },
    isLabelTitle: {
      type: Boolean,
      required: false,
    },
    isWidthAuto: {
      type: Boolean,
      required: false,
    },
    modelValue: {
      type: [Boolean, String, Number],
      required: false,
    },
    trueValue: {
      type: [Boolean, String, Number],
      required: false,
      default: true,
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

    const {
      hasLabel,
    } = LabelAPI(props);

    return {
      ariaDescribedbyLocal,
      componentStyleHide,
      errorsId,
      hasLabel,
      helpTextId,
      htmlIdLocal,
      isChecked,
      isErrors,
      onBlur,
      onClick,
      onFocus,
      onKeydown,
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
              class: [
                "a_custom_control_label",
                {
                  a_custom_control_label_width_auto: this.isWidthAuto,
                },
              ],
            }, [
              this.hasLabel && h("span", {
                class: [
                  "a_custom_control_label__text",
                  this.labelClass,
                ],
              }, [
                h(ATranslation, {
                  tag: "span",
                  html: this.label,
                }),
                this.required && h("span", null, "*"),
              ]),
              (this.isLabelTitle && this.hasLabel) && h(ATranslation, {
                class: "a_position_absolute_all",
                ariaHidden: true,
                tag: "span",
                title: this.label,
              }),
            ]),
          ]),
        ]),
        this.helpText && h(ATranslation, {
          tag: "div",
          class: "a_form_element__help_text",
          html: this.helpText,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};