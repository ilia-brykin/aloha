import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  filterVisibleRequiredUiElements,
  isAnyRequiredUiElementEmpty,
} from "../../../utils/utils";

export default function DisabledAPI(props, {
  model = ref({}),
}) {
  const children = toRef(props, "children");

  const childrenVisibleRequired = computed(() => {
    return filterVisibleRequiredUiElements({
      elements: children.value,
    });
  });

  const isAnyRequiredElementEmpty = computed(() => {
    return isAnyRequiredUiElementEmpty({
      elements: childrenVisibleRequired.value,
      model: model.value,
    });
  });

  return {
    isAnyRequiredElementEmpty,
  };
}
