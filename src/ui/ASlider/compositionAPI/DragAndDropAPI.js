import {
  computed,
  ref,
  toRef,
} from "vue";

export default function DragAndDropAPI(props, {
  dragging = ref(false),
  firstValue = computed(() => 0),
  getPosition = () => {},
  resetSize = () => {},
  secondValue = computed(() => 0),
  setPosition = () => {},
  sliderSize = ref(1),
}) {
  const disabled = toRef(props, "disabled");
  const showTooltip = toRef(props, "showTooltip");
  const vertical = toRef(props, "vertical");

  const currentX = ref(0);
  const currentY = ref(0);
  const hovering = ref(false);
  const newPosition = ref(0);
  const startPosition = ref(0);
  const startX = ref(0);
  const startY = ref(0);
  const tooltipVisible = ref(false);

  const onFirstButtonDragging = event => {
    if (!dragging.value) {
      return;
    }

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
    setPosition({ percent: newPosition.value, isFirstButton: true });
  };

  const onSecondButtonDragging = event => {
    if (!dragging.value) {
      return;
    }

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
    setPosition({ percent: newPosition.value, isFirstButton: false });
  };

  const onFirstButtonDragEnd = () => {
    if (!dragging.value) {
      return;
    }

    // End dragging
    setTimeout(() => {
      dragging.value = false;
      if (!hovering.value && showTooltip.value) {
        tooltipVisible.value = false;
      }
    }, 0);

    removeEventListenersFirstButton();
  };

  const onSecondButtonDragEnd = () => {
    if (!dragging.value) {
      return;
    }

    // End dragging
    setTimeout(() => {
      dragging.value = false;
      if (!hovering.value && showTooltip.value) {
        tooltipVisible.value = false;
      }
    }, 0);

    removeEventListenersSecondButton();
  };

  const initEventListenersFirstButton = () => {
    document.addEventListener("mousemove", onFirstButtonDragging);
    document.addEventListener("mouseup", onFirstButtonDragEnd);
    document.addEventListener("contextmenu", onFirstButtonDragEnd);
  };

  const initEventListenersSecondButton = () => {
    document.addEventListener("mousemove", onSecondButtonDragging);
    document.addEventListener("mouseup", onSecondButtonDragEnd);
    document.addEventListener("contextmenu", onSecondButtonDragEnd);
  };

  function removeEventListenersFirstButton() {
    document.removeEventListener("mousemove", onFirstButtonDragging);
    document.removeEventListener("mouseup", onFirstButtonDragEnd);
    document.removeEventListener("contextmenu", onFirstButtonDragEnd);
  }

  function removeEventListenersSecondButton() {
    document.removeEventListener("mousemove", onSecondButtonDragging);
    document.removeEventListener("mouseup", onSecondButtonDragEnd);
    document.removeEventListener("contextmenu", onSecondButtonDragEnd);
  }

  const onButtonMouseDown = (event, isFirstButton = true) => {
    if (disabled.value) {
      return;
    }

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
    startPosition.value = isFirstButton ?
      getPosition({ value: firstValue.value }) :
      getPosition({ value: secondValue.value });

    // Add event listeners for dragging
    if (isFirstButton) {
      initEventListenersFirstButton();
    } else {
      initEventListenersSecondButton();
    }
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

  return {
    hovering,
    onButtonMouseDown,
    onButtonMouseEnter,
    onButtonMouseLeave,
    removeEventListenersFirstButton,
    removeEventListenersSecondButton,
    tooltipVisible,
  };
}
