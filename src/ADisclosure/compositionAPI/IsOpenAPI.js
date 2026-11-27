import {
  ref,
  toRef,
  watch,
} from "vue";

import {
  isUndefined,
} from "lodash-es";

export default function IsOpenAPI(props) {
  const isOpenDefault = toRef(props, "isOpenDefault");
  const modelValue = toRef(props, "modelValue");

  const isOpen = ref(undefined);

  const initIsOpen = () => {
    isOpen.value = isUndefined(modelValue.value) ? isOpenDefault.value : modelValue.value;
  };

  // v-model: the parent opens and closes
  watch(modelValue, value => {
    if (!isUndefined(value)) {
      isOpen.value = value;
    }
  });

  return {
    initIsOpen,
    isOpen,
  };
}
