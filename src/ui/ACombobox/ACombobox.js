import {
  computed,
  h,
  ref,
} from "vue";
import {
  AErrorsText,
  AFormElementBtnClear,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  ALabel,
  ASpinner,
  UiAPI,
  UiClearButtonAPI,
  UiDisabledAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import ComboboxAPI, {
  TEXTS_SUGGESTIONS_DEFAULT,
} from "./compositionAPI/ComboboxAPI";

import {
  getPropDefault,
} from "../../plugins/AComponentsPlugin";
import {
  renderListboxPopup,
  renderListboxStatus,
} from "./utils/render";
import {
  uniqueId,
} from "lodash-es";

// the default can be set for all fields: app.use(AComponentsPlugin, { ACombobox: { props: { searchTimeout: 500 } } })
const plugin = (type, name, defaultValue) => ({
  type,
  required: false,
  default: () => getPropDefault("ACombobox", name, defaultValue),
});

// the texts of the screen reader, every key falls back to its default
export const TEXTS_DEFAULT = TEXTS_SUGGESTIONS_DEFAULT;

export {
  getHighlightParts,
} from "./utils/text";

export default {
  name: "ACombobox",
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
    data: {
      type: Array,
      required: false,
      default: () => [],
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
    // own filter of the local data: ({ item, label, search }) => boolean
    filterCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    filterMode: {
      type: String,
      required: false,
      default: () => getPropDefault("ACombobox", "filterMode", "contains"),
      validator: value => ["contains", "startsWith"].indexOf(value) !== -1,
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
      default: () => uniqueId("a_combobox_"),
    },
    // "München" is found with "munchen"
    ignoreDiacritics: plugin(Boolean, "ignoreDiacritics", true),
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
    inBody: plugin(Boolean, "inBody", true),
    // the first suggestion completes the text, the added part is selected (aria-autocomplete="both")
    inlineAutocomplete: plugin(Boolean, "inlineAutocomplete", false),
    inputClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    isBottomSheetOnMobile: plugin(Boolean, "isBottomSheetOnMobile", true),
    isClearButton: plugin(Boolean, "isClearButton", true),
    isDataSimpleArray: {
      type: Boolean,
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
    keyDisabled: {
      type: String,
      required: false,
      default: undefined,
    },
    keyGroup: {
      type: String,
      required: false,
      default: undefined,
    },
    keyId: {
      type: String,
      required: false,
      default: "id",
    },
    keyLabel: {
      type: String,
      required: false,
      default: "label",
    },
    keyLabelCallback: {
      type: Function,
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
    maxItems: plugin(Number, "maxItems", 10),
    minLength: plugin(Number, "minLength", 1),
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
    openOnFocus: plugin(Boolean, "openOnFocus", false),
    placeholder: {
      type: String,
      required: false,
      default: undefined,
    },
    popperContainerId: {
      type: String,
      required: false,
      default: "a_tooltip_container",
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
    searchApiKey: plugin(String, "searchApiKey", "search"),
    searchTimeout: plugin(Number, "searchTimeout", 300),
    texts: plugin(Object, "texts", {}),
    translateData: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "combobox",
    },
    url: {
      type: String,
      required: false,
      default: undefined,
    },
    urlParams: {
      type: Object,
      required: false,
      default: undefined,
    },
    urlTemplateData: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    // undefined: the token --a_combobox_z_index (above modals)
    zIndex: plugin([Number, String], "zIndex", undefined),
  },
  emits: [
    "select",
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
    } = UiAPI(props, context);

    const {
      isClearButtonLocal,
    } = UiClearButtonAPI(props, {
      isModel,
    });

    const inputRef = ref(undefined);
    const textsLocal = computed(() => ({ ...TEXTS_DEFAULT, ...props.texts }));

    const combobox = ComboboxAPI(props, context, {
      changeModel,
      htmlIdLocal,
      inputRef,
      textsLocal,
    });

    const clear = () => {
      clearModel();
      combobox.close();
    };

    return {
      ...combobox,
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      clear,
      componentStyleHide,
      disabledAttribut,
      errorsId,
      helpTextId,
      htmlIdLocal,
      inputRef,
      isClearButtonLocal,
      isErrors,
      labelDescriptionId,
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
        modelValue: this.modelValue,
        readonlyDefault: this.readonlyDefault,
        required: this.required,
        style: this.componentStyleHide,
      });
    }

    const LISTBOX_ID = `${ this.htmlIdLocal }_listbox`;
    const HAS_LABEL = !!(this.label || this.labelScreenReader);

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: ["a_form_element__parent", {
          a_form_element__parent_not_empty: !!this.modelValue,
        }],
      }, [
        HAS_LABEL && h(ALabel, {
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
          class: "a_form_element a_combobox",
        }, [
          h("input", {
            ref: "inputRef",
            id: this.htmlIdLocal,
            role: "combobox",
            type: "text",
            class: [
              "a_form_control a_combobox__input",
              {
                a_form_control_invalid: this.isErrors,
                a_combobox__input_clear: this.isClearButtonLocal,
              },
              this.inputClass,
            ],
            value: this.inputValue,
            placeholder: this.placeholder,
            disabled: this.disabledAttribut,
            autocomplete: "off",
            "aria-activedescendant": this.activeId,
            "aria-autocomplete": this.inlineAutocomplete ? "both" : "list",
            "aria-controls": LISTBOX_ID,
            "aria-describedby": this.ariaDescribedbyLocal,
            "aria-expanded": this.isListVisible ? "true" : "false",
            "aria-invalid": this.isErrors ? "true" : undefined,
            "aria-required": this.required ? "true" : undefined,
            ...this.inputAttributes,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            onInput: this.onInput,
            onKeydown: this.onKeydown,
          }),
          (this.loading || this.isClearButtonLocal) && h("div", {
            class: "a_form_control__actions a_combobox__actions",
          }, [
            this.loading && h(ASpinner, {
              class: "a_spinner_small",
              "aria-hidden": "true",
            }),
            this.isClearButtonLocal && h(AFormElementBtnClear, {
              alwaysTranslate: this.alwaysTranslate,
              disabled: this.disabled,
              onClear: this.clear,
            }),
          ]),
          renderListboxPopup(this, { listboxId: LISTBOX_ID, hasLabel: HAS_LABEL }),
          renderListboxStatus(this),
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
