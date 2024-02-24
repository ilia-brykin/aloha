import {
  computed,
  ref,
  toRef,
} from "vue";

export default function ToggleAPI(props) {
  const useDirective = toRef(props, "useDirective");

  const isOpen = ref(false);
  const wasOpened = ref(false);

  const isOpenComputed = computed(() => {
    if (useDirective.value) {
      return isOpen.value;
    }
    return true;
  });

  const startPopup = () => {
    wasOpened.value = true;
  };

  return {
    isOpenComputed,
    startPopup,
    wasOpened,
  };
}
