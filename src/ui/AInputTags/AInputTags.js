import {
  computed,
  h,
  ref,
  shallowRef,
  watch,
} from "vue";
import {
  AErrorsText,
  AFormElementBtnClear,
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

import AHttpAPI from "../../compositionAPI/AHttpAPI";
import ComboboxAPI, {
  TEXTS_SUGGESTIONS_DEFAULT,
} from "../ACombobox/compositionAPI/ComboboxAPI";
import PlaceholderAPI from "../../ATranslation/compositionAPI/PlaceholderAPI";
import TagsAPI from "./compositionAPI/TagsAPI";
import UiUrlAPI from "../compositionApi/UiUrlAPI";

import Close from "../../AIcon/Icons/Close";
import {
  AKeyId,
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
  get,
  isFunction,
  uniqueId,
} from "lodash-es";

// the texts of the field, every key falls back to its default; the defaults can be set with AComponentsPlugin
export const TEXTS_DEFAULT = {
  addAll: "_A_INPUT_TAGS_ADD_ALL_",
  added: "_A_INPUT_TAGS_ADDED_",
  counter: "_A_INPUT_TAGS_COUNTER_",
  duplicate: "_A_INPUT_TAGS_DUPLICATE_",
  editing: "_A_INPUT_TAGS_EDITING_",
  hint: "_A_INPUT_TAGS_HINT_",
  hintAddAll: "_A_INPUT_TAGS_HINT_ADD_ALL_",
  hintSortable: "_A_INPUT_TAGS_HINT_SORTABLE_",
  invalid: "_A_INPUT_TAGS_INVALID_",
  max: "_A_INPUT_TAGS_MAX_",
  maxlength: "_A_INPUT_TAGS_MAXLENGTH_",
  moved: "_A_INPUT_TAGS_MOVED_",
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
    // add-on-blur false: the typed text stays in the input when the field loses the focus
    addOnBlur: plugin(Boolean, "addOnBlur", true),
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
    errorIcon: {
      type: [String, Object],
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
    iconAppend: {
      type: String,
      required: false,
      default: undefined,
    },
    iconPrepend: {
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
    // a button that clears the typed text (not the tags)
    isClearButton: plugin(Boolean, "isClearButton", true),
    isDataSimpleArray: {
      type: Boolean,
      required: false,
    },
    isHide: {
      type: Boolean,
      required: false,
    },
    isLabelFloat: {
      type: Boolean,
      required: false,
      default: undefined,
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
    // the order of the tags: Alt+arrows on a tag and drag and drop
    isSortable: plugin(Boolean, "isSortable", false),
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
    labelPosition: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["float", "inset", "top"].indexOf(value) !== -1,
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
    // maximum length of one tag
    maxlength: {
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
    // "id": the model has the ids of the suggestions, the tags show their labels
    modelKey: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["id"].indexOf(value) !== -1,
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
    size: {
      type: String,
      required: false,
      default: () => getPropDefault("AInputTags", "size", "medium"),
      validator: value => ["small", "medium", "large"].indexOf(value) !== -1,
    },
    // a class of every tag, or ({ tag, label, index }) => class
    tagClass: {
      type: [String, Object, Array, Function],
      required: false,
      default: undefined,
    },
    searchTimeout: plugin(Number, "searchTimeout", 300),
    // keys that add the text as a tag; one-character separators also split pasted text
    separators: {
      type: Array,
      required: false,
      default: () => ["Enter", ","],
    },
    texts: plugin(Object, "texts", {}),
    // the text before the checks, e.g. value => value.toLowerCase()
    transform: {
      type: Function,
      required: false,
      default: undefined,
    },
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
    // model-key "id": the labels of the ids in the model (else url)
    urlRetrieve: {
      type: String,
      required: false,
      default: undefined,
    },
    urlTemplateData: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    // ({ tag, tags }) => true | false | "message"
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
      placeholderAttributes,
    } = PlaceholderAPI(props);

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
      isLabelFloatLocal,
      isLabelInset,
      labelDescriptionId,
    } = UiAPI(props, context);

    const textsLocal = computed(() => ({ ...TEXTS_DEFAULT, ...props.texts }));
    const hasSuggestions = computed(() => !!(props.url || props.data?.length));
    const controlRef = ref(undefined);
    const isExpanded = ref(false);

    // the data of the suggestions: ComboboxAPI needs the tags first, so the computed is set after it
    const dataSource = shallowRef(undefined);
    const getData = () => dataSource.value?.value || [];
    // the item of a text (case and diacritics like the filter)
    const findItemByLabel = value => {
      const VALUE = foldText(value, { ignoreDiacritics: props.ignoreDiacritics }).folded;
      return getData().find(item => {
        return foldText(item[AKeyLabel], { ignoreDiacritics: props.ignoreDiacritics }).folded === VALUE;
      });
    };
    // is-only-from-list: the text is a label of the data
    const isInData = value => !!findItemByLabel(value);

    // model-key "id": the labels of the ids (data, chosen suggestions, retrieve)
    const isIdModel = computed(() => props.modelKey === "id");
    const labelsById = shallowRef({});
    const getLabel = value => {
      if (!isIdModel.value) {
        return String(value);
      }
      const ITEM = getData().find(item => String(item[AKeyId]) === String(value));
      return ITEM ? String(ITEM[AKeyLabel]) : labelsById.value[String(value)] ?? String(value);
    };
    // a text of a suggestion is its id, an own text stays a text
    const toValue = text => {
      if (!isIdModel.value) {
        return text;
      }
      const ITEM = findItemByLabel(text);
      return ITEM ? ITEM[AKeyId] : text;
    };

    const tagsApi = TagsAPI(props, {
      changeModel,
      getLabel,
      isInData,
      textsLocal,
      toValue,
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
        const VALUE = String(isIdModel.value ? item[AKeyId] : item[AKeyLabel]).toLowerCase();
        return !props.allowDuplicates && tags.value.some(tag => String(tag).toLowerCase() === VALUE);
      },
      onSelectOption: ({ id, label }) => {
        labelsById.value = { ...labelsById.value, [String(id)]: label };
        // an edited tag goes back to its place
        inputValue.value = label;
        tagsApi.addInputValue();
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

    // model-key "id" with url: the labels of the ids that are not in the suggestions (like urlRetrieve of ASelect)
    const {
      urlLocal,
    } = UiUrlAPI(props);
    const {
      getListHttp,
    } = AHttpAPI();
    watch([tags, isIdModel], () => {
      if (!isIdModel.value || !(props.urlRetrieve || urlLocal.value)) {
        return;
      }
      const MISSING = tags.value.filter(value => getLabel(value) === String(value) && !findItemByLabel(String(value)));
      if (!MISSING.length) {
        return;
      }
      getListHttp({
        url: props.urlRetrieve || urlLocal.value,
        urlParams: {
          ...(props.urlParams || {}),
          [props.keyId]: MISSING,
          limit: MISSING.length,
        },
      }).then(response => {
        const LABELS = { ...labelsById.value };
        (response || []).forEach(item => {
          LABELS[String(get(item, props.keyId))] = isFunction(props.keyLabelCallback) ?
            props.keyLabelCallback({ item }) :
            get(item, props.keyLabel);
        });
        labelsById.value = LABELS;
      }, () => {});
    }, { immediate: true });

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
      // Escape while editing: the old tag is back (before the list of the suggestions)
      if ($event.key === "Escape" && tagsApi.editIndex.value !== -1) {
        combobox.close();
        tagsApi.onKeydown($event);
        return;
      }
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

    const isClearButtonLocal = computed(() => {
      return !!(props.isClearButton && inputValue.value && !props.disabled);
    });

    const clearText = () => {
      inputValue.value = "";
      combobox.close();
      inputRef.value?.focus();
    };

    const sizeClass = computed(() => {
      return { small: "a_form_control_small", large: "a_form_control_large" }[props.size];
    });

    const getTagClass = (tag, index) => {
      return isFunction(props.tagClass) ?
        props.tagClass({ tag, label: getLabel(tag), index }) :
        props.tagClass;
    };

    context.expose({
      focus: tagsApi.focus,
    });

    return {
      ...combobox,
      placeholderAttributes,
      addableSuggestions,
      addAllFound,
      announcement: tagsApi.announcement,
      clearText,
      editIndex: tagsApi.editIndex,
      feedback: tagsApi.feedback,
      flashIndex: tagsApi.flashIndex,
      getLabel,
      getTagClass,
      isClearButtonLocal,
      isLabelFloatLocal,
      isLabelInset,
      onDragover: tagsApi.onDragover,
      onDragstart: tagsApi.onDragstart,
      onDrop: tagsApi.onDrop,
      sizeClass,
      startEdit: tagsApi.startEdit,
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
        modelValue: this.tags.map(this.getLabel).join(", "),
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
    const HAS_ERROR_ICON = !!(this.isErrors && this.errorIcon);
    const ACTIONS_COUNT = [this.iconAppend, this.isClearButtonLocal, this.loading].filter(Boolean).length;
    const ACTIONS_CLASS = ACTIONS_COUNT ?
      ["", "a_form_element_with_one_btn", "a_form_element_with_two_btns", "a_form_element_with_three_btns"][ACTIONS_COUNT] :
      undefined;
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
          a_form_element__parent_float: this.isLabelFloatLocal,
          a_form_element__parent_inset: this.isLabelInset,
          a_form_element__parent_float_has_error_icon: HAS_ERROR_ICON,
          a_form_element__parent_not_empty: this.tags.length > 0 || !!this.inputValueTags,
          a_form_element__parent_float_has_icon_prepend: this.iconPrepend,
          a_form_element__parent_float_has_two_icons_prepend: this.iconPrepend && HAS_ERROR_ICON,
        }],
      }, [
        HAS_LABEL && h(ALabel, {
          id: this.htmlIdLocal,
          alwaysTranslate: this.alwaysTranslate,
          extra: this.extra,
          isError: this.isErrors,
          isLabelFloat: this.isLabelFloatLocal,
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
          isLabelFloat: this.isLabelFloatLocal,
        }),
        h("div", {
          class: "a_form_element a_combobox",
        }, [
          HAS_ERROR_ICON && h(AIcon, {
            icon: this.errorIcon,
            class: "a_input__icon_error",
          }),
          this.iconPrepend && h(AIcon, {
            icon: this.iconPrepend,
            class: "a_input__icon_prepend",
          }),
          h("div", {
            ref: "controlRef",
            class: [
              "a_form_control a_input_tags",
              this.sizeClass,
              ACTIONS_CLASS,
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
              const LABEL = this.getLabel(tag);
              const REMOVE = this.translate("remove", { tag: LABEL });
              return h("li", {
                key: `${ tag }_${ index }`,
                class: [
                  "a_input_tags__tag",
                  this.getTagClass(tag, index),
                  {
                    a_input_tags__tag_flash: index === this.flashIndex,
                    a_input_tags__tag_sortable: this.isSortable,
                  },
                ],
                // drag and drop for the mouse, Alt+arrows for the keyboard
                draggable: this.isSortable && !this.disabled ? "true" : undefined,
                onDragstart: this.isSortable ? $event => this.onDragstart($event, index) : undefined,
                onDragover: this.isSortable ? this.onDragover : undefined,
                onDrop: this.isSortable ? $event => this.onDrop($event, index) : undefined,
              }, [
                // a double click edits the tag (the keyboard: F2 on the remove button)
                h("span", {
                  class: "a_input_tags__text",
                  onDblclick: () => this.startEdit(index),
                }, LABEL),
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
              ...(this.isMaxReached ? {} : this.placeholderAttributes),
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
            this.maxTags && h("span", {
              "aria-hidden": "true",
              class: "a_input_tags__counter",
            }, `${ this.tags.length } / ${ this.maxTags }`),
          ]),
          ACTIONS_COUNT > 0 && h("div", {
            class: "a_form_control__actions a_input_tags__actions",
          }, [
            this.loading && h(ASpinner, {
              class: "a_spinner_small",
              "aria-hidden": "true",
            }),
            this.iconAppend && h(AIcon, {
              icon: this.iconAppend,
              class: "a_input__icon_append",
            }),
            this.isClearButtonLocal && h(AFormElementBtnClear, {
              alwaysTranslate: this.alwaysTranslate,
              disabled: this.disabled,
              onClear: this.clearText,
            }),
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
            this.isSortable ? ` ${ this.translate("hintSortable") }` : "",
          ]),
          // the reason of the last refused value; the live region reads it, so here only for the eyes
          this.feedback && h("div", {
            "aria-hidden": "true",
            class: "a_input_tags__feedback",
          }, this.feedback),
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
