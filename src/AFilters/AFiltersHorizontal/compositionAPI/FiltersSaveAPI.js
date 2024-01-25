import {
  computed,
  ref,
  toRef,
} from "vue";

export default function FiltersSaveAPI(props, {
  onOpen = () => ({}),
}) {
  const onUpdateModelFilters = toRef(props, "onUpdateModelFilters");
  const id = toRef(props, "id");

  const isModalSaveVisible = ref(undefined);
  const modelFiltersSaved = ref(undefined);
  const selectorCloseIds = ref(undefined);

  const buttonSaveComponentId = computed(() => {
    return `${ id.value }btn_save_`;
  });

  const openModalSave = () => {
    selectorCloseIds.value = buttonSaveComponentId.value;
    isModalSaveVisible.value = true;
  };

  const closeModalSave = () => {
    isModalSaveVisible.value = false;
  };

  const changeModelFiltersSaved = ({ model, item }) => {
    modelFiltersSaved.value = model;
    if (model) {
      if (item) {
        onUpdateModelFilters.value({
          model: item.data || {},
          isUpdateFiltersVisible: true,
        });
        onOpen();
      }
    } else if (item) {
      if (item) {
        onUpdateModelFilters.value({
          model: {},
          isUpdateFiltersVisible: true,
        });
        onOpen();
      }
    }
  };

  return {
    buttonSaveComponentId,
    changeModelFiltersSaved,
    closeModalSave,
    isModalSaveVisible,
    modelFiltersSaved,
    openModalSave,
    selectorCloseIds,
  };
}
