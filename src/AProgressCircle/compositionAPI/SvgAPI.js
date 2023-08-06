import {
  computed,
  toRef,
} from "vue";

export default function SvgAPI(props) {
  const rotate = toRef(props, "rotate");
  const strokeWidth = toRef(props, "strokeWidth");

  const svgViewBox = computed(() => {
    const WIDTH = 100 + strokeWidth.value;

    return `0 0 ${ WIDTH } ${ WIDTH }`;
  });

  const svgTransform = computed(() => {
    const DEG = rotate.value - 90;
    return `transform: rotate(${ DEG }deg);`;
  });

  return {
    svgTransform,
    svgViewBox,
  };
}
