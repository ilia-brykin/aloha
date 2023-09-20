import {
  computed,
  h,
  ref,
  toRef,
} from "vue";

import AButton from "../../../AButton/AButton";

import AConfirmAPI from "../../../compositionAPI/AConfirmAPI";
import ANotificationAPI from "../../../compositionAPI/ANotificationAPI";

import {
  tablePluginComponentsProps,
} from "../../../plugins/ATablePlugin";

export default function FiltersSavedDeleteAPI(props, {
  changeModelFiltersSaved = () => {},
  idFilterTop = computed(() => ""),
  modelFiltersSaved = ref(undefined),
}) {
  const canSave = toRef(props, "canSave");
  const id = toRef(props, "id");
  const updateFiltersSaved = toRef(props, "updateFiltersSaved");

  const {
    closeConfirm,
    openConfirm,
    changeConfirmOptions,
  } = AConfirmAPI();

  const {
    addNotification,
  } = ANotificationAPI();

  const buttonDeleteComponentId = computed(() => {
    return `${ id.value }btn_save_top`;
  });

  const disabledButtonDeleteFiltersSaved = computed(() => {
    return !modelFiltersSaved.value;
  });

  const titleButtonDeleteFiltersSaved = computed(() => {
    return disabledButtonDeleteFiltersSaved.value ?
      "_A_FILTERS_DELETE_FILTER_SAVED_BTN_DISABLED_" :
      "_A_FILTERS_DELETE_FILTER_SAVED_BTN_{{name}}_";
  });

  const deleteFiltersSaved = async() => {
    changeConfirmOptions({
      loading: true,
    });
    try {
      await updateFiltersSaved.value({
        action: "delete",
        label: modelFiltersSaved.value,
      });
    } catch (e) {
      addNotification({
        text: "_A_FILTERS_DELETE_FILTER_MSG_ERROR_{{name}}_",
        type: "danger",
        extra: {
          name: modelFiltersSaved.value,
        },
      });
      changeConfirmOptions({
        loading: false,
      });
      return;
    }
    addNotification({
      text: "_A_FILTERS_DELETE_FILTER_MSG_SUCCESS_{{name}}_",
      extra: {
        name: modelFiltersSaved.value,
      },
    });
    changeConfirmOptions({
      loading: false,
    });
    closeConfirm();
    changeModelFiltersSaved({ model: undefined });
  };

  const openDeleteConfirm = () => {
    openConfirm({
      headerText: "_A_FILTERS_DELETE_FILTER_HEADER_{{name}}_",
      bodyHtml: "_A_FILTERS_DELETE_FILTER_BODY_{{name}}_",
      extra: {
        name: modelFiltersSaved.value,
      },
      save: deleteFiltersSaved,
      selectorCloseIds: [buttonDeleteComponentId.value, idFilterTop.value],
      saveButtonText: "_A_FILTERS_DELETE_FILTER_BTN_DELETE_",
    });
  };

  const buttonDeleteFiltersSavedComponent = computed(() => {
    return canSave.value && h(AButton, {
      id: buttonDeleteComponentId.value,
      class: "a_btn a_btn_secondary a_table__filters_top__delete_filter_saved",
      iconLeft: "Trash",
      textScreenReader: titleButtonDeleteFiltersSaved.value,
      title: titleButtonDeleteFiltersSaved.value,
      extra: {
        name: modelFiltersSaved.value,
      },
      ariaDisabled: disabledButtonDeleteFiltersSaved.value,
      onClick: openDeleteConfirm,
      ...tablePluginComponentsProps.value.buttonDeleteFiltersSaved,
    });
  });

  return {
    buttonDeleteFiltersSavedComponent,
  };
}
