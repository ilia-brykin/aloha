import {
  h,
  onBeforeUnmount,
  onMounted,
} from "vue";

import AErrorsText from "../AErrorsText/AErrorsText";
import AFormElementBtnClear from "../../AFormElement/AFormElementBtnClear/AFormElementBtnClear";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import ALabel from "../ALabel/ALabel";

import AutosizeAPI from "./compositionAPI/AutosizeAPI";
import ModelAPI from "./compositionAPI/ModelAPI";
import ResizeClass from "./compositionAPI/ResizeClass";
import RowsAPI from "./compositionAPI/RowsAPI";
import UiAPI from "../compositionApi/UiAPI";
import UiClearButtonAPI from "../compositionApi/UiClearButtonAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ATextarea",
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
    clearButtonClass: {
      type: [String, Object],
      required: false,
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
    },
  },
  emits: [
    "update:modelValue",
    "focus",
    "blur",
  ],
  setup(props, context) {
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
      errorsId,
      helpTextId,
      htmlIdLocal,
      isClearButtonLocal,
      isErrors,
      isModel,
      onBlur,
      onFocus,
      onInput,
      resizeClass,
      rowsLocal,
      textareaRef,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    return h("div", {
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
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          alwaysTranslate: this.alwaysTranslate,
          extra: this.extra,
          isError: this.isErrors,
          isLabelFloat: this.isLabelFloat,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          required: this.required,
        }),
        h("div", {
          class: "a_form_element a_form_element_textarea",
        }, [
          h("textarea", {
            ref: "textareaRef",
            id: this.htmlIdLocal,
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
            disabled: this.disabled,
            ariaRequired: this.required,
            ariaInvalid: this.isErrors,
            "aria-describedby": this.ariaDescribedbyLocal,
            maxlength: this.maxlength,
            ...this.inputAttributes,
            onInput: this.onInput,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          }),
          this.isClearButtonLocal ?
            h("div", {
              class: "a_form_control__actions"
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
