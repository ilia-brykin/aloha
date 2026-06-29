import {
  computed,
  toRef,
} from "vue";

import Plus from "aloha-svg/dist/js/bootstrap/Plus";

export default function IconsAPI(props) {
  const icons = toRef(props, "icons");

  const iconsLocal = computed(() => {
    return {
      actionAddRow: Plus,
      ...icons.value,
    };
  });

  return {
    iconsLocal,
  };
}
