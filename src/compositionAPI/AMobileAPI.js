import {
  ref,
} from "vue";

export const isMobile = ref(undefined);

export function setIsMobile(isMobileLocal) {
  isMobile.value = isMobileLocal;
}

export default function AMobileAPI() {
  return {
    isMobile,
    setIsMobile,
  };
}
