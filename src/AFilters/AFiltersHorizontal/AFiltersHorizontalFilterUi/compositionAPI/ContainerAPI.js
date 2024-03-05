import {
  computed,
  toRef,
} from "vue";

import {
  typesContainer,
} from "../../../../ui/const/AUiTypes";

export default function ContainerAPI(props) {
  const filter = toRef(props, "filter");

  const isContainer = computed(() => {
    return !!typesContainer.value[filter.value.type];
  });

  return {
    isContainer,
  };
}
