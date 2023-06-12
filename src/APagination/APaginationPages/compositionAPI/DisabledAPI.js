import {
  computed,
  toRef,
} from "vue";

export default function DisabledAPI(props, {
  currentItem = computed(() => 1),
  maxItems = computed(() => 1),
}) {
  const disabled = toRef(props, "disabled");

  const disabledButtonFirstPage = computed(() => {
    return disabled.value || currentItem.value === 1;
  });

  const disabledButtonLastPage = computed(() => {
    return disabled.value || currentItem.value === maxItems.value;
  });

  return {
    disabledButtonFirstPage,
    disabledButtonLastPage,
  };
}
