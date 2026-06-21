import {
  computed,
  toRef,
} from "vue";

import {
  get,
  isNil,
} from "lodash-es";

export default function RowsAPI(props) {
  const keyId = toRef(props, "keyId");
  const rows = toRef(props, "rows");
  const rowsFooter = toRef(props, "rowsFooter");

  const hasRows = computed(() => {
    return rows.value.length > 0;
  });

  const hasRowsFooter = computed(() => {
    return rowsFooter.value.length > 0;
  });

  const getRowKey = ({ row, rowIndex, isFooter = false }) => {
    let id = rowIndex;
    if (keyId.value) {
      const ID = get(row, keyId.value);
      if (!isNil(ID)) {
        id = ID;
      }
    }
    const PREFIX = isFooter ? "footer" : "body";

    return `${ PREFIX }_${ id }`;
  };

  return {
    getRowKey,
    hasRows,
    hasRowsFooter,
  };
}
