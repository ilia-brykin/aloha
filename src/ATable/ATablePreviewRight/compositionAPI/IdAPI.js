import {
  computed,
  inject,
} from "vue";

import {
  getPreviewRightId,
} from "../../utils/utils";

export default function IdAPI() {
  const tableId = inject("tableId");

  const idLocal = computed(() => {
    return getPreviewRightId({ tableId: tableId.value });
  });

  return {
    idLocal,
  };
}
