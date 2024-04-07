import {
  computed,
  inject,
} from "vue";

import {
  getTableLabelId,
} from "../../utils/utils";

export default function IdAPI() {
  const tableId = inject("tableId");

  const tableLabelId = computed(() => {
    return getTableLabelId({ tableId: tableId.value });
  });

  return {
    tableLabelId,
  };
}
