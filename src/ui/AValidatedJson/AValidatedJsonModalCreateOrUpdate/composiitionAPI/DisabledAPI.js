import {
  computed,
  ref,
} from "vue";

import {
  filterVisibleRequiredUiElements,
  isAnyRequiredUiElementEmpty,
} from "../../../utils/utils";

export default function DisabledAPI(props, {
  dataForm = computed(() => []),
  model = ref({}),
}) {
  const dataFormVisibleRequired = computed(() => {
    return filterVisibleRequiredUiElements({
      elements: dataForm.value,
    });
  });

  const isAnyRequiredElementEmpty = computed(() => {
    return isAnyRequiredUiElementEmpty({
      elements: dataFormVisibleRequired.value,
      model: model.value,
    });
  });

  return {
    isAnyRequiredElementEmpty,
  };
}
