import {
  computed,
  toRef,
} from "vue";

export default function SlotAPI(props) {
  const column = toRef(props, "column");
  const isFooter = toRef(props, "isFooter");

  const slotName = computed(() => {
    if (isFooter.value) {
      return column.value.footerSlot;
    }
    return column.value.slot;
  });

  const slotNameAfter = computed(() => {
    if (isFooter.value) {
      return column.value.footerSlotAfter;
    }
    return column.value.slotAfter;
  });

  const hasSlot = computed(() => {
    return !!slotName.value;
  });

  const hasSlotAfter = computed(() => {
    return !!slotNameAfter.value;
  });

  return {
    hasSlot,
    hasSlotAfter,
    slotName,
    slotNameAfter,
  };
}
