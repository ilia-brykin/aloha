import {
  computed,
  ref,
  toRef,
} from "vue";

import ANotificationAPI from "../../../compositionAPI/ANotificationAPI";

export default function SaveAPI(props, { emit }, {
  isUpdate = computed(() => false),
  model = ref({}),
}) {
  const changeModelFiltersSaved = toRef(props, "changeModelFiltersSaved");
  const updateFiltersSaved = toRef(props, "updateFiltersSaved");

  const loading = ref(undefined);

  const {
    addNotification,
  } = ANotificationAPI();

  const disabledBtnSave = computed(() => {
    return !model.value.name;
  });

  const close = () => {
    emit("close");
  };

  const save = async() => {
    loading.value = true;
    const isUpdateLocal = isUpdate.value;
    try {
      await updateFiltersSaved.value({
        action: isUpdateLocal ? "update" : "create",
        label: model.value.name,
      });
    } catch (e) {
      addNotification({
        text: "_A_TABLE_FILTER_SAVE_MSG_ERROR_",
        type: "danger",
      });
      loading.value = false;
      return;
    }
    addNotification({
      text: isUpdateLocal ?
        "_A_TABLE_FILTER_SAVE_MSG_SUCCESS_UPDATE_{{name}}_" :
        "_A_TABLE_FILTER_SAVE_MSG_SUCCESS_CREATE_{{name}}_",
      extra: {
        name: model.value.name,
      },
    });
    changeModelFiltersSaved.value({ model: model.value.name });
    close();
    loading.value = false;
  };

  return {
    close,
    disabledBtnSave,
    loading,
    save,
  };
}
