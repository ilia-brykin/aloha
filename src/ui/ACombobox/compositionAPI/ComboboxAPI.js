import {
  computed,
  onMounted,
  ref,
} from "vue";

import ListboxAPI from "./ListboxAPI";
import PopperContainerAPI from "../../../ATooltip/compositionAPI/PopperContainerAPI";
import PopupAPI from "./PopupAPI";
import SuggestionsAPI from "./SuggestionsAPI";
import UtilsAPI, {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import {
  isBrowser,
} from "../../../utils/isBrowser";
import {
  get,
  isNil,
} from "lodash-es";

// the texts of the status of the suggestions, every key falls back to its default
export const TEXTS_SUGGESTIONS_DEFAULT = {
  loading: "_A_COMBOBOX_LOADING_",
  noResults: "_A_COMBOBOX_NO_RESULTS_",
  results: "_A_COMBOBOX_RESULTS_{{count}}_",
};

/**
 * Suggestions + WAI-ARIA listbox + the list in the field, in body or as bottom sheet.
 * Used by ACombobox (the text is the model) and AInputTags (the text adds tags).
 */
export default function ComboboxAPI(props, context, {
  changeModel = () => {},
  htmlIdLocal = computed(() => ""),
  inputRef = ref(undefined),
  isExcluded = undefined,
  onSelectOption = undefined,
  referenceRef = undefined,
  setText = undefined,
  text = undefined,
  textsLocal = computed(() => TEXTS_SUGGESTIONS_DEFAULT),
  zIndexToken = "--a_combobox_z_index",
}) {
  const {
    dataLocal,
    getOriginalItem,
    loading,
    search,
    searchText,
    stopSearch,
    suggestions,
  } = SuggestionsAPI(props, { isExcluded });

  const listbox = ListboxAPI(props, context, {
    changeModel,
    getInputElement: () => inputRef.value,
    getOriginalItem,
    htmlIdLocal,
    loading,
    onSelectOption,
    search,
    setText,
    stopSearch,
    suggestions,
    text,
  });

  const {
    replaceText,
  } = UtilsAPI();

  // read by the screen reader after every change of the list
  const statusText = computed(() => {
    if (!listbox.isOpen.value) {
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
      placeholder: textsLocal.value[key] || TEXTS_SUGGESTIONS_DEFAULT[key],
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

  const popupRef = ref(undefined);
  const isMounted = ref(false);

  const isEmptyVisible = computed(() => {
    return listbox.isOpen.value && !loading.value && !suggestions.value.length;
  });
  const isPopupVisible = computed(() => listbox.isListVisible.value || isEmptyVisible.value);

  const {
    addPopperContainerInBody,
    popperContainerIdSelector,
  } = PopperContainerAPI(props);

  const {
    isSheet,
    isTeleported,
    sheetBottom,
  } = PopupAPI(props, {
    // AInputTags: the list is as wide as the whole field with the tags
    inputRef: referenceRef || inputRef,
    isMounted,
    isPopupVisible,
    // the focus stays in the input, only the list closes
    onReferenceHidden: () => listbox.close(),
    popupRef,
  });

  // before the first render: Teleport finds its target only at the mount; a_popup_container: not inert behind AModal
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
      [zIndexToken]: isNil(props.zIndex) ? undefined : props.zIndex,
    };
  });

  return {
    ...listbox,
    dataLocal,
    getOriginalItem,
    isEmptyVisible,
    isPopupVisible,
    isSheet,
    isTeleported,
    loading,
    optionGroups,
    popperContainerIdSelector,
    popupRef,
    popupStyle,
    searchText,
    sheetBottom,
    statusText,
    suggestions,
  };
}
