import {
  computed,
  toRef,
} from "vue";

export default function ClassAPI(props) {
  const size = toRef(props, "size");

  const classSize = computed(() => {
    if (size.value) {
      return `a_spinner_size_${ size.value }`;
    }

    return undefined;
  });

  return {
    classSize,
  };
}
