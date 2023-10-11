import {
  computed,
  ref,
  toRef,
} from "vue";

import AHttpAPI from "../../compositionAPI/AHttpAPI";

import {
  isMatch,
  isNil,
} from "lodash-es";

export default function UiDataFromServerAPI(props, {
  changeModel = () => {},
} = {}) {
  const apiSaveId = toRef(props, "apiSaveId");
  const type = toRef(props, "type");
  const url = toRef(props, "url");
  const urlParams = toRef(props, "urlParams");

  const dataFromServer = ref([]);
  const loadingDataFromServer = ref(undefined);

  const {
    getListHttp,
  } = AHttpAPI();

  const urlPropsComputed = computed(() => {
    return [
      apiSaveId,
      url,
      urlParams,
    ];
  });

  const loadDataFromServer = () => {
    if (!url.value) {
      dataFromServer.value = [];
      return;
    }
    loadingDataFromServer.value = true;
    getListHttp({
      url: url.value,
      urlParams: urlParams.value,
      apiSaveId: apiSaveId.value,
    }).then(
      response => {
        dataFromServer.value = response;
      }
    ).finally(
      () => {
        loadingDataFromServer.value = false;
      }
    );
  };

  const updateUrlPropsComputed = (newVal, oldVal) => {
    if (!isNil(oldVal) && !isMatch(oldVal, newVal)) {
      loadDataFromServer();
      if (type.value === "checkbox" || type.value === "multiselect") {
        changeModel({
          model: [],
          currentModel: [],
        });
      } else {
        changeModel({
          model: undefined,
          currentModel: undefined,
        });
      }
    }
  };

  return {
    dataFromServer,
    loadDataFromServer,
    loadingDataFromServer,
    updateUrlPropsComputed,
    urlPropsComputed,
  };
}
