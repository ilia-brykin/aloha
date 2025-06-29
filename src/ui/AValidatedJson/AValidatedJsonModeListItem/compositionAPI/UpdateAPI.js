import {
  computed,
  ref,
  toRef,
} from "vue";

export default function UpdateAPI(props, { emit }) {
  const modelIndex = toRef(props, "modelIndex");
  const parentId = toRef(props, "parentId");

  const isModalUpdateVisible = ref(false);

  const btnOpenModalUpdateId = computed(() => {
    return `${ parentId.value }_btn_open_modal_update_${ modelIndex.value }`;
  });

  const openModalUpdate = () => {
    isModalUpdateVisible.value = true;
  };

  const closeModalUpdate = ({ model } = {}) => {
    isModalUpdateVisible.value = false;

    if (model) {
      emit("update", { index: modelIndex.value, model });
    }
  };

  return {
    btnOpenModalUpdateId,
    closeModalUpdate,
    isModalUpdateVisible,
    openModalUpdate,
  };
}
