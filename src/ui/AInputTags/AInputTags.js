import {
  computed,
  h,
  ref,
  shallowRef,
} from "vue";
import {
  AErrorsText,
  AFormHelpText,
  AFormLabelDescription,
  AFormReadonly,
  AIcon,
  ALabel,
  ASpinner,
  UiAPI,
  UiDisabledAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import ComboboxAPI, {
  TEXTS_SUGGESTIONS_DEFAULT,
} from "../ACombobox/compositionAPI/ComboboxAPI";
import TagsAPI from "./compositionAPI/TagsAPI";

import Close from "../../AIcon/Icons/Close";
import {
  AKeyLabel,
} from "../../const/AKeys";
import {
  foldText,
} from "../ACombobox/utils/text";
import {
  getPropDefault,
} from "../../plugins/AComponentsPlugin";
import {
  renderListboxPopup,
  renderListboxStatus,
} from "../ACombobox/utils/render";
import {
  uniqueId,
} from "lodash-es";

// the texts of the field, every key falls back to its default; the defaults can be set with AComponentsPlugin
export const TEXTS_DEFAULT = {
  addAll: "_A_INPUT_TAGS_ADD_ALL_",
  added: "_A_INPUT_TAGS_ADDED_",
  counter: "_A_INPUT_TAGS_COUNTER_",
  duplicate: "_A_INPUT_TAGS_DUPLICATE_",
  hint: "_A_INPUT_TAGS_HINT_",
  hintAddAll: "_A_INPUT_TAGS_HINT_ADD_ALL_",
  max: "_A_INPUT_TAGS_MAX_",
  onlyFromList: "_A_INPUT_TAGS_ONLY_FROM_LIST_",
  remove: "_A_INPUT_TAGS_REMOVE_",
  removeAll: "_A_INPUT_TAGS_REMOVE_ALL_",
  removed: "_A_INPUT_TAGS_REMOVED_",
  removedAll: "_A_INPUT_TAGS_REMOVED_ALL_",
  showLess: "_A_INPUT_TAGS_SHOW_LESS_",
  showMore: "_A_INPUT_TAGS_SHOW_MORE_",
  ...TEXTS_SUGGESTIONS_DEFAULT,
};

// the default can be set for all fields: app.use(AComponentsPlugin, { AInputTags: { props: { maxVisibleTags: 5 } } })
const plugin = (type, name, defaultValue) => ({
  type,
  required: false,
  default: () => getPropDefault("AInputTags", name, defaultValue),
});

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
    // suggestions: like ACombobox
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
    filterCallback: {
      type: Function,
      required: false,
      default: undefined,
    },
    filterMode: {
      type: String,
      required: false,
      default: () => getPropDefault("AInputTags", "filterMode", "contains"),
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
      default: () => uniqueId("a_input_tags_"),
    },
    idPrefix: {
      type: String,
      required: false,
      default: undefined,
    },
    ignoreDiacritics: plugin(Boolean, "ignoreDiacritics", true),
    inBody: plugin(Boolean, "inBody", true),
    inlineAutocomplete: plugin(Boolean, "inlineAutocomplete", false),
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
    // a button "add all" under the suggestions (and Ctrl+Enter)
    isAddAll: plugin(Boolean, "isAddAll", false),
    isBottomSheetOnMobile: plugin(Boolean, "isBottomSheetOnMobile", true),
    isDataSimpleArray: {
      type: Boolean,
      required: false,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    // only values of the suggestions, no own text
    isOnlyFromList: {
      type: Boolean,
      required: false,
    },
    isRemoveAll: plugin(Boolean, "isRemoveAll", false),
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
    maxTags: {
      type: Number,
      required: false,
      default: undefined,
    },
    // more tags are behind a button "+N"
    maxVisibleTags: plugin(Number, "maxVisibleTags", undefined),
    minLength: plugin(Number, "minLength", 1),
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
    // keys that add the text as a tag; one-character separators also split pasted text
    separators: {
      type: Array,
      required: false,
      default: () => ["Enter", ","],
    },
    texts: plugin(Object, "texts", {}),
    translateData: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "tags",
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
    validator: {
      type: Function,
      required: false,
      default: undefined,
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
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      labelDescriptionId,
    } = UiAPI(props, context);

    const textsLocal = computed(() => ({ ...TEXTS_DEFAULT, ...props.texts }));
    const hasSuggestions = computed(() => !!(props.url || props.data?.length));
    const controlRef = ref(undefined);
    const isExpanded = ref(false);

    // the data of the suggestions: ComboboxAPI needs the tags first, so the computed is set after it
    const dataSource = shallowRef(undefined);
    // is-only-from-list: the text is a label of the data (case and diacritics like the filter)
    const isInData = value => {
      const VALUE = foldText(value, { ignoreDiacritics: props.ignoreDiacritics }).folded;
      return (dataSource.value?.value || []).some(item => {
        return foldText(item[AKeyLabel], { ignoreDiacritics: props.ignoreDiacritics }).folded === VALUE;
      });
    };

    const tagsApi = TagsAPI(props, {
      changeModel,
      isInData,
      textsLocal,
    });
    const {
      addTags,
      inputRef,
      inputValue,
      tags,
    } = tagsApi;

    const combobox = ComboboxAPI(props, context, {
      changeModel,
      htmlIdLocal,
      inputRef,
      // the tags that are chosen are no suggestions
      isExcluded: item => {
        return !props.allowDuplicates && tags.value.some(tag => {
          return String(tag).toLowerCase() === String(item[AKeyLabel]).toLowerCase();
        });
      },
      onSelectOption: ({ label }) => {
        addTags([label]);
        inputValue.value = "";
      },
      referenceRef: controlRef,
      setText: value => {
        inputValue.value = value;
      },
      text: inputValue,
      textsLocal,
    });
    dataSource.value = combobox.dataLocal;

    const addableSuggestions = computed(() => {
      return combobox.suggestions.value.filter(item => !combobox.isItemDisabled(item));
    });

    const addAllFound = () => {
      addTags(addableSuggestions.value.map(item => item[AKeyLabel]));
      inputValue.value = "";
      combobox.close();
    };

    const onInput = $event => {
      tagsApi.onInput($event);
      if (hasSuggestions.value) {
        combobox.onInput($event);
      }
    };

    const onKeydown = $event => {
      if (hasSuggestions.value) {
        if (props.isAddAll && combobox.isOpen.value && $event.key === "Enter" && ($event.ctrlKey || $event.metaKey)) {
          $event.preventDefault();
          addAllFound();
          return;
        }
        combobox.onKeydown($event);
        if ($event.defaultPrevented) {
          return;
        }
      }
      const TEXT_BEFORE = inputValue.value;
      tagsApi.onKeydown($event);
      // a tag of the typed text: the list of the old text is closed
      if (hasSuggestions.value && TEXT_BEFORE && !inputValue.value) {
        combobox.close();
      }
    };

    const onBlur = () => {
      if (hasSuggestions.value) {
        combobox.onBlur();
      }
      tagsApi.onBlur();
    };

    const onFocus = () => {
      if (hasSuggestions.value) {
        combobox.onFocus();
      }
    };

    const visibleTags = computed(() => {
      if (!props.maxVisibleTags || isExpanded.value) {
        return tags.value;
      }
      return tags.value.slice(0, props.maxVisibleTags);
    });
    const hiddenTagsCount = computed(() => tags.value.length - visibleTags.value.length);
    const isMoreButton = computed(() => !!props.maxVisibleTags && tags.value.length > props.maxVisibleTags);

    context.expose({
      focus: tagsApi.focus,
    });

    return {
      ...combobox,
      addableSuggestions,
      addAllFound,
      announcement: tagsApi.announcement,
      ariaDescribedbyLocal,
      attributesToExcludeFromRender,
      componentStyleHide,
      controlRef,
      disabledAttribut,
      errorsId,
      hasSuggestions,
      helpTextId,
      hiddenTagsCount,
      htmlIdLocal,
      inputRef,
      inputValueTags: inputValue,
      isErrors,
      isExpanded,
      isMaxReached: tagsApi.isMaxReached,
      isMoreButton,
      labelDescriptionId,
      listRef: tagsApi.listRef,
      onBlur,
      onFocus,
      onInput,
      onKeydown,
      onPaste: tagsApi.onPaste,
      onTagKeydown: tagsApi.onTagKeydown,
      removeAll: tagsApi.removeAll,
      removeTag: tagsApi.removeTag,
      tags,
      translate: tagsApi.translate,
      visibleTags,
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
    const COUNTER_ID = `${ this.htmlIdLocal }_counter`;
    const LIST_ID = `${ this.htmlIdLocal }_tags`;
    const LISTBOX_ID = `${ this.htmlIdLocal }_listbox`;
    const HAS_LABEL = !!(this.label || this.labelScreenReader);
    const IS_ADD_ALL = this.isAddAll && this.hasSuggestions;
    const COMBOBOX_ATTRIBUTES = this.hasSuggestions ?
      {
        role: "combobox",
        "aria-activedescendant": this.activeId,
        "aria-autocomplete": this.inlineAutocomplete ? "both" : "list",
        "aria-controls": LISTBOX_ID,
        "aria-expanded": this.isListVisible ? "true" : "false",
      } :
      {};

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
          h("div", {
            ref: "controlRef",
            class: [
              "a_form_control a_input_tags",
              {
                a_form_control_invalid: this.isErrors,
                disabled: this.disabled,
              },
            ],
          }, [
            this.visibleTags.length > 0 && h("ul", {
              ref: "listRef",
              id: LIST_ID,
              class: "a_input_tags__list",
              role: "list",
            }, this.visibleTags.map((tag, index) => {
              const REMOVE = this.translate("remove", { tag });
              return h("li", {
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
                  "aria-label": REMOVE,
                  title: REMOVE,
                  onClick: () => this.removeTag(index),
                  onKeydown: $event => this.onTagKeydown($event, index),
                }, [
                  h(AIcon, {
                    icon: Close,
                    class: "a_input_tags__remove__icon",
                  }),
                ]),
              ]);
            })),
            // the hidden tags: "+3" (the name contains the visible text, WCAG 2.5.3)
            this.isMoreButton && h("button", {
              type: "button",
              class: "a_input_tags__more",
              "aria-controls": LIST_ID,
              "aria-expanded": this.isExpanded ? "true" : "false",
              onClick: () => {
                this.isExpanded = !this.isExpanded;
              },
            }, this.isExpanded ?
              this.translate("showLess") :
              [
                `+${ this.hiddenTagsCount }`,
                h("span", { class: "a_sr_only" }, ` ${ this.translate("showMore", { count: this.hiddenTagsCount }) }`),
              ]),
            h("input", {
              ref: "inputRef",
              id: this.htmlIdLocal,
              type: "text",
              class: ["a_input_tags__input", this.inputClass],
              value: this.hasSuggestions ? this.inputValue : this.inputValueTags,
              placeholder: this.isMaxReached ? undefined : this.placeholder,
              disabled: this.disabledAttribut,
              autocomplete: "off",
              "aria-required": this.required ? "true" : undefined,
              "aria-invalid": this.isErrors ? "true" : undefined,
              "aria-describedby": [
                HINT_ID,
                this.maxTags ? COUNTER_ID : undefined,
                this.ariaDescribedbyLocal,
              ].filter(Boolean).join(" "),
              ...COMBOBOX_ATTRIBUTES,
              ...this.inputAttributes,
              onBlur: this.onBlur,
              onFocus: this.onFocus,
              onInput: this.onInput,
              onKeydown: this.onKeydown,
              onPaste: this.onPaste,
            }),
            this.loading && h(ASpinner, {
              class: "a_spinner_small a_input_tags__spinner",
              "aria-hidden": "true",
            }),
            this.maxTags && h("span", {
              "aria-hidden": "true",
              class: "a_input_tags__counter",
            }, `${ this.tags.length } / ${ this.maxTags }`),
          ]),
          this.hasSuggestions && renderListboxPopup(this, {
            listboxId: LISTBOX_ID,
            hasLabel: HAS_LABEL,
            footer: IS_ADD_ALL && this.isListVisible && this.addableSuggestions.length > 0 ?
              h("div", {
                class: "a_input_tags__add_all",
              }, [
                // with the mouse; the keyboard: Ctrl+Enter (the focus stays in the input)
                h("button", {
                  type: "button",
                  class: "a_btn a_btn_link a_btn_small",
                  tabindex: -1,
                  onClick: this.addAllFound,
                }, this.translate("addAll", { count: this.addableSuggestions.length })),
              ]) :
              null,
          }),
          h("span", {
            id: HINT_ID,
            class: "a_sr_only",
          }, [
            this.translate("hint"),
            IS_ADD_ALL ? ` ${ this.translate("hintAddAll") }` : "",
          ]),
          this.maxTags && h("span", {
            id: COUNTER_ID,
            class: "a_sr_only",
          }, this.translate("counter", { count: this.tags.length, max: this.maxTags })),
          // the live region is always in the page, only its text changes
          h("span", {
            class: "a_sr_only",
            role: "status",
          }, this.announcement),
          this.hasSuggestions && renderListboxStatus(this),
        ]),
        this.isRemoveAll && this.tags.length > 0 && h("button", {
          type: "button",
          class: "a_btn a_btn_link a_btn_small a_input_tags__remove_all",
          disabled: this.disabledAttribut,
          onClick: this.removeAll,
        }, this.translate("removeAll")),
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
