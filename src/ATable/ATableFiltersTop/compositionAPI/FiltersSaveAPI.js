import {
  computed, h,
  ref,
  toRef,
} from "vue";
import AButton from "../../../AButton/AButton";

export default function FiltersSaveAPI(props, {
  onOpen = () => ({}),
}) {
  const canSave = toRef(props, "canSave");
  const onUpdateModelFilters = toRef(props, "onUpdateModelFilters");
  const tableId = toRef(props, "tableId");

  const isModalSaveVisible = ref(undefined);
  const modelFiltersSaved = ref(undefined);
  const selectorCloseIds = ref(undefined);

  const buttonSaveComponentTopId = computed(() => {
    return `${ tableId.value }btn_save_top`;
  });

  const buttonSaveComponentTopBottom = computed(() => {
    return `${ tableId.value }btn_save_top`;
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
      class: "a_btn a_btn_secondary a_text_nowrap",
      text: {
        desktop: "_A_TABLE_FILTER_SAVE_BTN_",
      },
      iconLeft: {
        mobile: "FloppyDisk",
      },
      textScreenReader: {
        mobile: "_A_TABLE_FILTER_SAVE_BTN_",
      },
    };
  });

  const buttonSaveComponentTop = computed(() => {
    return canSave.value && h(AButton, {
      ...buttonSaveComponentPropsDefault.value,
      id: buttonSaveComponentTopId.value,
      onClick: openModalSaveTop,
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

  return {
    buttonSaveComponentBottom,
    buttonSaveComponentTop,
    changeModelFiltersSaved,
    closeModalSave,
    isModalSaveVisible,
    modelFiltersSaved,
    selectorCloseIds,
  };
}
