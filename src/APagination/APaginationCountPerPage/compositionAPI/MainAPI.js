import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../../compositionAPI/AFiltersAPI";

export default function MainAPI(props) {
  const offset = toRef(props, "offset");
  const rowsLength = toRef(props, "rowsLength");
  const totalCount = toRef(props, "totalCount");

  const {
    filterCurrency,
  } = AFiltersAPI();

  const startFormatted = computed(() => {
    return filterCurrency(+offset.value + 1, { suffix: "", digits: 0 });
  });

  const currentFormatted = computed(() => {
    return filterCurrency(+offset.value + rowsLength.value, { suffix: "", digits: 0 });
  });

  const countFormatted = computed(() => {
    return filterCurrency(totalCount.value, { suffix: "", digits: 0 });
  });

  const extraForTranslate = computed(() => {
    return {
      start: startFormatted.value,
      current: currentFormatted.value,
      count: countFormatted.value,
    };
  });

  return {
    extraForTranslate,
  };
}
