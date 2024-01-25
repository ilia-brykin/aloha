import {
  toRef,
} from "vue";

export default function SearchAPI(props, { emit }, {
  onClose = () => {},
}) {
  const disabled = toRef(props, "disabled");

  const onSearch = () => {
    if (disabled.value) {
      return;
    }

    onClose();
    emit("startSearch");
  };

  return {
    onSearch,
  };
}
