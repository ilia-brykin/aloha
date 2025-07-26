import {
  computed,
  nextTick,
  ref,
  toRef,
  watch,
} from "vue";

import AKeyId from "../../../const/AKeyId";
import {
  findIndex,
  isArray,
  isNil,
} from "lodash-es";

export default function SliderAPI(props, {
  changeModel = () => {},
  dataLocal = computed(() => []),
  maxValueDataLocal = computed(() => 0),
  minValueDataLocal = computed(() => 0),
}) {
  const disabled = toRef(props, "disabled");
  const height = toRef(props, "height");
  const modelValue = toRef(props, "modelValue");
  const range = toRef(props, "range");
  const rangeAllowCross = toRef(props, "rangeAllowCross");
  const vertical = toRef(props, "vertical");

  const dragging = ref(false);
  const firstButtonRef = ref(null);
  const secondButtonRef = ref(null);
  const sliderRef = ref(null);
  const sliderSize = ref(1);

  const lastIndexDataLocal = computed(() => {
    return dataLocal.value.length - 1;
  });

  const stepsPerPercent = computed(() => {
    return lastIndexDataLocal.value / 100;
  });

  const getPosition = ({ value }) => {
    if (!dataLocal.value.length) {
      return 0;
    }

    const valueIndex = findIndex(dataLocal.value, item => item[AKeyId] === value);
    if (valueIndex === -1) {
      return 0;
    }

    const percentage = (valueIndex / (lastIndexDataLocal.value)) * 100;

    return percentage;
  };

  const modelValueLocal = computed(() => {
    if (range.value) {
      if (!isArray(modelValue.value)) {
        return [];
      }

      return modelValue.value;
    }

    return modelValue.value;
  });

  const firstValue = computed(() => {
    return range.value ? modelValueLocal.value[0] : modelValueLocal.value;
  });

  const secondValue = computed(() => {
    return range.value ? modelValueLocal.value[1] : 0;
  });

  const minValue = computed(() => {
    return range.value ? Math.min(firstValue.value, secondValue.value) : minValueDataLocal.value;
  });

  const maxValue = computed(() => {
    return range.value ? Math.max(firstValue.value, secondValue.value) : firstValue.value;
  });

  // Reset size
  const resetSize = () => {
    if (sliderRef.value) {
      sliderSize.value = sliderRef.value[`client${ vertical.value ? "Height" : "Width" }`];
    }
  };

  const setValue = ({ index, isFirstButton = true }) => {
    if (isNil(index) || index === -1) {
      return;
    }

    if (index < 0) {
      index = 0;
    } else if (index > lastIndexDataLocal.value) {
      index = lastIndexDataLocal.value;
    }

    const value = dataLocal.value?.[index][AKeyId];
    // Update model value
    if (range.value) {
      const newValue = [...modelValueLocal.value];
      if (isFirstButton) {
        newValue[0] = value;
      } else {
        newValue[1] = value;
      }
      // Ensure values are in correct order if needed
      if (range.value && !rangeAllowCross.value) {
        if (isFirstButton && value > newValue[1]) {
          newValue[0] = newValue[1];
        } else if (!isFirstButton && value < newValue[0]) {
          newValue[1] = newValue[0];
        }
      }
      changeModel({ model: newValue });
    } else {
      changeModel({ model: value });
    }
  };

  // Set position
  const setPosition = ({ percent, isFirstButton = true }) => {
    if (percent === null || isNaN(percent)) {
      return;
    }

    // Limit percent to 0-100
    if (percent < 0) {
      percent = 0;
    } else if (percent > 100) {
      percent = 100;
    }
    const INDEX = (percent * stepsPerPercent.value).toFixed();
    setValue({ index: INDEX, isFirstButton });
  };

  // Event handlers
  const onSliderClick = event => {
    if (disabled.value ||
      dragging.value) {
      return;
    }

    resetSize();

    let newPercent;
    if (vertical.value) {
      const sliderRect = sliderRef.value.getBoundingClientRect();
      const sliderBottom = sliderRect.bottom;
      newPercent = ((sliderBottom - event.clientY) / sliderSize.value) * 100;
    } else {
      const sliderRect = sliderRef.value.getBoundingClientRect();
      const sliderLeft = sliderRect.left;
      newPercent = ((event.clientX - sliderLeft) / sliderSize.value) * 100;
    }

    // Determine which button to move in range mode
    if (range.value) {
      // Calculate distances to both buttons
      const firstValuePercent = getPosition({ value: firstValue.value });
      const secondValuePercent = getPosition({ value: secondValue.value });

      const distToFirst = Math.abs(newPercent - firstValuePercent);
      const distToSecond = Math.abs(newPercent - secondValuePercent);

      if (distToFirst <= distToSecond) {
        setPosition({ percent: newPercent, isFirstButton: true });
      } else {
        setPosition({ percent: newPercent, isFirstButton: false });
      }
    } else {
      setPosition({ percent: newPercent, isFirstButton: true });
    }
  };

  const onMarkerClick = position => {
    if (disabled.value || dragging.value) {
      return;
    }

    // Calculate percent from position
    const percent = position;

    // Determine which button to move in range mode
    if (range.value) {
      // Calculate distances to both buttons
      const firstValuePercent = getPosition({ value: firstValue.value });
      const secondValuePercent = getPosition({ value: secondValue.value });

      const distToFirst = Math.abs(percent - firstValuePercent);
      const distToSecond = Math.abs(percent - secondValuePercent);

      if (distToFirst <= distToSecond) {
        setPosition({ percent, isFirstButton: true });
      } else {
        setPosition({ percent, isFirstButton: false });
      }
    } else {
      setPosition({ percent, isFirstButton: true });
    }
  };

  // Keyboard navigation
  const onButtonKeyDown = (event, isFirstButton = true) => {
    if (disabled.value) {
      return;
    }

    let isPreventDefault = true;
    let newIndex;
    const currentValue = isFirstButton ?
      firstValue.value :
      secondValue.value;
    const currentIndex = findIndex(dataLocal.value, item => item[AKeyId] === currentValue);

    switch (event.key) {
    case "ArrowLeft":
    case "ArrowDown":
      newIndex = currentIndex - 1;
      break;
    case "ArrowRight":
    case "ArrowUp":
      newIndex = currentIndex + 1;
      break;
    case "Home":
      newIndex = 0;
      break;
    case "End":
      newIndex = lastIndexDataLocal.value;
      break;
    case "PageDown":
      newIndex = currentIndex - 4;
      break;
    case "PageUp":
      newIndex = currentIndex + 4;
      break;
    default:
      isPreventDefault = false;
      break;
    }

    if (isPreventDefault) {
      event.preventDefault();
      if (newIndex !== currentIndex) {
        setValue({ index: newIndex, isFirstButton });
      }
    }
  };

  const initSlider = () => {
    resetSize();

    // Initialize model value for range mode
    if (range.value && (!isArray(modelValueLocal.value) || modelValueLocal.value.length !== 2)) {
      changeModel({ model: [minValueDataLocal.value, maxValueDataLocal.value] });
    }
  };

  // Watch for window resize
  watch(() => [vertical.value, height.value], () => {
    nextTick(resetSize);
  });

  return {
    dragging,
    firstButtonRef,
    firstValue,
    getPosition,
    initSlider,
    maxValue,
    minValue,
    modelValueLocal,
    onButtonKeyDown,
    onMarkerClick,
    onSliderClick,
    resetSize,
    secondButtonRef,
    secondValue,
    setPosition,
    sliderRef,
    sliderSize,
  };
}
