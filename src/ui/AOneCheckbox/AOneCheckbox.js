import {
  h,
} from "vue";
import {
  AElement,
  AErrorsText,
  AFormHelpText,
  AFormReadonly,
  UiAPI,
  UiDisabledAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import LabelAPI from "./compositionAPI/LabelAPI";
import ReadonlyAPI from "./compositionAPI/ReadonlyAPI";
import TrueFalseValueAPI from "./compositionAPI/TrueFalseValueAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AOneCheckbox",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    dependencies: {
      type: [Array, Object],
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    errors: {
      type: [String, Array],
      required: false,
      default: undefined,
    },
    excludeRenderAttributes: {
      type: Array,
      required: false,
      default: () => [],
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    falseValue: {
      type: [Boolean, String, Number],
      required: false,
      default: undefined,
    },
    helpText: {
      type: String,
      required: false,
      default: undefined,
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_one_checkbox_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    indeterminate: {
      type: Boolean,
      required: false,
    },
    inputAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    inputClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isLabelTitle: {
      type: Boolean,
      required: false,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    isWidthAuto: {
      type: Boolean,
      required: false,
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelAttributes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    labelClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    labelScreenReader: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelUndefined: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
      default: undefined,
    },
    modelValue: {
      type: [Boolean, String, Number],
      required: false,
      default: undefined,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    readonlyDefault: {
      type: String,
      required: false,
      default: "",
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    slotName: {
      type: String,
      required: false,
      default: undefined,
    },
    trueValue: {
      type: [Boolean, String, Number],
      required: false,
      default: true,
    },
  },
  emits: [
    "update:modelValue",
    "focus",
    "blur",
  ],
  setup(props, context) {
    const {
      disabledAttribut,
    } = UiDisabledAPI(props);

    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

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

    const {
      modelValueReadonly,
    } = ReadonlyAPI(props);

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      componentStyleHide,
      disabledAttribut,
      errorsId,
      hasLabel,
      helpTextId,
      htmlIdLocal,
      isChecked,
      isErrors,
      modelValueReadonly,
      onBlur,
      onClick,
      onFocus,
      onKeydown,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    if (this.readonly) {
      return h(AFormReadonly, {
        ...this.$attrs,
        id: this.htmlIdLocal,
        alwaysTranslate: this.alwaysTranslate,
        excludeRenderAttributes: this.excludeRenderAttributes,
        extra: this.extra,
        helpText: this.helpText,
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        modelValue: this.modelValueReadonly,
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        style: this.componentStyleHide,
        type: "oneCheckbox",
      });
    }

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      type: undefined,
      ...this.attributesToExcludeFromRender,
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
              disabled: this.disabledAttribut,
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
            h(AElement, {
              alwaysTranslate: this.alwaysTranslate,
              class: [
                "a_custom_control_label",
                {
                  a_custom_control_label_width_auto: this.isWidthAuto,
                },
              ],
              extra: this.extra,
              for: this.htmlIdLocal,
              tag: "label",
              title: this.isLabelTitle ? this.label : undefined,
              type: "text",
              ...this.labelAttributes,
            }, () => [
              this.$slots?.[this.slotName] ?
                this.$slots[this.slotName]({
                  id: this.htmlIdLocal,
                  labelClass: [
                    "a_custom_control_label__text",
                    this.labelClass,
                  ],
                  label: this.label,
                  labelScreenReader: this.labelScreenReader,
                  props: this.$props,
                  required: this.required,
                }) :
                this.hasLabel && h("span", {
                  class: [
                    "a_custom_control_label__text",
                    this.labelClass,
                  ],
                }, [
                  h(AElement, {
                    alwaysTranslate: this.alwaysTranslate,
                    extra: this.extra,
                    html: this.label,
                    textScreenReader: this.labelScreenReader,
                    tag: "span",
                    title: this.isLabelTitle ? this.label : undefined,
                    type: "text",
                  }),
                  this.required ?
                    h("span", null, "*") :
                    "",
                ]),
            ]),
          ]),
        ]),
        h(AFormHelpText, {
          id: this.helpTextId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.helpText,
          extra: this.extra,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          alwaysTranslate: this.alwaysTranslate,
          errors: this.errors,
        }),
      ]),
    ]);
  },
};
