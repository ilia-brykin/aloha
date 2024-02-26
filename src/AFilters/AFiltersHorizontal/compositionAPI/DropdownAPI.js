import {
  computed,
  ref,
  toRef,
} from "vue";

export default function DropdownAPI(props) {
  const filtersGroup = toRef(props, "filtersGroup");

  const dropdownRef = ref(undefined);

  const isDropdownVisible = computed(() => {
    return !!(filtersGroup.value.alwaysVisible.length || filtersGroup.value.filters.length);
  });

  const closeDropdown = () => {
    dropdownRef.value?.onClose({ trigger: "click" });
  };

  const openDropdown = selectorToFocus => {
    dropdownRef.value?.onOpen({ trigger: "click", selectorToFocus });
  };

  return {
    closeDropdown,
    dropdownRef,
    isDropdownVisible,
    openDropdown,
  };
}
