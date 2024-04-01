import {
  computed,
  toRef,
} from "vue";

import {
  typesMapDatepickerRange,
} from "../../ADatepickerRange/utils/Types";
import {
  typesMapInputNumberRange,
} from "../../AInputNumberRange/utils/Types";
import {
  typesNotFocusable,
} from "../../const/AUiTypes";
import {
  forEach,
  get,
  isUndefined,
} from "lodash-es";

export default function SpecificTypeAPI(props) {
  const children = toRef(props, "children");

  const specificAttributes = computed(() => {
    const ATTRIBUTES = {};

    forEach(children.value, child => {
      const IS_NUMBER_RANGE = typesMapInputNumberRange[child.type];
      const IS_DATEPICKER_RANGE = typesMapDatepickerRange[child.type];
      if (IS_NUMBER_RANGE) {
        if (isUndefined(child.inputWidth)) {
          ATTRIBUTES[child.id] = {
            inputWidth: "auto",
          };
        }
      }

      if (IS_DATEPICKER_RANGE) {
        ATTRIBUTES[child.id] = {
          inputWidth: "inherit",
          inputAttributes: {
            style: "min-width: 181px",
          },
        };
      }
    });

    return ATTRIBUTES;
  });

  const labelAttributesForNotFocusableElements = computed(() => {
    const ATTRIBUTES = {};
    const IS_ELEMENT_NOT_FOCUSABLE = typesNotFocusable.value[get(children.value, "[0].type")];

    if (IS_ELEMENT_NOT_FOCUSABLE) {
      ATTRIBUTES.prevent = true;
      ATTRIBUTES.stop = true;
    }

    return ATTRIBUTES;
  });

  return {
    labelAttributesForNotFocusableElements,
    specificAttributes,
  };
}
