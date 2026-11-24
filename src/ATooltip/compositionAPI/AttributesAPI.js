import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
  isNumber,
} from "lodash-es";

// a number is in px, a string is used as it is
const toCssSize = value => {
  return isNumber(value) ? `${ value }px` : value;
};

export default function AttributesAPI(props) {
  const id = toRef(props, "id");
  const minWidth = toRef(props, "minWidth");
  const width = toRef(props, "width");
  const maxWidth = toRef(props, "maxWidth");

  const titleId = computed(() => {
    return `${ id.value }_title`;
  });

  const tooltipStyles = computed(() => {
    const STYLES_OBJ = {};
    if (!isNil(minWidth.value)) {
      STYLES_OBJ["min-width"] = toCssSize(minWidth.value);
    }
    if (!isNil(width.value)) {
      STYLES_OBJ.width = toCssSize(width.value);
    }
    if (!isNil(maxWidth.value)) {
      STYLES_OBJ["max-width"] = toCssSize(maxWidth.value);
    }

    return STYLES_OBJ;
  });

  return {
    titleId,
    tooltipStyles,
  };
}
