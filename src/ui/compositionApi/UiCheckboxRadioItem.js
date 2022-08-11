import {
  computed,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function UiCheckboxRadioItem(props) {
  const dataItem = toRef(props, "dataItem");

  const keyId = toRef(props, "keyId");
  const valueLocal = computed(() => {
    return get(dataItem.value, keyId.value);
  });

  const keyLabel = toRef(props, "keyLabel");
  const labelLocal = computed(() => {
    return get(dataItem.value, keyLabel.value);
  });

  const id = toRef(props, "id");
  const itemIndex = toRef(props, "itemIndex");
  const idLocal = computed(() => {
    return `${ id.value }_${ itemIndex.value }`;
  });

  return {
    idLocal,
    labelLocal,
    valueLocal,
  };
}
