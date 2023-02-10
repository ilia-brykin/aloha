import {
  ref,
} from "vue";

export default function RefsAPI() {
  const dropdownButtonRef = ref(undefined);
  const dropdownRef = ref(undefined);

  return {
    dropdownButtonRef,
    dropdownRef,
  };
}
