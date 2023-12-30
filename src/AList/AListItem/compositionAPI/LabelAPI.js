import {
  computed,
  toRef,
} from "vue";

import {
  get,
  isArray,
  isFunction,
} from "lodash-es";

export default function LabelAPI(props) {
  const isDataSimpleArray = toRef(props, "isDataSimpleArray");
  const item = toRef(props, "item");
  const itemIndex = toRef(props, "itemIndex");
  const keyLabel = toRef(props, "keyLabel");
  const keyLabelCallback = toRef(props, "keyLabelCallback");

  const label = computed(() => {
    if (isDataSimpleArray.value) {
      if (isArray(item.value)) {
        return item.value?.[0] || "";
      }
      return item.value;
    }
    if (isFunction(keyLabelCallback.value)) {
      return keyLabelCallback.value({ item: item.value, itemIndex: itemIndex.value });
    }
    if (keyLabel.value) {
      return get(item.value, keyLabel.value);
    }
    return item.value;
  });

  return {
    label,
  };
}
