import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  AKeyId,
} from "../../../../const/AKeys";

export default function UpdateAPI(props, { emit }) {
  const keyId = toRef(props, "keyId");
  const mode = toRef(props, "mode");
  const modelIndex = toRef(props, "modelIndex");
  const modelItem = toRef(props, "modelItem");
  const parentHtmlId = toRef(props, "parentHtmlId");

  const isModalUpdateVisible = ref(false);

  const btnOpenModalUpdateId = computed(() => {
    return `${ parentHtmlId.value }_btn_open_modal_update_${ modelIndex.value }`;
  });

  const openModalUpdate = () => {
    isModalUpdateVisible.value = true;
  };

  const closeModalUpdate = ({ model } = {}) => {
    isModalUpdateVisible.value = false;

    if (model) {
      if (mode.value === "list") {
        emit("update", { index: modelIndex.value, model });
      } else {
        const oldKey = modelItem.value[keyId.value || AKeyId];
        const key = model[keyId.value || AKeyId];
        emit("update", { model, key, oldKey });
      }
    }
  };

  return {
    btnOpenModalUpdateId,
    closeModalUpdate,
    isModalUpdateVisible,
    openModalUpdate,
  };
}
