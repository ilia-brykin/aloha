import {
  computed,
  toRef,
} from "vue";
import FilterSpecificTypeAPI from "./FilterSpecificTypeAPI";

export default function MainFilterAPI(props) {
  const filterMain = toRef(props, "filterMain");

  const {
    filterSpecificAttributes,
  } = FilterSpecificTypeAPI(props);

  const hasFilterMain = computed(() => {
    return !!filterMain.value;
  });

  const dataMainFilter = computed(() => {
    if (!hasFilterMain.value) {
      return [];
    }
    return [
      {
        ...filterMain.value,
        ...filterSpecificAttributes.value,
      },
    ];
  });

  return {
    hasFilterMain,
    dataMainFilter,
  };
}
