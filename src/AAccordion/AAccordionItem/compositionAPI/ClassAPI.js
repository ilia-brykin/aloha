import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function ClassAPI(props) {
  const item = toRef(props, "item");

  const keyClassBody = inject("keyClassBody");
  const keyClassHeader = inject("keyClassHeader");
  const keyClassButton = inject("keyClassButton");

  const classBodyLocal = computed(() => {
    if (keyClassBody.value) {
      return get(item.value, keyClassBody.value);
    }
    return undefined;
  });

  const classHeaderLocal = computed(() => {
    if (keyClassHeader.value) {
      return get(item.value, keyClassHeader.value);
    }
    return undefined;
  });

  const classButtonLocal = computed(() => {
    if (keyClassButton.value) {
      return get(item.value, keyClassButton.value);
    }
    return undefined;
  });

  return {
    classBodyLocal,
    classButtonLocal,
    classHeaderLocal,
  };
}
