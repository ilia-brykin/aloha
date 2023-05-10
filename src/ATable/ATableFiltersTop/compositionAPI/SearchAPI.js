import {
  toRef,
} from "vue";

export default function SearchAPI(props, { emit }, {
  onClose = () => {},
}) {
  const disabledFilters = toRef(props, "disabledFilters");

  const onSearch = () => {
    if (disabledFilters.value) {
      return;
    }

    onClose();
    emit("startSearch");
  };

  return {
    onSearch,
  };
}
