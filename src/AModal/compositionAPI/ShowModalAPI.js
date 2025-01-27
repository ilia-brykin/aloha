import {
  toRef,
} from "vue";

export default function ShowModalAPI(props, {
  checkOpenedModals = () => {
  },
  setFocusByShowModal = () => {
  },
  setListenerForKeydown = () => {
  },
}) {
  const isModalHidden = toRef(props, "isModalHidden");

  const showModal = () => {
    if (isModalHidden.value) {
      return;
    }

    checkOpenedModals();
    document.body.classList.add("a_modal_open");
    setFocusByShowModal();
    setListenerForKeydown();
  };

  return {
    showModal,
  };
}
