import {
  computed,
  onBeforeUnmount,
  ref,
  watch,
} from "vue";

export default function TimeListAPI({
  commit = () => {},
  htmlIdLocal = computed(() => ""),
  texts = ref({}),
}) {
  // the key of the time field with the open list
  const openTimeKey = ref(null);
  const timeButtonRefs = {};

  const closeTimeList = ({ focusButton = true, preventScroll = false } = {}) => {
    const KEY = openTimeKey.value;
    openTimeKey.value = null;
    if (focusButton && KEY) {
      timeButtonRefs[KEY]?.focus({ preventScroll });
    }
  };

  const toggleTimeList = field => {
    openTimeKey.value = openTimeKey.value === field.key ? null : field.key;
  };

  const selectTime = (field, option) => {
    texts.value[field.key] = option.text;
    closeTimeList();
    commit();
  };

  // a click outside the list and its button closes the list
  const onDocumentPointerdown = $event => {
    const KEY = openTimeKey.value;
    if (!KEY ||
      timeButtonRefs[KEY]?.contains($event.target) ||
      $event.target.closest?.(`.a_date_input__time_list[data-owner="${ htmlIdLocal.value }"]`)) {
      return;
    }
    closeTimeList({ focusButton: false });
  };

  watch(openTimeKey, (key, keyOld) => {
    if (key && !keyOld) {
      document.addEventListener("pointerdown", onDocumentPointerdown);
    } else if (!key) {
      document.removeEventListener("pointerdown", onDocumentPointerdown);
    }
  });

  onBeforeUnmount(() => {
    document.removeEventListener("pointerdown", onDocumentPointerdown);
  });

  return {
    closeTimeList,
    openTimeKey,
    selectTime,
    timeButtonRefs,
    toggleTimeList,
  };
}
