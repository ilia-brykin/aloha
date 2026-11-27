import {
  computed,
  h,
  onMounted,
  ref,
  Teleport,
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

import ListboxAPI from "./compositionAPI/ListboxAPI";
import PopperContainerAPI from "../../ATooltip/compositionAPI/PopperContainerAPI";
import PopupAPI from "./compositionAPI/PopupAPI";
import SuggestionsAPI from "./compositionAPI/SuggestionsAPI";
import UtilsAPI, {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

import {
  AKeyId,
  AKeyLabel,
} from "../../const/AKeys";
import {
  getHighlightParts,
} from "./utils/text";
import {
  getPropDefault,
} from "../../plugins/AComponentsPlugin";
import {
  isBrowser,
} from "../../utils/isBrowser";
import {
  get,
  isNil,
  toString,
  uniqueId,
} from "lodash-es";

// the default can be set for all fields: app.use(AComponentsPlugin, { ACombobox: { props: { searchTimeout: 500 } } })
const plugin = (type, name, defaultValue) => ({
  type,
  required: false,
  default: () => getPropDefault("ACombobox", name, defaultValue),
});

// the texts of the screen reader, every key falls back to its default
export const TEXTS_DEFAULT = {
  loading: "_A_COMBOBOX_LOADING_",
  noResults: "_A_COMBOBOX_NO_RESULTS_",
  results: "_A_COMBOBOX_RESULTS_{{count}}_",
};

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

    const {
      getOriginalItem,
      loading,
      search,
      searchText,
      stopSearch,
      suggestions,
    } = SuggestionsAPI(props);

    const inputRef = ref(undefined);

    const {
      activeId,
      activeIndex,
      close,
      getOptionId,
      inputValue,
      isItemDisabled,
      isListVisible,
      isOpen,
      onBlur,
      onFocus,
      onInput,
      onKeydown,
      onOptionMousedown,
      selectOption,
    } = ListboxAPI(props, context, {
      changeModel,
      getInputElement: () => inputRef.value,
      getOriginalItem,
      htmlIdLocal,
      loading,
      search,
      stopSearch,
      suggestions,
    });

    const {
      replaceText,
    } = UtilsAPI();

    const textsLocal = computed(() => ({ ...TEXTS_DEFAULT, ...props.texts }));

    // read by the screen reader after every change of the list
    const statusText = computed(() => {
      if (!isOpen.value) {
        return "";
      }
      let key = "results";
      if (loading.value) {
        key = "loading";
      } else if (!suggestions.value.length) {
        key = "noResults";
      }
      const EXTRA = { count: suggestions.value.length };
      const TEXT = getTranslatedText({
        placeholder: textsLocal.value[key] || TEXTS_DEFAULT[key],
        extra: EXTRA,
        alwaysTranslate: props.alwaysTranslate,
      });
      // an own text without a translation key: {{ count }} too
      return replaceText({ text: TEXT, object: EXTRA });
    });

    // the options with their index in the list, in groups (key-group): options without a group first, no header
    const optionGroups = computed(() => {
      const GROUPS = [];
      suggestions.value.forEach((item, index) => {
        const GROUP = props.keyGroup ? get(item, props.keyGroup) : undefined;
        let last = GROUPS[GROUPS.length - 1];
        if (!last || last.group !== GROUP) {
          last = { group: GROUP, options: [] };
          GROUPS.push(last);
        }
        last.options.push({ item, index });
      });
      return GROUPS;
    });

    const clear = () => {
      clearModel();
      close();
    };

    const popupRef = ref(undefined);
    const isMounted = ref(false);

    const isEmptyVisible = computed(() => {
      return isOpen.value && !loading.value && !suggestions.value.length;
    });
    const isPopupVisible = computed(() => isListVisible.value || isEmptyVisible.value);

    const {
      addPopperContainerInBody,
      popperContainerIdSelector,
    } = PopperContainerAPI(props);

    const {
      isSheet,
      isTeleported,
      sheetBottom,
    } = PopupAPI(props, {
      inputRef,
      isMounted,
      isPopupVisible,
      popupRef,
    });

    /*
     * before the first render: Teleport finds its target only at the mount
     * a_popup_container: not inert behind an open AModal
     */
    if (isBrowser()) {
      addPopperContainerInBody({ className: "a_popup_container" });
    }
    onMounted(() => {
      isMounted.value = true;
    });

    // the prop sets the token, the sheet gets its bottom above the virtual keyboard
    const popupStyle = computed(() => {
      return {
        bottom: isSheet.value ? `${ sheetBottom.value }px` : undefined,
        "--a_combobox_z_index": isNil(props.zIndex) ? undefined : props.zIndex,
      };
    });

    return {
      activeId,
      activeIndex,
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      clear,
      componentStyleHide,
      disabledAttribut,
      errorsId,
      getOptionId,
      helpTextId,
      htmlIdLocal,
      getOriginalItem,
      inputRef,
      inputValue,
      isClearButtonLocal,
      isItemDisabled,
      isEmptyVisible,
      isErrors,
      isListVisible,
      isOpen,
      isPopupVisible,
      isSheet,
      isTeleported,
      labelDescriptionId,
      loading,
      onBlur,
      onFocus,
      onInput,
      onKeydown,
      onOptionMousedown,
      optionGroups,
      popperContainerIdSelector,
      popupRef,
      popupStyle,
      searchText,
      selectOption,
      sheetBottom,
      statusText,
      suggestions,
    };
  },
  methods: {
    renderOption({ item, index }) {
      const IS_ACTIVE = index === this.activeIndex;
      const IS_DISABLED = this.isItemDisabled(item);
      const PARTS = getHighlightParts(item[AKeyLabel], this.searchText, {
        filterMode: this.filterMode,
        ignoreDiacritics: this.ignoreDiacritics,
      });
      const HIGHLIGHT = PARTS.map(part => {
        return part.isMatch ? h("mark", { class: "a_search_highlight" }, part.text) : part.text;
      });

      return h("li", {
        key: `${ index }_${ toString(item[AKeyId]) }`,
        id: this.getOptionId(index),
        role: "option",
        "aria-disabled": IS_DISABLED ? "true" : undefined,
        "aria-selected": IS_ACTIVE ? "true" : "false",
        class: ["a_combobox__option", {
          a_combobox__option_active: IS_ACTIVE,
          a_combobox__option_disabled: IS_DISABLED,
        }],
        onClick: () => this.selectOption(index),
      }, this.$slots.option ?
        this.$slots.option({
          highlight: HIGHLIGHT,
          index,
          isActive: IS_ACTIVE,
          isDisabled: IS_DISABLED,
          item: this.getOriginalItem(item),
          label: item[AKeyLabel],
          parts: PARTS,
        }) :
        HIGHLIGHT);
    },

    // WAI-ARIA grouped listbox: <li role="none"><ul role="group" aria-labelledby> header + options
    renderOptions() {
      return this.optionGroups.map((group, groupIndex) => {
        if (isNil(group.group)) {
          return group.options.map(option => this.renderOption(option));
        }
        const HEADER_ID = `${ this.htmlIdLocal }_group_${ groupIndex }`;
        const LABEL = toString(group.group);
        return h("li", {
          key: `group_${ groupIndex }_${ LABEL }`,
          role: "none",
        }, [
          h("ul", {
            class: "a_combobox__group",
            role: "group",
            "aria-labelledby": HEADER_ID,
          }, [
            h("li", {
              id: HEADER_ID,
              class: "a_combobox__group__label",
              role: "presentation",
            }, this.translateData ?
              getTranslatedText({ placeholder: LABEL, alwaysTranslate: this.alwaysTranslate }) :
              LABEL),
            ...group.options.map(option => this.renderOption(option)),
          ]),
        ]);
      });
    },
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
          // in the page all the time (aria-controls of the listbox), hidden while closed
          h(Teleport, {
            to: this.popperContainerIdSelector,
            disabled: !this.isTeleported,
          }, [
            h("div", {
              ref: "popupRef",
              class: ["a_combobox__popup", {
                a_combobox__popup_in_body: this.isTeleported && !this.isSheet,
                a_combobox__popup_sheet: this.isSheet,
              }],
              "data-owner": this.htmlIdLocal,
              hidden: !this.isPopupVisible,
              style: this.popupStyle,
              // a click in the list keeps the focus in the input
              onMousedown: this.onOptionMousedown,
            }, [
              h("ul", {
                id: LISTBOX_ID,
                role: "listbox",
                "aria-labelledby": HAS_LABEL ? `${ this.htmlIdLocal }_label` : undefined,
                class: "a_combobox__listbox",
                hidden: !this.isListVisible,
              }, this.isListVisible ? this.renderOptions() : []),
              this.isEmptyVisible && h("div", {
                "aria-hidden": "true",
                class: "a_combobox__empty",
              }, this.statusText),
            ]),
          ]),
          // the live region is always in the page, only its text changes
          h("span", {
            class: "a_sr_only a_combobox__status",
            role: "status",
          }, this.statusText),
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
