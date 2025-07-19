import {
  computed,
  nextTick,
  onMounted,
  ref,
  toRef,
  watch,
} from "vue";

export default function SliderAPI(props, {
  modelValueLocal,
  changeModel,
}) {
  // References
  const sliderRef = ref(null);
  const firstButtonRef = ref(null);
  const secondButtonRef = ref(null);
  const sliderSize = ref(1);
  const dragging = ref(false);
  const startX = ref(0);
  const startY = ref(0);
  const startPosition = ref(0);
  const newPosition = ref(0);
  const currentX = ref(0);
  const currentY = ref(0);
  const hovering = ref(false);
  const tooltipVisible = ref(false);
  
  // Props
  const min = toRef(props, "min");
  const max = toRef(props, "max");
  const step = toRef(props, "step");
  const range = toRef(props, "range");
  const vertical = toRef(props, "vertical");
  const disabled = toRef(props, "disabled");
  const showTooltip = toRef(props, "showTooltip");
  const formatTooltip = toRef(props, "formatTooltip");
  const marks = toRef(props, "marks");
  const showStops = toRef(props, "showStops");
  
  // Computed values
  const firstValue = computed(() => {
    return range.value ? modelValueLocal.value[0] : modelValueLocal.value;
  });
  
  const secondValue = computed(() => {
    return range.value ? modelValueLocal.value[1] : 0;
  });
  
  const minValue = computed(() => {
    return range.value ? Math.min(firstValue.value, secondValue.value) : min.value;
  });
  
  const maxValue = computed(() => {
    return range.value ? Math.max(firstValue.value, secondValue.value) : firstValue.value;
  });
  
  // Calculate precision based on props
  const precision = computed(() => {
    const precisions = [min.value, max.value, step.value].map(item => {
      const decimal = String(item).split(".")[1];
      return decimal ? decimal.length : 0;
    });
    return Math.max(...precisions);
  });
  
  // Styles
  const runwayStyle = computed(() => {
    return vertical.value ? { height: props.height || "100%" } : {};
  });
  
  const barStyle = computed(() => {
    const barSize = range.value
      ? `${100 * (maxValue.value - minValue.value) / (max.value - min.value)}%`
      : `${100 * (firstValue.value - min.value) / (max.value - min.value)}%`;
    
    const barStart = range.value
      ? `${100 * (minValue.value - min.value) / (max.value - min.value)}%`
      : "0%";
    
    return vertical.value
      ? { height: barSize, bottom: barStart }
      : { width: barSize, left: barStart };
  });
  
  const firstButtonStyle = computed(() => {
    const position = `${(firstValue.value - min.value) / (max.value - min.value) * 100}%`;
    return vertical.value ? { bottom: position } : { left: position };
  });
  
  const secondButtonStyle = computed(() => {
    if (!range.value) return {};
    const position = `${(secondValue.value - min.value) / (max.value - min.value) * 100}%`;
    return vertical.value ? { bottom: position } : { left: position };
  });
  
  // Stops
  const stops = computed(() => {
    if (!showStops.value || min.value > max.value || step.value === 0) {
      return [];
    }
    
    const stopCount = (max.value - min.value) / step.value;
    const stepWidth = 100 * step.value / (max.value - min.value);
    const result = Array.from({ length: stopCount - 1 }).map((_, index) => (index + 1) * stepWidth);
    
    if (range.value) {
      return result.filter(stop => {
        return stop < 100 * (minValue.value - min.value) / (max.value - min.value) ||
               stop > 100 * (maxValue.value - min.value) / (max.value - min.value);
      });
    } else {
      return result.filter(stop => stop > 100 * (firstValue.value - min.value) / (max.value - min.value));
    }
  });
  
  const getStopStyle = (position) => {
    return vertical.value ? { bottom: `${position}%` } : { left: `${position}%` };
  };
  
  // Marks
  const markList = computed(() => {
    if (!marks.value) {
      return [];
    }
    
    const marksKeys = Object.keys(marks.value);
    return marksKeys
      .map(parseFloat)
      .sort((a, b) => a - b)
      .filter(point => point <= max.value && point >= min.value)
      .map(point => ({
        point,
        position: (point - min.value) * 100 / (max.value - min.value),
        mark: marks.value[point]
      }));
  });
  
  // Format tooltip value
  const formatValue = (value) => {
    if (formatTooltip.value && typeof formatTooltip.value === "function") {
      return formatTooltip.value(value);
    }
    return value.toFixed(precision.value);
  };
  
  // Reset size
  const resetSize = () => {
    if (sliderRef.value) {
      sliderSize.value = sliderRef.value[`client${vertical.value ? "Height" : "Width"}`];
    }
  };
  
  // Set position
  const setPosition = (percent, isFirstButton = true) => {
    if (percent === null || isNaN(percent)) return;
    
    // Limit percent to 0-100
    if (percent < 0) {
      percent = 0;
    } else if (percent > 100) {
      percent = 100;
    }
    
    // Calculate value based on percent
    const lengthPerStep = 100 / ((max.value - min.value) / step.value);
    const steps = Math.round(percent / lengthPerStep);
    let value = steps * lengthPerStep * (max.value - min.value) * 0.01 + min.value;
    value = parseFloat(value.toFixed(precision.value));
    
    // Update model value
    if (range.value) {
      const newValue = [...modelValueLocal.value];
      if (isFirstButton) {
        newValue[0] = value;
      } else {
        newValue[1] = value;
      }
      // Ensure values are in correct order if needed
      if (props.range && !props.rangeAllowCross) {
        if (isFirstButton && value > newValue[1]) {
          newValue[0] = newValue[1];
        } else if (!isFirstButton && value < newValue[0]) {
          newValue[1] = newValue[0];
        }
      }
      changeModel(newValue);
    } else {
      changeModel(value);
    }
  };
  
  // Event handlers
  const onSliderClick = (event) => {
    if (disabled.value || dragging.value) return;
    
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
      const firstValuePercent = ((firstValue.value - min.value) / (max.value - min.value)) * 100;
      const secondValuePercent = ((secondValue.value - min.value) / (max.value - min.value)) * 100;
      
      const distToFirst = Math.abs(newPercent - firstValuePercent);
      const distToSecond = Math.abs(newPercent - secondValuePercent);
      
      if (distToFirst <= distToSecond) {
        setPosition(newPercent, true);
      } else {
        setPosition(newPercent, false);
      }
    } else {
      setPosition(newPercent);
    }
    
    // Emit change event
    emitChange();
  };
  
  const onButtonMouseDown = (event, isFirstButton = true) => {
    if (disabled.value) return;
    
    event.preventDefault();
    
    // Start dragging
    dragging.value = true;
    
    // Record start position
    if (vertical.value) {
      startY.value = event.clientY;
    } else {
      startX.value = event.clientX;
    }
    
    // Calculate start position as percentage
    startPosition.value = isFirstButton
      ? ((firstValue.value - min.value) / (max.value - min.value)) * 100
      : ((secondValue.value - min.value) / (max.value - min.value)) * 100;
    
    // Add event listeners for dragging
    document.addEventListener("mousemove", isFirstButton ? onFirstButtonDragging : onSecondButtonDragging);
    document.addEventListener("mouseup", isFirstButton ? onFirstButtonDragEnd : onSecondButtonDragEnd);
    document.addEventListener("contextmenu", isFirstButton ? onFirstButtonDragEnd : onSecondButtonDragEnd);
  };
  
  const onFirstButtonDragging = (event) => {
    if (!dragging.value) return;
    
    // Show tooltip during dragging
    if (showTooltip.value) {
      tooltipVisible.value = true;
    }
    
    // Calculate new position
    resetSize();
    
    let diff;
    if (vertical.value) {
      currentY.value = event.clientY;
      diff = ((startY.value - currentY.value) / sliderSize.value) * 100;
    } else {
      currentX.value = event.clientX;
      diff = ((currentX.value - startX.value) / sliderSize.value) * 100;
    }
    
    newPosition.value = startPosition.value + diff;
    setPosition(newPosition.value, true);
  };
  
  const onSecondButtonDragging = (event) => {
    if (!dragging.value) return;
    
    // Show tooltip during dragging
    if (showTooltip.value) {
      tooltipVisible.value = true;
    }
    
    // Calculate new position
    resetSize();
    
    let diff;
    if (vertical.value) {
      currentY.value = event.clientY;
      diff = ((startY.value - currentY.value) / sliderSize.value) * 100;
    } else {
      currentX.value = event.clientX;
      diff = ((currentX.value - startX.value) / sliderSize.value) * 100;
    }
    
    newPosition.value = startPosition.value + diff;
    setPosition(newPosition.value, false);
  };
  
  const onFirstButtonDragEnd = () => {
    if (!dragging.value) return;
    
    // End dragging
    setTimeout(() => {
      dragging.value = false;
      if (!hovering.value && showTooltip.value) {
        tooltipVisible.value = false;
      }
      emitChange();
    }, 0);
    
    // Remove event listeners
    document.removeEventListener("mousemove", onFirstButtonDragging);
    document.removeEventListener("mouseup", onFirstButtonDragEnd);
    document.removeEventListener("contextmenu", onFirstButtonDragEnd);
  };
  
  const onSecondButtonDragEnd = () => {
    if (!dragging.value) return;
    
    // End dragging
    setTimeout(() => {
      dragging.value = false;
      if (!hovering.value && showTooltip.value) {
        tooltipVisible.value = false;
      }
      emitChange();
    }, 0);
    
    // Remove event listeners
    document.removeEventListener("mousemove", onSecondButtonDragging);
    document.removeEventListener("mouseup", onSecondButtonDragEnd);
    document.removeEventListener("contextmenu", onSecondButtonDragEnd);
  };
  
  const onButtonMouseEnter = () => {
    hovering.value = true;
    if (showTooltip.value) {
      tooltipVisible.value = true;
    }
  };
  
  const onButtonMouseLeave = () => {
    hovering.value = false;
    if (!dragging.value && showTooltip.value) {
      tooltipVisible.value = false;
    }
  };
  
  const onMarkerClick = (position) => {
    if (disabled.value || dragging.value) return;
    
    // Calculate percent from position
    const percent = position;
    
    // Determine which button to move in range mode
    if (range.value) {
      // Calculate distances to both buttons
      const firstValuePercent = ((firstValue.value - min.value) / (max.value - min.value)) * 100;
      const secondValuePercent = ((secondValue.value - min.value) / (max.value - min.value)) * 100;
      
      const distToFirst = Math.abs(percent - firstValuePercent);
      const distToSecond = Math.abs(percent - secondValuePercent);
      
      if (distToFirst <= distToSecond) {
        setPosition(percent, true);
      } else {
        setPosition(percent, false);
      }
    } else {
      setPosition(percent);
    }
    
    // Emit change event
    emitChange();
  };
  
  // Keyboard navigation
  const onButtonKeyDown = (event, isFirstButton = true) => {
    if (disabled.value) return;
    
    let isPreventDefault = true;
    let newPosition;
    const currentValue = isFirstButton ? firstValue.value : secondValue.value;
    const currentPercent = ((currentValue - min.value) / (max.value - min.value)) * 100;
    
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowDown":
        newPosition = currentPercent - (step.value / (max.value - min.value)) * 100;
        break;
      case "ArrowRight":
      case "ArrowUp":
        newPosition = currentPercent + (step.value / (max.value - min.value)) * 100;
        break;
      case "Home":
        newPosition = 0;
        break;
      case "End":
        newPosition = 100;
        break;
      case "PageDown":
        newPosition = currentPercent - (step.value * 4 / (max.value - min.value)) * 100;
        break;
      case "PageUp":
        newPosition = currentPercent + (step.value * 4 / (max.value - min.value)) * 100;
        break;
      default:
        isPreventDefault = false;
        break;
    }
    
    if (isPreventDefault) {
      event.preventDefault();
      if (newPosition !== undefined) {
        setPosition(newPosition, isFirstButton);
        emitChange();
      }
    }
  };
  
  // Emit change event
  const emitChange = async () => {
    await nextTick();
    props.change(range.value ? [firstValue.value, secondValue.value] : firstValue.value);
  };
  
  // Initialize
  onMounted(() => {
    resetSize();
    
    // Initialize model value for range mode
    if (range.value && (!Array.isArray(modelValueLocal.value) || modelValueLocal.value.length !== 2)) {
      changeModel([min.value, max.value]);
    }
  });
  
  // Watch for window resize
  watch(() => [vertical.value, props.height], () => {
    nextTick(resetSize);
  });
  
  return {
    sliderRef,
    firstButtonRef,
    secondButtonRef,
    firstValue,
    secondValue,
    minValue,
    maxValue,
    precision,
    dragging,
    hovering,
    tooltipVisible,
    runwayStyle,
    barStyle,
    firstButtonStyle,
    secondButtonStyle,
    stops,
    getStopStyle,
    markList,
    formatValue,
    resetSize,
    onSliderClick,
    onButtonMouseDown,
    onButtonMouseEnter,
    onButtonMouseLeave,
    onMarkerClick,
    onButtonKeyDown,
  };
}