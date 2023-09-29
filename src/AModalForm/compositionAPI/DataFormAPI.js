import {
  computed,
  toRef,
} from "vue";

export default function DataFormAPI(props) {
  const dataForm = toRef(props, "dataForm");

  const hasDataForm = computed(() => {
    return dataForm.value.length > 0;
  });

  return {
    hasDataForm,
  };
}
