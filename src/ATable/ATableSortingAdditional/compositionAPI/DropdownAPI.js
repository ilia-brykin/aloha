import {
  computed,
  ref,
} from "vue";

export default function DropdownAPI(props, {
  columnsAll = computed(() => []),
}) {
  const dropdownRef = ref(undefined);
  const wasOpenDropdown = ref(false);

  const isDropdownVisible = computed(() => {
    return columnsAll.value.length > 0;
  });

  const closeDropdown = () => {
    dropdownRef.value?.onClose({ trigger: "click" });
  };

  return {
    closeDropdown,
    dropdownRef,
    isDropdownVisible,
    wasOpenDropdown,
  };
}
