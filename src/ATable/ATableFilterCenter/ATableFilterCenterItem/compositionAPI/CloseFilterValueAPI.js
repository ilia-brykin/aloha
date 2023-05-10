import {
  toRef,
} from "vue";

export default function CloseFilterValueAPI(props) {
  const closeFilterValue = toRef(props, "closeFilterValue");
  const disabledFilters = toRef(props, "disabledFilters");
  const filter = toRef(props, "filter");

  const closeCurrentFilterValue = ({ currentModel }) => {
    if (disabledFilters.value) {
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
