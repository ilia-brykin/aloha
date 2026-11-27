import {
  computed,
  onBeforeUnmount,
  ref,
  toRef,
} from "vue";

import AHttpAPI from "../../../compositionAPI/AHttpAPI";
import UiDataWithKeyIdAndLabelAPI from "../../compositionApi/UiDataWithKeyIdAndLabelAPI";
import UiUrlAPI from "../../compositionApi/UiUrlAPI";

import {
  AKeyLabel,
} from "../../../const/AKeys";
import {
  toLower,
  toString,
} from "lodash-es";

/**
 * The suggestions: the local data filtered by the text, or the answer of the server (url + searchApiKey).
 */
export default function SuggestionsAPI(props) {
  const maxItems = toRef(props, "maxItems");
  const searchApiKey = toRef(props, "searchApiKey");
  const searchTimeout = toRef(props, "searchTimeout");
  const urlParams = toRef(props, "urlParams");

  const {
    dataFromServer,
    dataLocal,
  } = UiDataWithKeyIdAndLabelAPI(props);

  const {
    urlLocal,
  } = UiUrlAPI(props);

  const {
    getListHttp,
  } = AHttpAPI();

  const searchText = ref("");
  const loading = ref(false);
  let requestNumber = 0;
  let timer;

  const isServer = computed(() => !!urlLocal.value);

  const suggestions = computed(() => {
    const ITEMS = isServer.value ?
      dataLocal.value :
      dataLocal.value.filter(item => {
        return toLower(toString(item[AKeyLabel])).includes(toLower(searchText.value));
      });
    return ITEMS.slice(0, maxItems.value);
  });

  const loadFromServer = text => {
    const NUMBER = ++requestNumber;
    loading.value = true;
    getListHttp({
      url: urlLocal.value,
      urlParams: {
        ...(urlParams.value || {}),
        [searchApiKey.value]: text,
      },
    }).then(response => {
      // an older request must not replace the answer of a newer one
      if (NUMBER === requestNumber) {
        dataFromServer.value = response || [];
      }
    }, () => {
      if (NUMBER === requestNumber) {
        dataFromServer.value = [];
      }
    }).finally(() => {
      if (NUMBER === requestNumber) {
        loading.value = false;
      }
    });
  };

  const search = text => {
    searchText.value = text;
    if (!isServer.value) {
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => loadFromServer(text), searchTimeout.value);
  };

  const stopSearch = () => {
    clearTimeout(timer);
    // the answer of a running request is not needed anymore
    requestNumber++;
    loading.value = false;
  };

  onBeforeUnmount(() => clearTimeout(timer));

  return {
    isServer,
    loading,
    search,
    searchText,
    stopSearch,
    suggestions,
  };
}
