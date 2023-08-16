import {
  computed,
  toRef,
} from "vue";

import AKeyId from "../const/AKeyId";
import AKeyLabel from "../const/AKeyLabel";

export default function UiCheckboxRadioItemAPI(props) {
  const dataItem = toRef(props, "dataItem");
  const id = toRef(props, "id");
  const itemIndex = toRef(props, "itemIndex");

  const valueLocal = computed(() => {
    return dataItem.value[AKeyId];
  });

  const labelLocal = computed(() => {
    return dataItem.value[AKeyLabel];
  });

  const idLocal = computed(() => {
    return `${ id.value }_${ itemIndex.value }`;
  });

  return {
    idLocal,
    labelLocal,
    valueLocal,
  };
}
