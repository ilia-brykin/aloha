import {
  h,
  withDirectives,
} from "vue";
import {
  AElement,
  AErrorsText,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  ALabel,
  ASafeHtml,
  ATranslation,
  UiAPI,
  UiDisabledAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import HeightAPI from "./compositionAPI/HeightAPI";
import JsonAPI from "./compositionAPI/JsonAPI";
import ReadonlyAPI from "./compositionAPI/ReadonlyAPI";

import {
  uniqueId,
} from "lodash-es";

const ArrowRepeat = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
</svg>`;
const Braces = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-braces" viewBox="0 0 16 16">
  <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/>
</svg>`;
const Trash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;

export default {
  name: "AJson",
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
    heightCss: {
      type: String,
      required: false,
      default: "400px;",
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
      default: () => uniqueId("a_json_"),
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
      type: [String, Number, Object, Array, Boolean],
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
      default: undefined,
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
      styleHeight,
      styleMaxHeight,
    } = HeightAPI(props);

    const {
      clearModel,
      formatJson,
      initialValue,
      initInitialValue,
      jsonString,
      jsonStringInput,
      JSONtoString,
      onInput,
      parseError,
      resetModel,
    } = JsonAPI(props, {
      changeModel,
    });

    const {
      modelValueReadonly,
    } = ReadonlyAPI(props);

    initInitialValue();
    JSONtoString();

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      changeModel,
      clearModel,
      componentStyleHide,
      disabledAttribut,
      errorsId,
      formatJson,
      helpTextId,
      htmlIdLocal,
      initialValue,
      initInitialValue,
      isErrors,
      isModel,
      jsonString,
      jsonStringInput,
      JSONtoString,
      labelDescriptionId,
      modelValueReadonly,
      onBlur,
      onFocus,
      onInput,
      parseError,
      resetModel,
      styleHeight,
      styleMaxHeight,
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
        type: "json",
        valueClass: "a_code_content",
        valueTag: "pre",
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
            extra: this.extra,
            isError: this.isErrors,
            isLabelFloat: false,
            label: this.label,
            labelClass: this.labelClass,
            labelScreenReader: this.labelScreenReader,
            required: this.required,
          }) :
          "",
        h(AFormLabelDescription, {
          id: this.labelDescriptionId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.labelDescription,
          extra: this.extra,
        }),
        h("div", {
          class: "a_columns a_columns_count_12",
        }, [
          h("div", {
            class: "a_column a_column_6 a_column_12_touch",
          }, [
            h("div", {
              class: "a_d_flex a_justify_content_between",
            }, [
              h(ALabel, {
                id: this.htmlIdLocal,
                alwaysTranslate: this.alwaysTranslate,
                extra: this.extra,
                idSuffix: "_input",
                isError: this.isErrors,
                isLabelFloat: false,
                label: "_A_JSON_INPUT_",
              }),
              h("div", {
                class: "a_btn_group",
                role: "group",
              }, [
                h(AElement, {
                  class: [
                    "a_btn",
                    {
                      a_btn_transparent_info: !this.parseError,
                      a_btn_transparent_dark: this.parseError,
                    },
                  ],
                  disabled: !!this.parseError,
                  iconLeft: Braces,
                  textScreenReader: "_A_JSON_FORMAT_INPUT_",
                  title: "_A_JSON_FORMAT_INPUT_",
                  type: "button",
                  onClick: this.formatJson,
                }),
                h(AElement, {
                  class: "a_btn a_btn_transparent_warning",
                  iconLeft: ArrowRepeat,
                  textScreenReader: "_A_JSON_RESET_INPUT_",
                  title: "_A_JSON_RESET_INPUT_",
                  type: "button",
                  onClick: this.JSONtoString,
                }),
                h(AElement, {
                  class: "a_btn a_btn_transparent_danger",
                  iconLeft: Trash,
                  textScreenReader: "_A_JSON_DISCARD_ALL_CHANGES_",
                  title: "_A_JSON_DISCARD_ALL_CHANGES_",
                  type: "button",
                  onClick: this.resetModel,
                }),
              ]),
            ]),
            h("div", {
              class: "a_form_element a_form_element_textarea",
            }, [
              h("textarea", {
                ref: "textareaRef",
                id: this.htmlIdLocal,
                style: this.styleHeight,
                value: this.jsonStringInput,
                "aria-describedby": this.ariaDescribedbyLocal,
                ariaInvalid: this.isErrors,
                ariaRequired: this.required,
                autocapitalize: "off",
                autocomplete: "off",
                autocorrect: "off",
                class: [
                  "a_form_control a_json__textarea",
                  this.inputClass,
                  {
                    a_form_control_invalid: this.isErrors,
                  },
                ],
                disabled: this.disabledAttribut,
                spellcheck: "false",
                ...this.inputAttributes,
                onInput: this.onInput,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
              }),
            ]),
            this.parseError ?
              h(ATranslation, {
                alwaysTranslate: this.alwaysTranslate,
                class: "a_form_element__invalid_text",
                html: "_A_JSON_ERROR_HTML_{{error}}_",
                extra: {
                  error: this.parseError,
                },
              }) :
              "",
          ]),
          h("div", {
            class: "a_column a_column_6 a_column_12_touch",
          }, [
            h(ATranslation, {
              tag: "div",
              text: "_A_JSON_CURRENT_VALUE_",
            }),
            withDirectives(h("div", {
              class: "a_json__code",
              style: this.styleMaxHeight,
            }), [
              [ASafeHtml, this.jsonString],
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
          errorsClass: this.errorsClass,
        }),
      ]),
    ]);
  },
};
