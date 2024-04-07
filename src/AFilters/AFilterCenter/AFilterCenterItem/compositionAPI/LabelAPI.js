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

  const filterLabelScreenReader = computed(() => {
    if (hasCurrentFilter.value) {
      return filter.value.labelScreenReader;
    }
    return undefined;
  });

  const filterLabelForTitle = computed(() => {
    return filterLabelScreenReader.value || filterLabel.value;
  });

  return {
    filterLabel,
    filterLabelForTitle,
  };
}
