import {
  h,
} from "vue";
import {
  AErrorsText,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  AIcon,
  ALabel,
  ATranslation,
  UiAPI,
  UiDisabledAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import TagsAPI from "./compositionAPI/TagsAPI";
import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

import Close from "../../AIcon/Icons/Close";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "AInputTags",
  inheritAttrs: false,
  props: {
    allowDuplicates: {
      type: Boolean,
      required: false,
    },
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
      default: () => uniqueId("a_input_tags_"),
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
    maxTags: {
      type: Number,
      required: false,
      default: undefined,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    modelUndefined: {
      type: [Array, Object, String],
      required: false,
      default: () => [],
    },
    modelValue: {
      type: Array,
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
    // keys that add the text as a tag; one-character separators also split pasted text
    separators: {
      type: Array,
      required: false,
      default: () => ["Enter", ","],
    },
    type: {
      type: String,
      required: false,
      default: "tags",
    },
    validator: {
      type: Function,
      required: false,
      default: undefined,
    },
  },
  emits: [
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
      labelDescriptionId,
    } = UiAPI(props, context);

    const {
      announcement,
      focus,
      inputRef,
      inputValue,
      isMaxReached,
      onBlur,
      onInput,
      onKeydown,
      onPaste,
      removeTag,
      tags,
    } = TagsAPI(props, {
      changeModel,
    });

    context.expose({
      focus,
    });

    return {
      announcement,
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      componentStyleHide,
      disabledAttribut,
      errorsId,
      helpTextId,
      htmlIdLocal,
      inputRef,
      inputValue,
      isErrors,
      isMaxReached,
      labelDescriptionId,
      onBlur,
      onInput,
      onKeydown,
      onPaste,
      removeTag,
      tags,
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
        modelValue: this.tags.join(", "),
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        style: this.componentStyleHide,
      });
    }

    const HINT_ID = `${ this.htmlIdLocal }_hint`;

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_not_empty: this.tags.length > 0,
        }],
      }, [
        (this.label || this.labelScreenReader) && h(ALabel, {
          id: this.htmlIdLocal,
          alwaysTranslate: this.alwaysTranslate,
          extra: this.extra,
          isError: this.isErrors,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          required: this.required,
        }),
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
            class: [
              "a_form_control a_input_tags",
              {
                a_form_control_invalid: this.isErrors,
                disabled: this.disabled,
              },
            ],
          }, [
            this.tags.length > 0 && h("ul", {
              class: "a_input_tags__list",
              role: "list",
            }, this.tags.map((tag, index) => h("li", {
              key: `${ tag }_${ index }`,
              class: "a_input_tags__tag",
            }, [
              h("span", {
                class: "a_input_tags__text",
              }, tag),
              h("button", {
                type: "button",
                class: "a_input_tags__remove",
                disabled: this.disabledAttribut,
                "aria-label": getTranslatedText({
                  placeholder: "_A_INPUT_TAGS_REMOVE_",
                  extra: { tag },
                  alwaysTranslate: this.alwaysTranslate,
                }),
                title: getTranslatedText({
                  placeholder: "_A_INPUT_TAGS_REMOVE_",
                  extra: { tag },
                  alwaysTranslate: this.alwaysTranslate,
                }),
                onClick: () => this.removeTag(index),
              }, [
                h(AIcon, {
                  icon: Close,
                  class: "a_input_tags__remove__icon",
                }),
              ]),
            ]))),
            h("input", {
              ref: "inputRef",
              id: this.htmlIdLocal,
              type: "text",
              class: ["a_input_tags__input", this.inputClass],
              value: this.inputValue,
              placeholder: this.isMaxReached ? undefined : this.placeholder,
              disabled: this.disabledAttribut,
              autocomplete: "off",
              "aria-required": this.required ? "true" : undefined,
              "aria-invalid": this.isErrors ? "true" : undefined,
              "aria-describedby": [HINT_ID, this.ariaDescribedbyLocal].filter(Boolean).join(" "),
              ...this.inputAttributes,
              onInput: this.onInput,
              onKeydown: this.onKeydown,
              onPaste: this.onPaste,
              onBlur: this.onBlur,
            }),
          ]),
          h(ATranslation, {
            id: HINT_ID,
            class: "a_sr_only",
            alwaysTranslate: this.alwaysTranslate,
            tag: "span",
            text: "_A_INPUT_TAGS_HINT_",
          }),
          // the live region is always in the page, only its text changes
          h("span", {
            class: "a_sr_only",
            role: "status",
          }, this.announcement),
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
