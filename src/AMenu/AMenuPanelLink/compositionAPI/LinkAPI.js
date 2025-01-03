import {
  computed,
  toRef,
} from "vue";

export default function LinkAPI(props) {
  const item = toRef(props, "item");

  const isLinkDisabled = computed(() => {
    return !!item.value.disabled;
  });

  const toLocal = computed(() => {
    if (isLinkDisabled.value) {
      return "#";
    }
    return item.value.to;
  });

  const isItemLink = computed(() => {
    return !!item.value.to;
  });

  return {
    isItemLink,
    isLinkDisabled,
    toLocal,
  };
}
