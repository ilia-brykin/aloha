import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  getTableLabelId,
} from "../utils/utils";

export default function TableAttributesAPI(props, {
  countNotHiddenColumns = computed(() => -1),
  isMobile = ref(false),
}) {
  const id = toRef(props, "id");
  const isLabelVisible = toRef(props, "isLabelVisible");

  const tableRoleAttributes = computed(() => {
    const ATTRIBUTES = {};
    if (!isMobile.value) {
      ATTRIBUTES.role = "table";
      ATTRIBUTES["aria-colcount"] = countNotHiddenColumns.value;
    }

    return ATTRIBUTES;
  });

  const tableChildRole = computed(() => {
    return isMobile.value ? "list" : "rowgroup";
  });

  const tableLabelId = computed(() => {
    if (isLabelVisible.value) {
      return getTableLabelId({ tableId: id.value });
    }

    return undefined;
  });

  return {
    tableChildRole,
    tableLabelId,
    tableRoleAttributes,
  };
}
