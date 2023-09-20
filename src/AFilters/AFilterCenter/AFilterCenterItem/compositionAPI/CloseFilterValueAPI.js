import {
  toRef,
} from "vue";

export default function CloseFilterValueAPI(props) {
  const closeFilterValue = toRef(props, "closeFilterValue");
  const disabled = toRef(props, "disabled");
  const filter = toRef(props, "filter");

  const closeCurrentFilterValue = ({ currentModel }) => {
    if (disabled.value) {
      return;
    }
    closeFilterValue.value({
      filter: filter.value,
      currentModel: currentModel,
    });
  };

  return {
    closeCurrentFilterValue,
  };
}
