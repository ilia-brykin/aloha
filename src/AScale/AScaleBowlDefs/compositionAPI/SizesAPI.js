import {
  computed,
  toRef,
} from "vue";

export default function SizesAPI(props) {
  const bowlThreadHeight = toRef(props, "bowlThreadHeight");
  const bowlThreadWidth = toRef(props, "bowlThreadWidth");
  const bowlThreadPaddingX = toRef(props, "bowlThreadPaddingX");
  const bowlWidth = toRef(props, "bowlWidth");
  const bowlRadius = toRef(props, "bowlRadius");

  const bowlThreadPoints = computed(() => {
    const xStart = bowlThreadPaddingX.value;
    const xMiddle = bowlThreadPaddingX.value + bowlThreadWidth.value / 2;
    const xEnd = bowlThreadPaddingX.value + bowlThreadWidth.value;
    const yStart = 1;
    const yMiddle = yStart - bowlThreadHeight.value;
    return `${ xStart },${ yStart } ${ xMiddle },${ yMiddle } ${ xEnd },${ yStart }`;
  });

  const bowlD = computed(() => {
    return `m0,0 a${ bowlRadius.value },${ bowlRadius.value } 0 1,0 ${ bowlWidth.value },0 z`;
  });

  return {
    bowlD,
    bowlThreadPoints,
  };
}
