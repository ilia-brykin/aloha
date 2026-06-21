import {
  computed,
  toRef,
} from "vue";

export default function DisabledAPI(props) {
  const hasActiveEditRow = toRef(props, "hasActiveEditRow");
  const isActiveEditMode = toRef(props, "isActiveEditMode");

  const isActionsDisabled = computed(() => {
    return hasActiveEditRow.value && !isActiveEditMode.value;
  });

  return {
    isActionsDisabled,
  };
}
