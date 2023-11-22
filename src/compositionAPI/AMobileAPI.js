import {
  ref,
} from "vue";

import EventBus from "../utils/EventBus";

export const isMobileWidth = ref(undefined);

export function setIsMobileWidth(isMobileWidthLocal) {
  isMobileWidth.value = isMobileWidthLocal;
  EventBus.$emit("updateViewOnResize", isMobileWidthLocal);
  if (isMobileWidthLocal) {
    document.body.classList.add("a_mobile");
  } else {
    document.body.classList.remove("a_mobile");
  }
}

export default function AMobileAPI() {
  return {
    isMobileWidth,
    setIsMobileWidth,
  };
}
