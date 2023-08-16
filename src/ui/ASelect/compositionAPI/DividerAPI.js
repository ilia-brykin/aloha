import {
  computed,
  toRef,
} from "vue";

export default function DividerAPI(props, {
  isMultiselect = computed(() => false),
}) {
  const isSelectAll = toRef(props, "isSelectAll");
  const isDeselectAll = toRef(props, "isDeselectAll");

  const isDividerSelectDeselectVisible = computed(() => {
    return isMultiselect.value && (isSelectAll.value || isDeselectAll.value);
  });

  return {
    isDividerSelectDeselectVisible,
  };
}
