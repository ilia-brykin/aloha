import {
  computed,
  ref,
} from "vue";

import {
  filterVisibleRequiredUiElements,
  isAnyRequiredUiElementEmpty,
} from "../../../utils/utils";

import {
  cloneDeep,
} from "lodash-es";

export default function DisabledAPI(props, {
  dataForm = computed(() => []),
  model = ref({}),
}) {
  const dataFormVisibleRequired = computed(() => {
    return filterVisibleRequiredUiElements({
      elements: cloneDeep(dataForm.value),
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
