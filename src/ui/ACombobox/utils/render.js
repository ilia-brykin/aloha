import {
  h,
  Teleport,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import {
  AKeyId,
  AKeyLabel,
} from "../../../const/AKeys";
import {
  getHighlightParts,
} from "./text";
import {
  isNil,
  toString,
} from "lodash-es";

/**
 * The list of the suggestions for ACombobox and AInputTags. "vm" is the component (this in render),
 * it has the values of ComboboxAPI in its setup.
 */
function renderOption(vm, { item, index }) {
  const IS_ACTIVE = index === vm.activeIndex;
  const IS_DISABLED = vm.isItemDisabled(item);
  const PARTS = getHighlightParts(item[AKeyLabel], vm.searchText, {
    filterMode: vm.filterMode,
    ignoreDiacritics: vm.ignoreDiacritics,
  });
  const HIGHLIGHT = PARTS.map(part => {
    return part.isMatch ? h("mark", { class: "a_search_highlight" }, part.text) : part.text;
  });

  return h("li", {
    key: `${ index }_${ toString(item[AKeyId]) }`,
    id: vm.getOptionId(index),
    role: "option",
    "aria-disabled": IS_DISABLED ? "true" : undefined,
    "aria-selected": IS_ACTIVE ? "true" : "false",
    class: ["a_combobox__option", {
      a_combobox__option_active: IS_ACTIVE,
      a_combobox__option_disabled: IS_DISABLED,
    }],
    onClick: () => vm.selectOption(index),
  }, vm.$slots.option ?
    vm.$slots.option({
      highlight: HIGHLIGHT,
      index,
      isActive: IS_ACTIVE,
      isDisabled: IS_DISABLED,
      item: vm.getOriginalItem(item),
      label: item[AKeyLabel],
      parts: PARTS,
    }) :
    HIGHLIGHT);
}

// WAI-ARIA grouped listbox: <li role="none"><ul role="group" aria-labelledby> header + options
function renderOptions(vm) {
  return vm.optionGroups.map((group, groupIndex) => {
    if (isNil(group.group)) {
      return group.options.map(option => renderOption(vm, option));
    }
    const HEADER_ID = `${ vm.htmlIdLocal }_group_${ groupIndex }`;
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
        }, vm.translateData ?
          getTranslatedText({ placeholder: LABEL, alwaysTranslate: vm.alwaysTranslate }) :
          LABEL),
        ...group.options.map(option => renderOption(vm, option)),
      ]),
    ]);
  });
}

/**
 * The popup with the listbox: in the page all the time (aria-controls of the listbox), hidden while closed.
 * footer: optional content under the list (AInputTags: add all).
 */
export function renderListboxPopup(vm, { listboxId, hasLabel, footer = null }) {
  return h(Teleport, {
    to: vm.popperContainerIdSelector,
    disabled: !vm.isTeleported,
  }, [
    h("div", {
      ref: "popupRef",
      class: ["a_combobox__popup", {
        a_combobox__popup_in_body: vm.isTeleported && !vm.isSheet,
        a_combobox__popup_sheet: vm.isSheet,
      }],
      "data-owner": vm.htmlIdLocal,
      hidden: !vm.isPopupVisible,
      style: vm.popupStyle,
      // a click in the list keeps the focus in the input
      onMousedown: vm.onOptionMousedown,
    }, [
      h("ul", {
        id: listboxId,
        role: "listbox",
        "aria-labelledby": hasLabel ? `${ vm.htmlIdLocal }_label` : undefined,
        class: "a_combobox__listbox",
        hidden: !vm.isListVisible,
      }, vm.isListVisible ? renderOptions(vm) : []),
      vm.isEmptyVisible && h("div", {
        "aria-hidden": "true",
        class: "a_combobox__empty",
      }, vm.statusText),
      footer,
    ]),
  ]);
}

// the live region is always in the page, only its text changes
export function renderListboxStatus(vm) {
  return h("span", {
    class: "a_sr_only a_combobox__status",
    role: "status",
  }, vm.statusText);
}
