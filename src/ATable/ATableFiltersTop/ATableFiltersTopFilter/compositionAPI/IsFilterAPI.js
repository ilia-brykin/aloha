import {
  computed,
  toRef,
} from "vue";

export default function IsFilterAPI(props) {
  const filter = toRef(props, "filter");

  const isFilter = computed(() => {
    return !!(filter.value && filter.value.isRender !== false);
  });

  return {
    isFilter,
  };
}
