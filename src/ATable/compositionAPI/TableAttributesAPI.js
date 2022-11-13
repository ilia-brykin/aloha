import {
  computed,
  ref,
} from "vue";

export default function TableAttributesAPI({
  isMobile = ref(false),
}) {
  const tableRoleAttributes = computed(() => {
    const ATTRIBUTES = {};
    if (!isMobile.value) {
      ATTRIBUTES.role = "table";
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
