import {
  computed,
  toRef,
} from "vue";

export default function TextAPI(props) {
  const isCreate = toRef(props, "isCreate");

  const headerText = computed(() => {
    return isCreate.value ?
      "_A_VALIDATED_JSON_MODAL_CREATE_HEADER_{{elementLabel}}_" :
      "_A_VALIDATED_JSON_MODAL_UPDATE_HEADER_{{elementLabel}}_";
  });

  const saveButtonText = computed(() => {
    return isCreate.value ?
      "_A_VALIDATED_JSON_MODAL_CREATE_BTN_SAVE_{{elementLabel}}_" :
      "_A_VALIDATED_JSON_MODAL_UPDATE_BTN_SAVE_{{elementLabel}}_";
  });

  return {
    headerText,
    saveButtonText,
  };
}
