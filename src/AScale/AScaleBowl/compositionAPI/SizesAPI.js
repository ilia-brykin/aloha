import {
  computed,
  toRef,
} from "vue";

export default function SizesAPI(props) {
  const direction = toRef(props, "direction");
  const degree = toRef(props, "degree");
  const balanceWidth = toRef(props, "balanceWidth");
  const balanceCircleRadius = toRef(props, "balanceCircleRadius");
  const yStandTop = toRef(props, "yStandTop");
  const bowlThreadHeight = toRef(props, "bowlThreadHeight");
  const pipesWidth = toRef(props, "pipesWidth");
  const centerX = toRef(props, "centerX");
  const bowlWidth = toRef(props, "bowlWidth");

  const radius = computed(() => {
    return balanceWidth.value / 2 + balanceCircleRadius.value;
  });

  const yDefault = computed(() => {
    return yStandTop.value + bowlThreadHeight.value - pipesWidth.value / 2 - balanceCircleRadius.value + 2;
  });

  const degreeLocal = computed(() => {
    return direction.value === "right" ? degree.value : degree.value + 180;
  });

  const xCenterDiffLeft = computed(() => {
    return balanceWidth.value / 2 + bowlWidth.value / 2 + balanceCircleRadius.value - 2;
  });

  const xCenterDiffRight = computed(() => {
    return balanceWidth.value / 2 - bowlWidth.value / 2 + balanceCircleRadius.value - 1;
  });

  const xDefault = computed(() => {
    if (direction.value === "left") {
      return centerX.value - xCenterDiffLeft.value + radius.value;
    }
    return centerX.value + xCenterDiffRight.value - radius.value;
  });

  const x = computed(() => {
    if (direction.value === "right") {
      return (radius.value * Math.cos(degreeLocal.value * Math.PI / 180)) + xDefault.value;
    }
    return (radius.value * Math.cos(degreeLocal.value * Math.PI / 180)) + xDefault.value;
  });

  const y = computed(() => {
    return (radius.value * Math.sin(degreeLocal.value * Math.PI / 180)) + yDefault.value;
  });

  return {
    x,
    y,
  };
}
