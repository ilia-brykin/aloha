import {
  h,
} from "vue";
import {
  AErrorsText,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  ALabel,
  UiAPI,
  UiDisabledAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import CharsAPI from "./compositionAPI/CharsAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import InputAPI from "./compositionAPI/InputAPI";
import KeyboardAPI from "./compositionAPI/KeyboardAPI";
import ReadonlyAPI from "./compositionAPI/ReadonlyAPI";
import SeparatorAPI from "./compositionAPI/SeparatorAPI";
import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

import {
  isInteger,
  uniqueId,
} from "lodash-es";

export default {
  name: "AInputOtp",
  inheritAttrs: false,
  props: {
    alwaysTranslate: {
      type: Boolean,
      required: false,
    },
    autocomplete: {
      type: String,
      required: false,
      default: "one-time-code",
    },
    change: {
      type: Function,
      required: false,
      default: () => {},
    },
    charType: {
      type: String,
      required: false,
      default: "numeric",
      validator: value => ["numeric", "alphanumeric", "any"].indexOf(value) !== -1,
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
    errorsClass: {
      type: [String, Object],
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
      default: () => uniqueId("a_input_otp_"),
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
    inputmode: {
      type: String,
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
    isUppercase: {
      type: Boolean,
      required: false,
      default: false,
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
    length: {
      type: Number,
      required: false,
      default: 6,
      validator: value => isInteger(value) && value > 0,
    },
    mask: {
      type: Boolean,
      required: false,
      default: false,
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
      default: undefined,
    },
    placeholder: {
      type: String,
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
    readonlyMaskSymbol: {
      type: String,
      required: false,
      default: "*",
    },
    readonlyValueParentClass: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    separator: {
      type: [String, Function],
      required: false,
      default: undefined,
    },
    size: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["small", "large"].indexOf(value) !== -1,
    },
    type: {
      type: String,
      required: false,
      default: "otp",
    },
    validator: {
      type: Function,
      required: false,
      default: undefined,
    },
    variant: {
      type: String,
      required: false,
      default: "outlined",
      validator: value => ["outlined", "filled", "underlined"].indexOf(value) !== -1,
    },
  },
  emits: [
    "blur",
    "finish",
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
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      isModel,
      labelDescriptionId,
    } = UiAPI(props, context);

    const {
      charsLocal,
      clearChar,
      indexes,
      indexFirstEmpty,
      isComplete,
      setText,
    } = CharsAPI(props, context, {
      changeModel,
    });

    const {
      blur,
      clickLabel,
      focus,
      focusInput,
      onBlurInput,
      onFocusInput,
      rootRef,
      setInputRef,
    } = FocusAPI(props, context, {
      indexFirstEmpty,
    });

    const {
      onInput,
      onPaste,
    } = InputAPI(props, {
      charsLocal,
      clearChar,
      focusInput,
      setText,
    });

    const {
      onKeydown,
    } = KeyboardAPI(props, {
      charsLocal,
      clearChar,
      focusInput,
    });

    const {
      classLocal,
      getAutocomplete,
      inputmodeLocal,
      typeLocal,
    } = AttributesAPI(props);

    const {
      getSeparator,
    } = SeparatorAPI(props, context);

    const {
      modelValueReadonly,
    } = ReadonlyAPI(props);

    context.expose({
      blur,
      focus,
    });

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      charsLocal,
      classLocal,
      clickLabel,
      componentStyleHide,
      disabledAttribut,
      errorsId,
      getAutocomplete,
      getSeparator,
      helpTextId,
      htmlIdLocal,
      indexes,
      inputmodeLocal,
      isComplete,
      isErrors,
      isModel,
      labelDescriptionId,
      modelValueReadonly,
      onBlurInput,
      onFocusInput,
      onInput,
      onKeydown,
      onPaste,
      rootRef,
      setInputRef,
      typeLocal,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    if (this.readonly) {
      return h(AFormReadonly, {
        ...this.$attrs,
        valueParentClass: this.readonlyValueParentClass,
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
      });
    }

    const HAS_LABEL = !!(this.label || this.labelScreenReader);
    const CELLS = [];
    this.indexes.forEach(index => {
      CELLS.push(h("input", {
        ref: element => this.setInputRef({ element, index }),
        key: `${ this.htmlIdLocal }_${ index }`,
        id: index === 0 ? this.htmlIdLocal : `${ this.htmlIdLocal }_${ index }`,
        value: this.charsLocal[index] || "",
        type: this.typeLocal,
        inputmode: this.inputmodeLocal,
        autocomplete: this.getAutocomplete({ index }),
        autocapitalize: "off",
        spellcheck: false,
        placeholder: this.placeholder,
        class: [
          "a_form_control a_input_otp__cell",
          this.inputClass,
          {
            a_form_control_invalid: this.isErrors,
            a_input_otp__cell_filled: !!this.charsLocal[index],
          },
        ],
        disabled: this.disabledAttribut,
        "aria-label": getTranslatedText({
          placeholder: "_A_INPUT_OTP_CHAR_{{index}}_{{length}}_",
          alwaysTranslate: this.alwaysTranslate,
          extra: {
            index: index + 1,
            length: this.length,
          },
        }),
        "aria-required": this.required ? "true" : undefined,
        "aria-invalid": this.isErrors ? "true" : undefined,
        "aria-describedby": this.ariaDescribedbyLocal,
        ...this.inputAttributes,
        onInput: $event => this.onInput({ $event, index }),
        onKeydown: $event => this.onKeydown({ $event, index }),
        onPaste: $event => this.onPaste({ $event, index }),
        onFocus: this.onFocusInput,
        onBlur: this.onBlurInput,
      }));
      const SEPARATOR = this.getSeparator({ index });
      if (SEPARATOR) {
        CELLS.push(h("span", {
          key: `${ this.htmlIdLocal }_separator_${ index }`,
          class: "a_input_otp__separator",
          "aria-hidden": "true",
        }, SEPARATOR));
      }
    });

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_not_empty: this.isModel,
        }],
      }, [
        HAS_LABEL ?
          h(ALabel, {
            id: this.htmlIdLocal,
            alwaysTranslate: this.alwaysTranslate,
            clickLabel: this.clickLabel,
            extra: this.extra,
            hideFor: true,
            isError: this.isErrors,
            label: this.label,
            labelClass: this.labelClass,
            labelScreenReader: this.labelScreenReader,
            required: this.required,
            tag: "div",
          }) :
          "",
        h(AFormLabelDescription, {
          id: this.labelDescriptionId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.labelDescription,
          extra: this.extra,
          isLabelFloat: false,
        }),
        h("div", {
          class: "a_form_element",
        }, [
          h("div", {
            ref: "rootRef",
            class: [
              this.classLocal,
              {
                a_input_otp_disabled: this.disabled,
                a_input_otp_complete: this.isComplete,
              },
            ],
            role: "group",
            "aria-labelledby": HAS_LABEL ? `${ this.htmlIdLocal }_label` : undefined,
            "aria-describedby": this.ariaDescribedbyLocal,
          }, CELLS),
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
          errorsClass: this.errorsClass,
        }),
      ]),
    ]);
  },
};
