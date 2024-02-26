import {
  computed,
  ref,
  toRef,
} from "vue";

import AConfirmAPI from "../../../compositionAPI/AConfirmAPI";
import ANotificationAPI from "../../../compositionAPI/ANotificationAPI";

export default function FiltersSavedDeleteAPI(props, {
  changeModelFiltersSaved = () => {},
  idFilterTop = computed(() => ""),
  isModelFilterSavedNew = computed(() => false),
  modelFiltersSaved = ref(undefined),
}) {
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

  const buttonDeleteId = computed(() => {
    return `${ id.value }btn_save`;
  });

  const titleButtonDeleteFiltersSaved = computed(() => {
    if (isModelFilterSavedNew.value) {
      return "_A_FILTERS_DELETE_FILTER_SAVED_BTN_DISABLED_";
    }
    return {
      mobile: "_A_FILTERS_DELETE_FILTER_SAVED_BTN_",
    };
  });

  const textScreenreaderButtonDeleteFiltersSaved = computed(() => {
    if (isModelFilterSavedNew.value) {
      return "_A_FILTERS_DELETE_FILTER_SAVED_BTN_DISABLED_";
    }
    return "_A_FILTERS_DELETE_FILTER_SAVED_BTN_";
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
      selectorCloseIds: [buttonDeleteId.value, idFilterTop.value],
      saveButtonText: "_A_FILTERS_DELETE_FILTER_BTN_DELETE_",
    });
  };

  return {
    buttonDeleteId,
    openDeleteConfirm,
    textScreenreaderButtonDeleteFiltersSaved,
    titleButtonDeleteFiltersSaved,
  };
}
