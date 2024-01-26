import {
  computed,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";

export default function UpdateOffsetAPI(props, { emit }, {
  currentItem = computed(() => 1),
  disabledButtonFirstPage = computed(() => false),
  disabledButtonLastPage = computed(() => false),
  maxItems = computed(() => 1),
}) {
  const disabled = toRef(props, "disabled");
  const limit = toRef(props, "limit");
  const offset = toRef(props, "offset");

  const updateOffset = item => {
    if (disabled.value || item === currentItem.value) {
      return;
    }
    const OFFSET = (item - 1) * limit.value;
    emit("update:offset", OFFSET);
  };

  const updateOffsetFirst = () => {
    if (disabledButtonFirstPage.value) {
      return;
    }
    emit("update:offset", 0);
  };

  const updateOffsetPrevious = () => {
    if (disabledButtonFirstPage.value) {
      return;
    }
    emit("update:offset", offset.value - limit.value);
  };

  const updateOffsetLast = () => {
    if (disabledButtonLastPage.value) {
      return;
    }
    emit("update:offset", (maxItems.value - 1) * limit.value);
  };

  const updateOffsetNext = () => {
    if (disabledButtonLastPage.value) {
      return;
    }
    emit("update:offset", offset.value + limit.value);
  };

  const keyDownUpdateOffsetFirst = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      updateOffsetFirst();
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  const keyDownUpdateOffset = ($event, item) => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      updateOffset(item);
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  const keyDownUpdateOffsetPrevious = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      updateOffsetPrevious();
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  const keyDownUpdateOffsetLast = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      updateOffsetLast();
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  const keyDownUpdateOffsetNext = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      updateOffsetNext();
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  return {
    keyDownUpdateOffset,
    keyDownUpdateOffsetFirst,
    keyDownUpdateOffsetLast,
    keyDownUpdateOffsetNext,
    keyDownUpdateOffsetPrevious,
    updateOffset,
    updateOffsetFirst,
    updateOffsetLast,
    updateOffsetNext,
    updateOffsetPrevious,
  };
}
