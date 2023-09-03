import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
} from "lodash";

export default function ColumnsAPI(props) {
  const columns = toRef(props, "columns");

  const columnsMapping = {
    name: {
      label: "_ALOHA_TABLE_COLUMN_NAME_",
      keyLabel: "name",
      sortId: "name",
      width: 180,
      grow: 0,
    },
    description: {
      label: "_ALOHA_TABLE_COLUMN_DESCRIPTION_",
      keyLabel: "description",
      sortId: "description",
      slot: "description",
    },
    type: {
      label: "_ALOHA_TABLE_COLUMN_TYPE_",
      keyLabel: "type",
      sortId: "type",
      width: 180,
      grow: 0,
    },
    default: {
      label: "_ALOHA_TABLE_COLUMN_DEFAULT_",
      keyLabel: "default",
      sortId: "default",
      width: 180,
      grow: 0,
    },
    required: {
      label: "_ALOHA_TABLE_COLUMN_REQUIRED_",
      keyLabel: "required",
      sortId: "required",
      width: 100,
      grow: 0,
      slot: "get",
      filter: "boolean",
    },
  };

  const columnsLocal = computed(() => {
    const COLUMNS = [];
    forEach(columns.value, columnId => {
      if (columnsMapping[columnId]) {
        COLUMNS.push(columnsMapping[columnId]);
      }
    });
    return COLUMNS;
  });

  return {
    columnsLocal,
  };
}
