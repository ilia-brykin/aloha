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

import ArrowRepeat from "aloha-svg/dist/js/bootstrap/ArrowRepeat";
import Braces from "aloha-svg/dist/js/bootstrap/Braces";
import Trash from "aloha-svg/dist/js/bootstrap/Trash";
import {
  uniqueId,
} from "lodash-es";

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
        }),
      ]),
    ]);
  },
};
