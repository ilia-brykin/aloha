import {
  computed,
  toRef,
} from "vue";

import {
  typesMapDatepickerRange,
} from "../../../ui/ADatepickerRange/utils/Types";

export default function FilterSpecificTypeAPI(props) {
  const filter = toRef(props, "filterMain");

  const filterSpecificAttributes = computed(() => {
    const ATTRIBUTES = {};
    const IS_DATEPICKER_RANGE = typesMapDatepickerRange[filter.value.type];

    if (IS_DATEPICKER_RANGE) {
      ATTRIBUTES.inputWidth = "auto";
      ATTRIBUTES.inputAttributes = {
        style: "max-width: 150px",
      };
    }

    return ATTRIBUTES;
  });

  return {
    filterSpecificAttributes,
  };
}
