import {
  computed,
  toRef,
} from "vue";

import {
  isNil,
} from "lodash-es";

export default function AttributesAPI(props) {
  const id = toRef(props, "id");
  const minWidth = toRef(props, "minWidth");
  const width = toRef(props, "width");
  const maxWidth = toRef(props, "maxWidth");

  const ariaDescribedby = computed(() => {
    return `${ id.value }_title`;
  });

  const tooltipStyles = computed(() => {
    const STYLES_OBJ = {};
    if (!isNil(minWidth.value)) {
      STYLES_OBJ["min-width"] = `${ minWidth.value }px`;
    }
    if (!isNil(width.value)) {
      STYLES_OBJ.width = `${ width.value }px`;
    }
    if (!isNil(maxWidth.value)) {
      STYLES_OBJ["max-width"] = `${ maxWidth.value }px`;
    }

    return STYLES_OBJ;
  });

  return {
    ariaDescribedby,
    tooltipStyles,
  };
}
