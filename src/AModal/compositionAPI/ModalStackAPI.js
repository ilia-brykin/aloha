import {
  ref,
} from "vue";

import {
  getComponentOption,
} from "../../plugins/AComponentsPlugin";
import {
  isNumber,
} from "lodash-es";

// containers outside of the modal that must stay usable: popups (dropdown, select, tooltip, datepicker…), notifications, live regions
const SELECTOR_NOT_INERT = [
  ".a_popup_container",
  ".a_notification_parent",
  ".a_datepicker__popup",
  ".a_color_picker__popup",
  "[aria-live]",
  "[data-a-not-inert]",
].join(", ");

/**
 * All open modals, the last one is on top.
 * Only the top modal handles the keyboard (Escape, Tab), the class a_modal_open stays on body while a modal is open,
 * the z-index comes from the position and the rest of the page gets inert (also the modals below).
 */
const modals = ref([]);
let elementsInert = [];

export function getModalPosition(key) {
  return modals.value.findIndex(item => item.key === key);
}

export function isTopModal(key) {
  const LAST = modals.value[modals.value.length - 1];
  return !!LAST && LAST.key === key;
}

function releaseInert() {
  elementsInert.forEach(element => element.removeAttribute("inert"));
  elementsInert = [];
}

function setInert() {
  releaseInert();
  const TOP = modals.value[modals.value.length - 1];
  if (!TOP?.useInert) {
    return;
  }
  const WRAPPER = TOP.getWrapper();
  if (!WRAPPER) {
    return;
  }
  Array.from(document.body.children).forEach(element => {
    if (element.contains(WRAPPER) ||
      element.hasAttribute("inert") ||
      element.matches(SELECTOR_NOT_INERT) ||
      element.tagName === "SCRIPT" ||
      element.tagName === "STYLE") {
      return;
    }
    element.setAttribute("inert", "");
    elementsInert.push(element);
  });
}

/**
 * The space of the scrollbar that overflow: hidden removes, so the page does not move.
 * AComponentsPlugin: { AModal: { scrollbarCompensation: "auto" } }
 * "auto" (default): measured, 0 without a scrollbar (macOS, iOS, Android, overlay scrollbars);
 * a number (px) or a CSS length: fixed; false: no compensation.
 */
export function getScrollbarCompensation() {
  const OPTION = getComponentOption("AModal", "scrollbarCompensation", "auto");
  if (OPTION === "auto") {
    return `${ Math.max(window.innerWidth - document.documentElement.clientWidth, 0) }px`;
  }
  if (isNumber(OPTION)) {
    return `${ OPTION }px`;
  }
  return OPTION || "0px";
}

function update() {
  const IS_OPEN = modals.value.length > 0;
  const BODY = document.body;
  // measured before overflow: hidden removes the scrollbar; the next modals keep the value
  if (IS_OPEN && !BODY.classList.contains("a_modal_open")) {
    // own padding of the body (px, also from rem) + the scrollbar: the class must not replace it
    const OWN_PADDING = parseFloat(getComputedStyle(BODY).paddingRight) || 0;
    BODY.style.setProperty("--a_scrollbar_width", `calc(${ OWN_PADDING }px + ${ getScrollbarCompensation() })`);
  } else if (!IS_OPEN) {
    BODY.style.removeProperty("--a_scrollbar_width");
  }
  BODY.classList.toggle("a_modal_open", IS_OPEN);
  setInert();
}

export function addModal({ key, getWrapper, useInert }) {
  if (getModalPosition(key) === -1) {
    modals.value = [...modals.value, { key, getWrapper, useInert }];
  }
  update();
}

export function removeModal(key) {
  modals.value = modals.value.filter(item => item.key !== key);
  update();
}

export default function ModalStackAPI() {
  return {
    addModal,
    getModalPosition,
    isTopModal,
    modals,
    removeModal,
  };
}
