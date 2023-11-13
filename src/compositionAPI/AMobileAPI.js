import {
  ref,
} from "vue";

import EventBus from "../utils/EventBus";

export const isMobileWidth = ref(undefined);

export function setIsMobileWidth(isMobileWidthLocal) {
  isMobileWidth.value = isMobileWidthLocal;
  EventBus.$emit("updateViewOnResize", isMobileWidthLocal);
}

export default function AMobileAPI() {
  return {
    isMobileWidth,
    setIsMobileWidth,
  };
}
