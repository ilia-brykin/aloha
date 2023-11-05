import {
  computed,
  toRef,
} from "vue";

export default function ViewsAPI(props, { emit }) {
  const useViewSlot = toRef(props, "useViewSlot");

  const updateViewCurrentLocal = model => {
    emit("updateViewCurrent", model);
  };

  const viewSlotLocal = computed(() => {
    return useViewSlot.value ? "viewSlot" : undefined;
  });

  return {
    updateViewCurrentLocal,
    viewSlotLocal,
  };
}
