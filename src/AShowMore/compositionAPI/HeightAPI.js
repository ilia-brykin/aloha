import {
  computed,
  ref,
  toRef,
} from "vue";

export default function HeightAPI(props, {
  isOpen = ref(false),
}) {
  const height = toRef(props, "height");

  const maxHeightStyle = computed(() => {
    if (isOpen.value) {
      return undefined;
    }
    if (height.value === 0) {
      return "max-height: none;";
    }
    return `max-height: ${ height.value }px`;
  });

  return {
    maxHeightStyle,
  };
}
