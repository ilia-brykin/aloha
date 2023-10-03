import {
  toRef,
} from "vue";

export default function ShowModalAPI(props, {
  setFocusToModal = () => {},
  setListenerForKeydown = () => {},
}) {
  const isModalHidden = toRef(props, "isModalHidden");

  const showModal = () => {
    if (isModalHidden.value) {
      return;
    }
    document.body.classList.add("a_modal_open");
    setFocusToModal();
    setListenerForKeydown();
  };

  return {
    showModal,
  };
}
