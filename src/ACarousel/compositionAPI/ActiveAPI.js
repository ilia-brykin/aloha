import {
  computed,
  nextTick,
  ref,
  toRef,
  watch,
} from "vue";

import {
  getTabHtmlId,
  prefersReducedMotion,
} from "../utils/utils";

import {
  AKeyId,
} from "../../const/AKeys";
import {
  setFocusToElement,
} from "../../utils/utilsDOM";
import {
  findIndex,
  isNil,
} from "lodash-es";

// fallback, if the event animationend does not come (e.g. the animation was removed with own CSS)
const LEAVING_TIMEOUT = 1500;

export default function ActiveAPI(props, { emit }, {
  count = computed(() => 0),
  dataLocal = computed(() => []),
  isDisabledLocal = computed(() => false),
}) {
  const id = toRef(props, "id");
  const loop = toRef(props, "loop");
  const modelValue = toRef(props, "modelValue");
  const transition = toRef(props, "transition");
  const type = toRef(props, "type");

  const activeId = ref(undefined);
  // the slide that goes out with an animation
  const leavingId = ref(undefined);
  // "next" or "previous": direction of the animation
  const slideDirection = ref("next");

  let leavingTimer = undefined;

  const activeIndex = computed(() => {
    return findIndex(dataLocal.value, [AKeyId, activeId.value]);
  });

  const activeItem = computed(() => {
    return dataLocal.value[activeIndex.value];
  });

  const hasActiveItem = computed(() => {
    return activeIndex.value !== -1;
  });

  const canGoPrevious = computed(() => {
    if (count.value <= 1) {
      return false;
    }
    return loop.value || activeIndex.value > 0;
  });

  const canGoNext = computed(() => {
    if (count.value <= 1) {
      return false;
    }
    return loop.value || activeIndex.value < count.value - 1;
  });

  const hasAnimation = () => {
    return transition.value !== "none" &&
      type.value !== "card" &&
      !prefersReducedMotion();
  };

  const clearLeaving = () => {
    if (leavingTimer) {
      clearTimeout(leavingTimer);
      leavingTimer = undefined;
    }
    leavingId.value = undefined;
  };

  const startLeaving = ({ previousId }) => {
    clearLeaving();
    if (isNil(previousId) || !hasAnimation()) {
      return;
    }
    leavingId.value = previousId;
    leavingTimer = setTimeout(clearLeaving, LEAVING_TIMEOUT);
  };

  const getIndexById = itemId => {
    return findIndex(dataLocal.value, [AKeyId, itemId]);
  };

  const setActiveId = ({ id: newId, direction, isModelUpdate = true }) => {
    const NEW_INDEX = getIndexById(newId);
    if (NEW_INDEX === -1 || newId === activeId.value) {
      return false;
    }
    const PREVIOUS_ID = activeId.value;
    const PREVIOUS_ITEM = activeItem.value;
    const PREVIOUS_INDEX = activeIndex.value;

    slideDirection.value = direction || (NEW_INDEX < PREVIOUS_INDEX ? "previous" : "next");
    startLeaving({ previousId: PREVIOUS_INDEX === -1 ? undefined : PREVIOUS_ID });
    activeId.value = newId;

    emit("change", {
      id: newId,
      item: activeItem.value,
      previousId: PREVIOUS_ID,
      previousItem: PREVIOUS_ITEM,
    });
    if (isModelUpdate) {
      emit("update:modelValue", newId);
    }
    return true;
  };

  const setFocusToTab = ({ index }) => {
    nextTick(() => {
      setFocusToElement({
        selector: `#${ getTabHtmlId({ parentId: id.value, index }) }`,
      });
    });
  };

  const goToIndex = ({ index, direction, withFocus }) => {
    const ITEM = dataLocal.value[index];
    if (!ITEM) {
      return;
    }
    setActiveId({ id: ITEM[AKeyId], direction });
    if (withFocus) {
      setFocusToTab({ index });
    }
  };

  const toNextSlide = ({ withFocus } = {}) => {
    if (!canGoNext.value) {
      return;
    }
    const INDEX = activeIndex.value === -1 || activeIndex.value >= count.value - 1 ?
      0 :
      activeIndex.value + 1;
    goToIndex({ index: INDEX, direction: "next", withFocus });
  };

  const toPreviousSlide = ({ withFocus } = {}) => {
    if (!canGoPrevious.value) {
      return;
    }
    const INDEX = activeIndex.value <= 0 ?
      count.value - 1 :
      activeIndex.value - 1;
    goToIndex({ index: INDEX, direction: "previous", withFocus });
  };

  const toFirstSlide = ({ withFocus } = {}) => {
    goToIndex({ index: 0, direction: "previous", withFocus });
  };

  const toLastSlide = ({ withFocus } = {}) => {
    goToIndex({ index: count.value - 1, direction: "next", withFocus });
  };

  const changeActiveId = ({ id: newId }) => {
    if (isDisabledLocal.value) {
      return;
    }
    setActiveId({ id: newId });
  };

  // expose: by id (the value of key-id or the index without key-id)
  const setActiveItem = newId => {
    return setActiveId({ id: newId });
  };

  const initActiveId = () => {
    const HAS_MODEL = !isNil(modelValue.value);
    if (HAS_MODEL && getIndexById(modelValue.value) !== -1) {
      activeId.value = modelValue.value;
    } else {
      activeId.value = dataLocal.value[0]?.[AKeyId];
      if (HAS_MODEL && !isNil(activeId.value)) {
        emit("update:modelValue", activeId.value);
      }
    }
    emit("init", { id: activeId.value, item: activeItem.value });
  };

  watch(modelValue, newValue => {
    if (isNil(newValue) || newValue === activeId.value) {
      return;
    }
    setActiveId({ id: newValue, isModelUpdate: false });
  });

  // the active slide was removed from data
  watch(hasActiveItem, newValue => {
    if (newValue) {
      return;
    }
    if (count.value) {
      setActiveId({ id: dataLocal.value[0][AKeyId], direction: "previous" });
    } else {
      activeId.value = undefined;
    }
  });

  return {
    activeId,
    activeIndex,
    activeItem,
    canGoNext,
    canGoPrevious,
    changeActiveId,
    clearLeaving,
    initActiveId,
    leavingId,
    setActiveItem,
    slideDirection,
    toFirstSlide,
    toLastSlide,
    toNextSlide,
    toPreviousSlide,
  };
}
