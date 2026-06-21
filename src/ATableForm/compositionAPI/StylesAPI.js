import {
  computed,
  toRef,
} from "vue";

import {
  isPlainObject,
} from "lodash-es";

function normalizeSize(value) {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value === "number") {
    return `${ value }px`;
  }

  return value;
}

export default function StylesAPI(props) {
  const column = toRef(props, "column");

  const columnStyles = computed(() => {
    const styles = {};

    const width = normalizeSize(column.value.width);
    const maxWidth = normalizeSize(column.value.maxWidth);
    const minWidth = normalizeSize(column.value.minWidth);

    if (width) {
      styles.width = width;
    }
    if (maxWidth) {
      styles.maxWidth = maxWidth;
    }
    if (minWidth) {
      styles.minWidth = minWidth;
    }

    if (isPlainObject(column.value.style)) {
      return {
        ...styles,
        ...column.value.style,
      };
    }

    if (column.value.style) {
      return [
        styles,
        column.value.style,
      ];
    }

    return styles;
  });

  return {
    columnStyles,
  };
}
