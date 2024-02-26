import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
  forEach,
} from "lodash-es";

const NEW_FILTER_LABEL = "_A_FILTERS_HOR_FILTER_NEW_";

export default function FiltersSaveAPI(props, {
  openDropdown = () => ({}),
}) {
  const filtersSaved = toRef(props, "filtersSaved");
  const id = toRef(props, "id");
  const onUpdateModelFilters = toRef(props, "onUpdateModelFilters");

  const isModalSaveVisible = ref(undefined);
  const modelFiltersSaved = ref(NEW_FILTER_LABEL);
  const selectorCloseIds = ref(undefined);

  const buttonSaveComponentId = computed(() => {
    return `${ id.value }btn_save_`;
  });

  const isModelFilterSavedNew = computed(() => {
    return modelFiltersSaved.value === NEW_FILTER_LABEL;
  });

  const filtersSavedLocal = computed(() => {
    const FILTER_SAVED = [{
      label: NEW_FILTER_LABEL,
    }];
    forEach(cloneDeep(filtersSaved.value), filter => {
      filter.group = "_A_FILTERS_FILTER_SAVED_GROUP_MY_";
      FILTER_SAVED.push(filter);
    });

    return FILTER_SAVED;
  });

  const openModalSave = () => {
    selectorCloseIds.value = buttonSaveComponentId.value;
    isModalSaveVisible.value = true;
  };

  const closeModalSave = () => {
    isModalSaveVisible.value = false;
  };

  const changeModelFiltersSaved = ({ model, item, isDelete, isCreateOrEdit }) => {
    if (isCreateOrEdit) {
      modelFiltersSaved.value = model;
      return;
    }

    if (!model) {
      if (modelFiltersSaved.value === NEW_FILTER_LABEL || isDelete) {
        onUpdateModelFilters.value({
          model: {},
          isUpdateFiltersVisible: true,
        });
        modelFiltersSaved.value = NEW_FILTER_LABEL;
      } else if (item) {
        onUpdateModelFilters.value({
          model: {},
          isUpdateFiltersVisible: true,
        });
        openDropdown();
      }
    } else {
      modelFiltersSaved.value = model;
      if (item) {
        onUpdateModelFilters.value({
          model: item.data || {},
          isUpdateFiltersVisible: true,
        });
        openDropdown();
      }
    }

    // modelFiltersSaved.value = model;
    // if (model) {
    //   if (item) {
    //     onUpdateModelFilters.value({
    //       model: item.data || {},
    //       isUpdateFiltersVisible: true,
    //     });
    //     openDropdown();
    //   }
    // } else if (item) {
    //   if (item) {
    //     onUpdateModelFilters.value({
    //       model: {},
    //       isUpdateFiltersVisible: true,
    //     });
    //     openDropdown();
    //   }
    // }
  };

  return {
    buttonSaveComponentId,
    changeModelFiltersSaved,
    closeModalSave,
    filtersSavedLocal,
    isModalSaveVisible,
    isModelFilterSavedNew,
    modelFiltersSaved,
    openModalSave,
    selectorCloseIds,
  };
}
