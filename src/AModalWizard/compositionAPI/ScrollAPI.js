import {
  ref,
  toRef,
} from "vue";

export default function ScrollAPI(props) {
  const scrollToTopOnStepChange = toRef(props, "scrollToTopOnStepChange");

  const modalBodyRef = ref(undefined);

  const scrollToTop = () => {
    if (!scrollToTopOnStepChange.value) {
      return;
    }

    modalBodyRef.value?.modalRef?.querySelector(".a_modal_body")?.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return {
    modalBodyRef,
    scrollToTop,
  };
}
