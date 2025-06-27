import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default function ListModeAPI(props, {
  htmlIdLocal = computed(() => undefined),
}) {
  const modeOptions = toRef(props, "modeOptions");

  const isModalCreateListModeVisible = ref(false);

  const listModeBtnIdAdd = computed(() => {
    return `${ htmlIdLocal.value }_btn_add`;
  });

  const listModeElementLabelTranslated = computed(() => {
    return getTranslatedText({
      placeholder: modeOptions.value.elementLabel || "_A_VALIDATED_JSON_ELEMENTS_",
    });
  });

  const openModalCreateListMode = () => {
    isModalCreateListModeVisible.value = true;
  };

  const closeModalCreateListMode = () => {
    isModalCreateListModeVisible.value = false;
  };

  return {
    closeModalCreateListMode,
    isModalCreateListModeVisible,
    listModeBtnIdAdd,
    listModeElementLabelTranslated,
    openModalCreateListMode,
  };
}
