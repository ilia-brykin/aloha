import {
  toRef,
} from "vue";

export default function CloseFilterValueAPI(props) {
  const closeFilterValue = toRef(props, "closeFilterValue");
  const disabled = toRef(props, "disabled");
  const filter = toRef(props, "filter");

  const closeCurrentFilterValue = ({ modelValue }) => {
    if (disabled.value) {
      return;
    }
    closeFilterValue.value({
      filter: filter.value,
      modelArray: modelValue.modelArray,
      keyId: modelValue.keyId,
    });
  };

  return {
    closeCurrentFilterValue,
  };
}
