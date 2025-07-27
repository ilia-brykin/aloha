import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  setFocusToElement,
} from "../../../utils/utilsDOM";

export default function DragAndDropAPI(props, {
  dragging = ref(false),
  firstValue = computed(() => 0),
  getPosition = () => {},
  htmlIdLocal = computed(() => ""),
  resetSize = () => {},
  secondButtonHtmlId = computed(() => ""),
  secondValue = computed(() => 0),
  setPosition = () => {},
  sliderSize = ref(1),
}) {
  const disabled = toRef(props, "disabled");
  const vertical = toRef(props, "vertical");

  const currentX = ref(0);
  const currentY = ref(0);
  const draggingFirst = ref(false);
  const draggingSecond = ref(false);
  const hoveringFirst = ref(false);
  const hoveringSecond = ref(false);
  const newPosition = ref(0);
  const startPosition = ref(0);
  const startX = ref(0);
  const startY = ref(0);

  const onFirstButtonDragging = event => {
    if (!dragging.value) {
      return;
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
      draggingFirst.value = false;
      setFocusToElement({
        selector: `#${ htmlIdLocal.value }`,
      });
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
      draggingSecond.value = false;
      setFocusToElement({
        selector: `#${ secondButtonHtmlId.value }`,
      });
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
    if (isFirstButton) {
      draggingFirst.value = true;
    } else {
      draggingSecond.value = true;
    }

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

  const onButtonMouseEnter = isFirstButton => {
    if (isFirstButton) {
      hoveringFirst.value = true;
    } else {
      hoveringSecond.value = true;
    }
  };

  const onButtonMouseLeave = isFirstButton => {
    if (isFirstButton) {
      hoveringFirst.value = false;
    } else {
      hoveringSecond.value = false;
    }
  };

  return {
    draggingFirst,
    draggingSecond,
    hoveringFirst,
    hoveringSecond,
    onButtonMouseDown,
    onButtonMouseEnter,
    onButtonMouseLeave,
    removeEventListenersFirstButton,
    removeEventListenersSecondButton,
  };
}
