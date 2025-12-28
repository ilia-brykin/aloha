import {
  computed,
  toRef,
} from "vue";

export default function BlocksAPI(props) {
  const length = toRef(props, "length");
  const offset = toRef(props, "offset");

  const blockNumbers = computed(() => Array.from(
    {
      length: length.value,
    },
    (_, index) => offset.value + index + 1,
  ));

  return {
    blockNumbers,
  };
}
