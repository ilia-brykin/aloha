import {
  computed,
  toRef,
} from "vue";

export default function LabelAPI(props) {
  const filter = toRef(props, "filter");

  const labelClass = "a_column a_column_12_mobile a_column_12_tablet a_column_4_desktop a_column_2_widescreen a_column_2_fullhd";

  const isLabelInComponentVisible = computed(() => {
    return !(filter.value.label && filter.value.type !== "oneCheckbox");
  });

  return {
    isLabelInComponentVisible,
    labelClass,
  };
}
