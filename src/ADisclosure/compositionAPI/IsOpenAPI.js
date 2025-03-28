import {
  ref,
  toRef,
} from "vue";

export default function IsOpenAPI(props) {
  const isOpenDefault = toRef(props, "isOpenDefault");

  const isOpen = ref(undefined);

  const initIsOpen = () => {
    isOpen.value = isOpenDefault.value;
  };

  return {
    initIsOpen,
    isOpen,
  };
}
