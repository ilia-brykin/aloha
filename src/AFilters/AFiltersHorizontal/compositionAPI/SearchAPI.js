import {
  toRef,
} from "vue";

export default function SearchAPI(props, { emit }, {
  closeDropdown = () => {},
}) {
  const disabled = toRef(props, "disabled");

  const onSearch = () => {
    if (disabled.value) {
      return;
    }

    closeDropdown();
    emit("startSearch");
  };

  return {
    onSearch,
  };
}
