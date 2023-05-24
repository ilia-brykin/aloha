import {
  computed,
  ref,
} from "vue";

export default function ScreenReaderAPI({
  hasTextAndLength = computed(() => false),
  isOpen = ref(false),
}) {
  const textScreenReaderLocal = computed(() => {
    if (hasTextAndLength.value) {
      return undefined;
    }
    return isOpen.value ?
      "_A_SHOW_MORE_LESS_SCREEN_READER_" :
      "_A_SHOW_MORE_MORE_SCREEN_READER_";
  });

  return {
    textScreenReaderLocal,
  };
}
