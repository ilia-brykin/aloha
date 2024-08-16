import {
  h,
  withDirectives,
} from "vue";

import AElement from "../../AElement/AElement";
import AErrorsText from "../AErrorsText/AErrorsText";
import AFormHelpText from "../AFormHelpText/AFormHelpText";
import ALabel from "../ALabel/ALabel";
import ATranslation from "../../ATranslation/ATranslation";

import ASafeHtml from "../../directives/ASafeHtml";

import HeightAPI from "./compositionAPI/HeightAPI";
import JsonAPI from "./compositionAPI/JsonAPI";
import UiAPI from "../compositionApi/UiAPI";
import UIExcludeRenderAttributesAPI from "../compositionApi/UIExcludeRenderAttributesAPI";
import UiStyleHideAPI from "../compositionApi/UiStyleHideAPI";

import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AJson",
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
    classColumn: {
      type: String,
      required: false,
      default: undefined,
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
    errorsAll: {
      type: Object,
      required: false,
      default: () => ({}),
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
      required: false,
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
      required: false,
      default: undefined,
    },
    labelScreenReader: {
      type: String,
      required: false,
      default: undefined,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelUndefined: {
      required: false,
      default: undefined,
    },
    modelValue: {
      type: [String, Number, Object, Array, Boolean],
      required: false,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
    },
  },
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
      styleHeight,
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

    initInitialValue();
    JSONtoString();

    return {
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      changeModel,
      clearModel,
      componentStyleHide,
      errorsId,
      formatJson,
      helpTextId,
      htmlIdLocal,
      onInput,
      initialValue,
      initInitialValue,
      isErrors,
      isModel,
      jsonString,
      jsonStringInput,
      JSONtoString,
      onBlur,
      onFocus,
      parseError,
      resetModel,
      styleHeight,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }

    return h("div", {
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_not_empty: this.isModel,
        }],
      }, [
        this.label && h(ALabel, {
          id: this.htmlIdLocal,
          alwaysTranslate: this.alwaysTranslate,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          required: this.required,
          isLabelFloat: false,
          isError: this.isErrors,
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
              h(ATranslation, {
                tag: "span",
                text: "_A_JSON_INPUT_",
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
                  iconLeft: "Braces",
                  textScreenReader: "_A_JSON_FORMAT_INPUT_",
                  title: "_A_JSON_FORMAT_INPUT_",
                  type: "button",
                  onClick: this.formatJson,
                }),
                h(AElement, {
                  class: "a_btn a_btn_transparent_warning",
                  iconLeft: "ArrowRepeat",
                  textScreenReader: "_A_JSON_RESET_INPUT_",
                  title: "_A_JSON_RESET_INPUT_",
                  type: "button",
                  onClick: this.JSONtoString,
                }),
                h(AElement, {
                  class: "a_btn a_btn_transparent_danger",
                  iconLeft: "Trash",
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
                disabled: this.disabled,
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
              style: this.styleHeight,
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
