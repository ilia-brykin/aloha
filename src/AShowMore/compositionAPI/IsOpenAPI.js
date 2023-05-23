import {
  ref,
  toRef,
} from "vue";

export default function IsOpenAPI(props) {
  const isOpenDefault = toRef(props, "isOpenDefault");

  const isOpen = ref(isOpenDefault.value);

  return {
    isOpen,
  };
}
