import {
  computed,
  toRef,
} from "vue";

import {
  typesMapDatepickerRange,
} from "../../../../ui/ADatepickerRange/utils/Types";
import {
  typesMapInputNumberRange,
} from "../../../../ui/AInputNumberRange/utils/Types";
import {
  isUndefined,
} from "lodash-es";

export default function FilterSpecificTypeAPI(props) {
  const filter = toRef(props, "filter");

  const filterSpecificAttributes = computed(() => {
    const ATTRIBUTES = {};
    const IS_NUMBER_RANGE = typesMapInputNumberRange[filter.value.type];
    const IS_DATEPICKER_RANGE = typesMapDatepickerRange[filter.value.type];
    if (IS_NUMBER_RANGE) {
      if (isUndefined(filter.value.inputWidth)) {
        ATTRIBUTES.inputWidth = "auto";
      }
    }

    if (IS_DATEPICKER_RANGE) {
      ATTRIBUTES.inputWidth = "inherit";
      ATTRIBUTES.inputAttributes = {
        style: "min-width: 181px",
      };
    }

    return ATTRIBUTES;
  });

  return {
    filterSpecificAttributes,
  };
}
