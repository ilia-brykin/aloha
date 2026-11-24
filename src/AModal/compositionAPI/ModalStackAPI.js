import {
  ref,
} from "vue";

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

function update() {
  document.body.classList.toggle("a_modal_open", modals.value.length > 0);
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
