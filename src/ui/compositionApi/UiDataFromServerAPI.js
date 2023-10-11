import {
  ref,
  toRef,
} from "vue";

import AHttpAPI from "../../compositionAPI/AHttpAPI";

export default function UiDataFromServerAPI(props) {
  const apiSaveId = toRef(props, "apiSaveId");
  const url = toRef(props, "url");
  const urlParams = toRef(props, "urlParams");

  const dataFromServer = ref([]);
  const loadingDataFromServer = ref(undefined);

  const {
    getListHttp,
  } = AHttpAPI();

  const loadDataFromServer = () => {
    if (!url.value) {
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

  return {
    dataFromServer,
    loadDataFromServer,
    loadingDataFromServer,
  };
}
