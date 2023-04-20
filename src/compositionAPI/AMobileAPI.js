import {
  ref,
} from "vue";

export const isMobileWidth = ref(undefined);

export function setIsMobileWidth(isMobileWidthLocal) {
  isMobileWidth.value = isMobileWidthLocal;
}

export default function AMobileAPI() {
  return {
    isMobileWidth,
    setIsMobileWidth,
  };
}
