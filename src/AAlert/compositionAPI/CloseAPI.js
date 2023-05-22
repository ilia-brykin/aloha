import {
  ref,
  toRef,
} from "vue";

export default function CloseAPI(props, { emit }) {
  const closable = toRef(props, "closable");
  const removeAlertOnClose = toRef(props, "removeAlertOnClose");

  const isHidden = ref(false);

  const close = () => {
    if (!closable.value) {
      return;
    }
    if (removeAlertOnClose.value) {
      isHidden.value = true;
    }
    emit("close");
  };

  return {
    close,
    isHidden,
  };
}
