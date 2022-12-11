import {
  computed,
  toRef,
} from "vue";

export default function SizesAPI(props) {
  const centerX = toRef(props, "centerX");
  const standWidth = toRef(props, "standWidth");
  const pipesWidth = toRef(props, "pipesWidth");

  const xTop = computed(() => {
    return centerX.value - pipesWidth.value / 2;
  });

  const xBottom = computed(() => {
    return centerX.value - standWidth.value / 2;
  });

  return {
    xTop,
    xBottom,
  };
}
