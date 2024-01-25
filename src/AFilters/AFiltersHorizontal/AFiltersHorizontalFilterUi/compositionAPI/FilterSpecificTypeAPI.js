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
    if (typesMapInputNumberRange[filter.value.type] || typesMapDatepickerRange[filter.value.type]) {
      if (isUndefined(filter.value.inputWidth)) {
        ATTRIBUTES.inputWidth = "auto";
      }
    }

    return ATTRIBUTES;
  });

  return {
    filterSpecificAttributes,
  };
}
