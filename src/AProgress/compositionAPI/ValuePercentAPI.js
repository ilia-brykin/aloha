import {
  computed,
  toRef,
} from "vue";

import AFiltersAPI from "../../compositionAPI/AFiltersAPI";

export default function ValuePercentAPI(props, {
  widthPercent = computed(() => 0),
}) {
  const valueTextInteger = toRef(props, "valueTextInteger");

  const {
    filterCurrency,
  } = AFiltersAPI();

  const valuePercent = computed(() => {
    if (valueTextInteger.value) {
      return filterCurrency(widthPercent.value, {
        suffix: "%",
        digits: 0,
      });
    }
    return filterCurrency(widthPercent.value, {
      suffix: "%",
      digits: 2,
    });
  });

  return {
    valuePercent,
  };
}
