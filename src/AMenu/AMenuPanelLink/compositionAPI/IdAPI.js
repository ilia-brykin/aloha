import {
  computed,
  toRef,
} from "vue";

import {
  getElementId,
} from "../../utils/utils";

export default function IdAPI(props, {
  id = computed(() => undefined),
}) {
  const menuId = toRef(props, "menuId");

  const linkId = computed(() => {
    return getElementId({
      menuId: menuId.value,
      id: id.value,
      suffix: "link",
    });
  });

  return {
    linkId,
  };
}
