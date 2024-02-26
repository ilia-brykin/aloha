import {
  toRef,
} from "vue";

export default function SearchAPI(props, { emit }) {
  const disabled = toRef(props, "disabled");

  const onSearch = () => {
    if (disabled.value) {
      return;
    }
    emit("startSearch");
  };

  return {
    onSearch,
  };
}
