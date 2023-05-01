import {
  ref,
  toRef,
} from "vue";

export default function CloseAPI(props, { emit }) {
  const closableFromOutside = toRef(props, "closableFromOutside");

  const isHidden = ref(false);

  const close = () => {
    if (!closableFromOutside.value) {
      isHidden.value = true;
    }
    emit("close");
  };

  return {
    close,
    isHidden,
  };
}
