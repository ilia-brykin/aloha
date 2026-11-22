import FormSlotsAPI from "../../Form/PageForm/compositionAPI/SlotsAPI";
import ModalSlotsAPI from "../../PageModal/compositionAPI/SlotsAPI";

export default function SlotsAPI() {
  const {
    dataSlots: modalSlots,
  } = ModalSlotsAPI();
  const {
    dataSlots: formSlots,
  } = FormSlotsAPI();

  // modalBody is rendered by AModalForm itself, modalBodyPrepend / modalBodyAppend are around it
  const dataSlots = [
    ...modalSlots.filter(item => item.name !== "modalBody"),
    {
      name: "modalBodyPrepend",
      description: "_A_MODAL_FORM_SLOTS_MODAL_BODY_PREPEND_DESCRIPTION_",
    },
    {
      name: "modalBodyAppend",
      description: "_A_MODAL_FORM_SLOTS_MODAL_BODY_APPEND_DESCRIPTION_",
    },
    ...formSlots,
  ];

  return {
    dataSlots,
  };
}
