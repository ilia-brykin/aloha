import {
  ref,
  toRef,
} from "vue";

export default function ToggleAPI(props) {
  const isOpenDefault = toRef(props, "isOpenDefault");

  const isOpen = ref(isOpenDefault.value);

  const toggleBtn = () => {
    isOpen.value = !isOpen.value;
  };

  return {
    isOpen,
    toggleBtn,
  };
}
