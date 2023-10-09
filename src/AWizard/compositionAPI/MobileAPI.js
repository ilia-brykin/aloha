import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

export default function MobileAPI(props) {
  const isMobile = toRef(props, "isMobile");

  const {
    isMobileWidth,
  } = AMobileAPI();

  const isMobileLocal = computed(() => {
    return isMobile.value || isMobileWidth.value;
  });

  return {
    isMobileLocal,
  };
}
