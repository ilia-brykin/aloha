import {
  computed,
  toRef,
} from "vue";

export default function IdsAPI(props) {
  const id = toRef(props, "id");

  const idBtnDelete = computed(() => {
    return `${ id.value }_delete`;
  });

  const idBtnEdit = computed(() => {
    return `${ id.value }_edit`;
  });

  const idBtnCancel = computed(() => {
    return `${ id.value }_cancel`;
  });

  const idBtnSave = computed(() => {
    return `${ id.value }_save`;
  });

  return {
    idBtnCancel,
    idBtnDelete,
    idBtnEdit,
    idBtnSave,
  };
}
