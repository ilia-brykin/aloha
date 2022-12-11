import {
  computed,
  toRef,
} from "vue";

export default function SizesAPI(props) {
  const yStandTop = toRef(props, "yStandTop");
  const pipesWidth = toRef(props, "pipesWidth");
  const centerX = toRef(props, "centerX");
  const balanceWidth = toRef(props, "balanceWidth");
  const balanceCircleRadius = toRef(props, "balanceCircleRadius");
  const balanceTopHeight = toRef(props, "balanceTopHeight");
  const degree = toRef(props, "degree");

  const yBalance = computed(() => {
    return yStandTop.value - balanceCircleRadius.value - pipesWidth.value / 2;
  });

  const widthBalancePipe = computed(() => {
    return balanceWidth.value / 2;
  });

  const xBalanceLeft = computed(() => {
    return centerX.value - widthBalancePipe.value - balanceCircleRadius.value;
  });

  const xBalanceRight = computed(() => {
    return centerX.value + balanceCircleRadius.value;
  });

  const yBalanceCenter = computed(() => {
    return yStandTop.value - balanceCircleRadius.value;
  });

  const xBalanceTopHeight = computed(() => {
    return centerX.value - pipesWidth.value / 2;
  });

  const yBalanceTopHeight = computed(() => {
    return yBalanceCenter.value - balanceCircleRadius.value - balanceTopHeight.value;
  });

  const transformRotate = computed(() => {
    return `rotate(${ degree.value }, ${ centerX.value }, ${ yBalanceCenter.value })`;
  });

  return {
    transformRotate,
    widthBalancePipe,
    xBalanceLeft,
    xBalanceRight,
    xBalanceTopHeight,
    yBalance,
    yBalanceCenter,
    yBalanceTopHeight,
  };
}
