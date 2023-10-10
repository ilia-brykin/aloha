import {
  computed,
  h,
  ref,
  toRef,
} from "vue";

import AButton from "../../../AButton/AButton";
import ASelect from "../../../ui/ASelect/ASelect";

import {
  filtersPluginComponentsProps,
} from "../../../plugins/AFiltersPlugin";

export default function FiltersSaveAPI(props, {
  onOpen = () => ({}),
}) {
  const canSave = toRef(props, "canSave");
  const filtersSaved = toRef(props, "filtersSaved");
  const onUpdateModelFilters = toRef(props, "onUpdateModelFilters");
  const id = toRef(props, "id");

  const isModalSaveVisible = ref(undefined);
  const modelFiltersSaved = ref(undefined);
  const selectorCloseIds = ref(undefined);

  const buttonSaveComponentTopId = computed(() => {
    return `${ id.value }btn_save_top`;
  });

  const buttonSaveComponentTopBottom = computed(() => {
    return `${ id.value }btn_save_bottom`;
  });

  const openModalSaveTop = () => {
    selectorCloseIds.value = buttonSaveComponentTopId.value;
    isModalSaveVisible.value = true;
  };

  const openModalSaveBottom = () => {
    selectorCloseIds.value = buttonSaveComponentTopBottom.value;
    isModalSaveVisible.value = true;
  };

  const closeModalSave = () => {
    isModalSaveVisible.value = false;
  };

  const buttonSaveComponentPropsDefault = computed(() => {
    return {
      class: "a_btn a_btn_secondary a_text_nowrap a_table__filters_top__delete_filter_saved",
      text: {
        desktop: "_A_FILTERS_SAVE_BTN_",
      },
      iconLeft: {
        mobile: "FloppyDisk",
      },
      textScreenReader: {
        mobile: "_A_FILTERS_SAVE_BTN_",
      },
    };
  });

  const buttonSaveTopComponent = computed(() => {
    return canSave.value && h(AButton, {
      id: buttonSaveComponentTopId.value,
      onClick: openModalSaveTop,
      ...buttonSaveComponentPropsDefault.value,
      ...filtersPluginComponentsProps.value.buttonSaveTop || {},
    });
  });

  const buttonSaveComponentBottom = computed(() => {
    return canSave.value && h(AButton, {
      ...buttonSaveComponentPropsDefault.value,
      id: buttonSaveComponentTopBottom.value,
      onClick: openModalSaveBottom,
    });
  });

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

  const selectFiltersSavedComponent = computed(() => {
    return canSave.value && h(ASelect, {
      modelValue: modelFiltersSaved.value,
      class: "a_table__filters_top__save_select",
      type: "select",
      data: filtersSaved.value,
      keyLabel: "label",
      keyId: "label",
      label: "_A_FILTERS_SAVE_SELECT_",
      translateData: true,
      disabled: !filtersSaved.value.length,
      search: true,
      deselect: true,
      change: changeModelFiltersSaved,
      ...filtersPluginComponentsProps.value.selectFiltersSaved || {},
    });
  });

  return {
    buttonSaveComponentBottom,
    buttonSaveTopComponent,
    changeModelFiltersSaved,
    closeModalSave,
    isModalSaveVisible,
    modelFiltersSaved,
    selectFiltersSavedComponent,
    selectorCloseIds,
  };
}
