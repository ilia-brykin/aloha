import {
  computed,
  toRef,
} from "vue";

export default function LabelAPI(props, {
  hasCurrentFilter = computed(() => false),
}) {
  const filter = toRef(props, "filter");

  const filterLabel = computed(() => {
    if (hasCurrentFilter.value) {
      return filter.value.label;
    }
    return "";
  });

  return {
    filterLabel,
  };
}
