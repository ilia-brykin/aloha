import {
  h,
  onBeforeUnmount,
  onMounted,
} from "vue";
import {
  AErrorsText,
  AFormElementBtnClear,
  AFormHelpText,
  AFormReadonly,
  ALabel,
  UiAPI,
  UiClearButtonAPI,
  UiDisabledAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import AutosizeAPI from "./compositionAPI/AutosizeAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import PlaceholderAPI from "../../ATranslation/compositionAPI/PlaceholderAPI";
import ResizeClass from "./compositionAPI/ResizeClass";
import RowsAPI from "./compositionAPI/RowsAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ATextarea",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    autocomplete: {
      type: String,
      required: false,
      default: undefined,
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    clearButtonClass: {
      type: [String, Object],
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
    helpText: {
      type: String,
      required: false,
    },
    htmlId: {
      type: String,
      required: false,
      default: undefined,
    },
    id: {
      type: [String, Number],
      required: false,
      default: () => uniqueId("a_textarea_"),
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
    isClearButton: {
      type: Boolean,
      required: false,
      default: true,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: true,
    },
    isRender: {
      type: Boolean,
      required: false,
      default: true,
    },
    isScalable: {
      type: Boolean,
      required: false,
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
    labelScreenReader: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
    maxlength: {
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
      default: "",
    },
    modelValue: {
      type: [String, Number],
      required: false,
    },
    placeholder: {
      type: [String, Number, Object],
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
    resize: {
      type: String,
      required: false,
      default: "v",
      validator: value => ["v", "h", "none", "auto"].indexOf(value) !== -1,
    },
    rows: {
      type: [String, Number],
      required: false,
      default: undefined,
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
      isModel,
      onBlur,
      onFocus,
    } = UiAPI(props, context);

    const {
      isClearButtonLocal,
    } = UiClearButtonAPI(props, {
      isModel,
    });

    const {
      resizeClass,
    } = ResizeClass(props);

    const {
      destroyAutosize,
      initAutosize,
      textareaRef,
      updateAutosize,
    } = AutosizeAPI(props);

    const {
      clearModel,
      onInput,
    } = ModelAPI(props, {
      changeModel,
      updateAutosize,
    });

    const {
      rowsLocal,
    } = RowsAPI(props);

    const {
      placeholderAttributes,
    } = PlaceholderAPI(props);

    onMounted(() => {
      initAutosize();
    });

    onBeforeUnmount(() => {
      destroyAutosize();
    });

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      changeModel,
      clearModel,
      componentStyleHide,
      disabledAttribut,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isClearButtonLocal,
      isErrors,
      isModel,
      onBlur,
      onFocus,
      onInput,
      placeholderAttributes,
      resizeClass,
      rowsLocal,
      textareaRef,
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
        label: this.label,
        labelClass: this.labelClass,
        labelScreenReader: this.labelScreenReader,
        modelValue: this.modelValue,
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        style: this.componentStyleHide,
        type: this.type,
        valueClass: "a_code_content",
        valueTag: "div",
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
          a_form_element__parent_float: this.isLabelFloat,
          a_form_element__parent_not_empty: this.isModel,
        }],
      }, [
        (this.label || this.labelScreenReader) ?
          h(ALabel, {
            id: this.htmlIdLocal,
            alwaysTranslate: this.alwaysTranslate,
            extra: this.extra,
            isError: this.isErrors,
            isLabelFloat: this.isLabelFloat,
            label: this.label,
            labelClass: this.labelClass,
            labelScreenReader: this.labelScreenReader,
            required: this.required,
          }) :
          "",
        h("div", {
          class: [
            "a_form_element a_form_element_textarea",
            {
              a_form_element_textarea_scalable: this.isScalable,
            },
          ],
        }, [
          h("textarea", {
            ref: "textareaRef",
            id: this.htmlIdLocal,
            autocomplete: this.autocomplete,
            value: this.modelValue,
            rows: this.rowsLocal,
            class: [
              "a_form_control a_textarea",
              this.inputClass,
              {
                a_textarea_scalable: this.isScalable,
                a_form_element_with_one_btn: this.isClearButton,
                a_form_control_invalid: this.isErrors,
              },
              this.resizeClass,
            ],
            disabled: this.disabledAttribut,
            ariaRequired: this.required,
            ariaInvalid: this.isErrors,
            "aria-describedby": this.ariaDescribedbyLocal,
            maxlength: this.maxlength,
            ...this.placeholderAttributes,
            ...this.inputAttributes,
            onInput: this.onInput,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          }),
          this.isClearButtonLocal ?
            h("div", {
              class: "a_form_control__actions",
            }, [
              h(AFormElementBtnClear, {
                alwaysTranslate: this.alwaysTranslate,
                disabled: this.disabled,
                class: this.clearButtonClass,
                onClear: this.clearModel,
              }),
            ]) :
            "",
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
