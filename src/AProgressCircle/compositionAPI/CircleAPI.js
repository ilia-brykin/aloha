import {
  computed,
  toRef,
} from "vue";

export default function CircleAPI(props, {
  widthPercent = computed(() => 0),
}) {
  const strokeWidth = toRef(props, "strokeWidth");

  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const valueCircumference = computed(() => {
    return (widthPercent.value * circumference) / 100;
  });

  const strokeDasharray = computed(() => {
    return `${ valueCircumference.value }px ${ circumference - valueCircumference.value }px`;
  });

  const circleStyles = computed(() => {
    return `stroke-dasharray: ${ strokeDasharray.value }; stroke-dashoffset: 0px;`;
  });

  const cxCy = computed(() => {
    return radius + (strokeWidth.value / 2);
  });

  return {
    circleStyles,
    cxCy,
    radius,
  };
}
