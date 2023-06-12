import {
  computed,
  toRef,
} from "vue";

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

  return {
    updateOffset,
    updateOffsetFirst,
    updateOffsetLast,
    updateOffsetNext,
    updateOffsetPrevious,
  };
}
