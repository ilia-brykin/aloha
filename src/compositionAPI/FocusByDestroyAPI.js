import {
  computed,
  toRef,
} from "vue";

import {
  cloneDeep,
  forEach,
  isArray,
  isString,
} from "lodash-es";
export default function FocusByDestroyAPI(props) {
  const selectorClose = toRef(props, "selectorClose");
  const selectorCloseIds = toRef(props, "selectorCloseIds");
  const selectorsCloseAll = computed(() => {
    const ALL_SELECTORS = [];
    if (selectorCloseIds.value) {
      if (isString(selectorCloseIds.value)) {
        ALL_SELECTORS.push(`#${ selectorCloseIds.value }`);
      } else if (isArray(selectorCloseIds.value)) {
        forEach(selectorCloseIds.value, selectorCloseId => {
          ALL_SELECTORS.push(`#${ selectorCloseId }`);
        });
      }
    }
    if (selectorClose.value) {
      if (isString(selectorClose.value)) {
        ALL_SELECTORS.push(selectorClose.value);
      } else if (isArray(selectorClose.value)) {
        ALL_SELECTORS.push(...selectorClose.value);
      }
    }
    return ALL_SELECTORS;
  });
  const setFocusByDestroyForSelector = ({ selector }) => {
    const ELEMENT = document.querySelector(selector);
    if (ELEMENT) {
      ELEMENT.focus();
      return true;
    }
    return false;
  };
  // fallback: called when no selector is given or no element is found (e.g. the element that opened the modal)
  const setFocusByDestroy = ({ fallback } = {}) => {
    if (!selectorsCloseAll.value.length && !fallback) {
      return;
    }
    const SELECTOR_CLOSE_ALL = cloneDeep(selectorsCloseAll.value);
    setTimeout(() => {
      let isFocused = false;
      forEach(SELECTOR_CLOSE_ALL, selector => {
        isFocused = setFocusByDestroyForSelector({ selector });
        if (isFocused) {
          return false;
        }
      });
      if (!isFocused && fallback) {
        fallback();
      }
    }, 300);
  };
  return {
    setFocusByDestroy,
  };
}
