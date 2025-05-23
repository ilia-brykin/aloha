import {
  computed,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../../const/AKeys";

export default function IsActiveAPI(props) {
  const activeId = toRef(props, "activeId");
  const item = toRef(props, "item");

  const isActive = computed(() => {
    return item.value[AKeyId] === activeId.value;
  });

  return {
    isActive,
  };
}
