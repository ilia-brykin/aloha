import {
  computed,
  ref,
} from "vue";

export default function TableAttributesAPI({
  countNotHiddenColumns = computed(() => -1),
  isMobile = ref(false),
}) {
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

  return {
    tableChildRole,
    tableRoleAttributes,
  };
}
