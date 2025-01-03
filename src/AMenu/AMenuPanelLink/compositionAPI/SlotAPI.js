import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function SlotAPI(props) {
  const item = toRef(props, "item");

  const keySlot = inject("keySlot");

  const currentSlot = computed(() => {
    if (keySlot.value) {
      return get(item.value, keySlot.value);
    }
    return undefined;
  });

  return {
    currentSlot,
  };
}
