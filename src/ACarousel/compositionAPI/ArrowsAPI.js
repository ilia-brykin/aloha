import {
  computed,
  toRef,
} from "vue";

export default function ArrowsAPI(props) {
  const arrowsShow = toRef(props, "arrowsShow");
  const data = toRef(props, "data");

  const arrowsShowLocal = computed(() => {
    return arrowsShow.value && data.value?.length > 1;
  });

  return {
    arrowsShowLocal,
  };
}
