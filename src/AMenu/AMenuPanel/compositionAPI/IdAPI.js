import {
  computed,
  toRef,
} from "vue";

import {
  getElementId,
} from "../../utils/utils";

export default function IdAPI(props) {
  const menuId = toRef(props, "menuId");
  const parentId = toRef(props, "parentId");

  const panelId = computed(() => {
    return getElementId({
      menuId: menuId.value,
      id: parentId.value,
      suffix: "panel",
    });
  });

  return {
    panelId,
  };
}
