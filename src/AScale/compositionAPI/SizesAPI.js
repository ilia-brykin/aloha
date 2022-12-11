import {
  computed,
  toRef,
} from "vue";

export default function SizesAPI(props) {
  const viewBoxWidth = toRef(props, "viewBoxWidth");
  const viewBoxHeight = toRef(props, "viewBoxHeight");
  const pipesWidth = toRef(props, "pipesWidth");
  const standHeight = toRef(props, "standHeight");

  const viewBoxLocal = computed(() => {
    return `0 0 ${ viewBoxWidth.value } ${ viewBoxHeight.value }`;
  });

  const centerX = computed(() => {
    return viewBoxWidth.value / 2;
  });

  const yStandBottom = computed(() => {
    return viewBoxHeight.value - pipesWidth.value;
  });

  const yStandTop = computed(() => {
    return yStandBottom.value - standHeight.value + 1;
  });

  return {
    centerX,
    viewBoxLocal,
    yStandBottom,
    yStandTop,
  };
}
