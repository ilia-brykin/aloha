import {
  computed,
  toRef,
} from "vue";

export default function DropdownAPI(props) {
  const isLast = toRef(props, "isLast");
  const hasDropdownActions = toRef(props, "hasDropdownActions");
  const hasDividerBeforeDropdown = toRef(props, "hasDividerBeforeDropdown");

  const isDropdownActionsVisible = computed(() => {
    return isLast.value && hasDropdownActions.value;
  });

  const isDropdownActionsInGroup = computed(() => {
    return isDropdownActionsVisible.value && !hasDividerBeforeDropdown.value;
  });

  const isDropdownActionsAfterGroup = computed(() => {
    return isDropdownActionsVisible.value && hasDividerBeforeDropdown.value;
  });

  return {
    isDropdownActionsAfterGroup,
    isDropdownActionsInGroup,
  };
}
