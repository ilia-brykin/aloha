import {
  computed,
  toRef,
} from "vue";

export default function SizeAPI(props) {
  const size = toRef(props, "size");

  const sizeClass = computed(() => {
    if (size.value) {
      return `a_modal_${ size.value }`;
    }
    return undefined;
  });

  return {
    sizeClass,
  };
}
