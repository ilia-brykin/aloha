import {
  computed,
  toRef,
} from "vue";

import AUiTypesContainer from "../../../../ui/const/AUiTypesContainer";

export default function ContainerAPI(props) {
  const filter = toRef(props, "filter");

  const isContainer = computed(() => {
    return !!AUiTypesContainer[filter.value.type];
  });

  return {
    isContainer,
  };
}
