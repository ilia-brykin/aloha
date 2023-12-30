import {
  computed,
  toRef,
} from "vue";

import filterList from "../../filters/list";

export default function PlainTextAPI(props) {
  const data = toRef(props, "data");
  const isDataSimpleArray = toRef(props, "isDataSimpleArray");
  const keyChildren = toRef(props, "keyChildren");
  const keyLabel = toRef(props, "keyLabel");
  const keyLabelCallback = toRef(props, "keyLabelCallback");
  const separator = toRef(props, "separator");

  const plainText = computed(() => {
    return filterList(data.value, {
      isHtml: false,
      keyLabel: keyLabel.value,
      keyLabelCallback: keyLabelCallback.value,
      keyChildren: keyChildren.value,
      isSimpleArray: isDataSimpleArray.value,
      separator: separator.value,
    });
  });

  return {
    plainText,
  };
}
