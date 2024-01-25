import {
  computed,
  toRef,
} from "vue";

export default function LabelAPI(props) {
  const filter = toRef(props, "filter");

  const labelClass = "a_filters_top__filter_ui_label";

  const isLabelInComponentVisible = computed(() => {
    return !(filter.value.label && filter.value.type !== "oneCheckbox");
  });

  return {
    isLabelInComponentVisible,
    labelClass,
  };
}
