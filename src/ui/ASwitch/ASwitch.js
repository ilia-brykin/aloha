import {
  h,
} from "vue";
import {
  AElement,
  AErrorsText,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  ALabel,
  APlacements,
  ATranslation,
  UiAPI,
  UiDisabledAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import CheckedAPI from "./compositionAPI/CheckedAPI";
import LabelAPI from "./compositionAPI/LabelAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import OnInputAPI from "./compositionAPI/OnInputAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ASwitch",
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
    defaultLabel: {
      type: String,
      required: false,
      default: "_A_SWITCH_DEFAULT_LABEL_",
    },
    defaultValue: {
      type: [Boolean, String, Number],
      required: false,
      default: undefined,
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
    falseLabel: {
      type: String,
      required: false,
      default: "_A_SWITCH_FALSE_LABEL_",
    },
    falseValue: {
      type: [Boolean, String, Number],
      required: false,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      required: false,
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
      default: () => uniqueId("a_switch_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
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
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    isThreeState: {
      type: Boolean,
      required: false,
      default: false,
    },
    isTitleHtml: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    label: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    labelClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    labelDescription: {
      type: String,
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
    title: {
      type: [String, Number, Object, Array],
      required: false,
      default: undefined,
    },
    titlePlacement: {
      type: String,
      required: false,
      default: "top",
      validator: placement => APlacements.indexOf(placement) !== -1,
    },
    trueLabel: {
      type: String,
      required: false,
      default: "_A_SWITCH_TRUE_LABEL_",
    },
    trueValue: {
      type: [Boolean, String, Number],
      required: false,
      default: true,
    },
  },
  emits: [
    "blur",
    "focus",
    "update:modelValue",
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
      clearModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      labelDescriptionId,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      isModelDefault,
      isModelFalse,
      isModelTrue,
    } = ModelAPI(props);

    const {
      labelValueLocal,
    } = LabelAPI(props, {
      isModelFalse,
      isModelTrue,
    });

    const {
      isChecked,
    } = CheckedAPI({
      isModelFalse,
      isModelTrue,
    });

    const {
      onInput,
      onKeydown,
    } = OnInputAPI(props, {
      changeModel,
      isModelFalse,
      isModelTrue,
    });

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      clearModel,
      componentStyleHide,
      disabledAttribut,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isChecked,
      isErrors,
      isModel,
      isModelDefault,
      labelDescriptionId,
      labelValueLocal,
      onBlur,
      onFocus,
      onInput,
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
        modelValue: this.labelValueLocal,
        required: this.required,
        style: this.componentStyleHide,
        type: "switch",
      });
    }

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      type: undefined,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_not_empty: this.isModel,
        }],
      }, [
        (this.label || this.labelScreenReader) ?
          h(ALabel, {
            id: this.htmlIdLocal,
            alwaysTranslate: this.alwaysTranslate,
            label: this.label,
            labelClass: this.labelClass,
            labelScreenReader: this.labelScreenReader,
            required: this.required,
            isError: this.isErrors,
          }) :
          "",
        h(AFormLabelDescription, {
          id: this.labelDescriptionId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.labelDescription,
          extra: this.extra,
        }),
        h("div", {
          class: "switch_button__wrapper",
        }, [
          h(AElement, {
            class: [
              "switch_button",
              {
                switch_button_undefined: this.isModelDefault,
                switch_button_invalid: this.isErrors,
                switch_button_auto: !this.fullWidth,
              },
            ],
            classDefault: "",
            isTitleHtml: this.isTitleHtml,
            tag: "div",
            title: this.title,
            titlePlacement: this.titlePlacement,
            type: "text",
          }, {
            default: () => [
              h("input", {
                id: this.htmlIdLocal,
                "aria-describedby": this.ariaDescribedbyLocal,
                ariaInvalid: this.isErrors,
                ariaRequired: this.required,
                checked: this.isChecked,
                class: [
                  "switch_button__input",
                  this.inputClass,
                ],
                disabled: this.disabledAttribut,
                type: "checkbox",
                ...this.inputAttributes,
                onClick: this.onInput,
                onKeydown: this.onKeydown,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
              }),
              h(ATranslation, {
                alwaysTranslate: this.alwaysTranslate,
                tag: "label",
                class: [
                  "switch_button__label",
                  {
                    switch_button__label_full: this.fullWidth,
                  },
                ],
                for: this.htmlIdLocal,
                extra: this.extra,
                html: this.labelValueLocal,
              }),
            ],
          }),
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
