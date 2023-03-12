import {
  ref,
} from "vue";

const isDropdownGlobalOpen = ref(false);
export default function ADropdownGlobalAPI() {
  const openDropdownGlobal = () => {
    isDropdownGlobalOpen.value = true;
  };

  const closeDropdownGlobal = () => {
    isDropdownGlobalOpen.value = false;
  };

  return {
    closeDropdownGlobal,
    isDropdownGlobalOpen,
    openDropdownGlobal,
  };
}
