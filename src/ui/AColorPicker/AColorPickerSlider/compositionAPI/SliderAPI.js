import {
  computed,
  ref,
  toRef,
} from "vue";

import PointerDragAPI from "../../compositionAPI/PointerDragAPI";
import {
  getValueForKey,
} from "../../compositionAPI/KeyboardStepAPI";

export default function SliderAPI(props, { emit }) {
  const largeStep = toRef(props, "largeStep");
  const max = toRef(props, "max");
  const min = toRef(props, "min");
  const modelValue = toRef(props, "modelValue");
  const step = toRef(props, "step");

  const thumbRef = ref(undefined);
  const trackRef = ref(undefined);

  const percent = computed(() => {
    const RANGE = max.value - min.value;
    return RANGE ? (modelValue.value - min.value) / RANGE * 100 : 0;
  });

  const thumbStyle = computed(() => {
    return {
      left: `${ percent.value }%`,
    };
  });

  const updateValue = value => {
    emit("update:modelValue", Math.round(value / step.value) * step.value);
  };

  const focusThumb = () => {
    thumbRef.value?.focus();
  };

  const {
    onPointerDown,
  } = PointerDragAPI(props, {
    elementRef: trackRef,
    onStart: focusThumb,
    onMove: ({ x }) => updateValue(min.value + x * (max.value - min.value)),
  });

  const onKeydown = $event => {
    const VALUE = getValueForKey({
      key: $event.key,
      shiftKey: $event.shiftKey,
      value: modelValue.value,
      min: min.value,
      max: max.value,
      step: step.value,
      largeStep: largeStep.value,
    });
    if (VALUE === undefined) {
      return;
    }
    $event.preventDefault();
    updateValue(VALUE);
  };

  return {
    onKeydown,
    onPointerDown,
    thumbRef,
    thumbStyle,
    trackRef,
  };
}
