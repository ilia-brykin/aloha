import {
  computed,
  toRef,
} from "vue";

export default function VisibleAPI(props) {
  const filtersVisible = toRef(props, "filtersVisible");
  const filtersGroup = toRef(props, "filtersGroup");

  const isBtnToggleVisible = computed(() => {
    return !!(filtersVisible.value.length || filtersGroup.value.alwaysVisible.length);
  });

  return {
    isBtnToggleVisible,
  };
}
