import {
  computed,
} from "vue";

export default function AttributesAPI({
  isDisabled = computed(() => false),
}) {
  const tabindexLocal = computed(() => {
    return isDisabled.value ? -1 : 0;
  });

  return {
    tabindexLocal,
  };
}
