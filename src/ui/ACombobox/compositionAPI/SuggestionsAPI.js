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
  AKeyId,
  AKeyLabel,
} from "../../../const/AKeys";
import {
  isMatch,
} from "../utils/text";
import {
  get,
  isFunction,
  isNil,
  isPlainObject,
  omit,
} from "lodash-es";

/**
 * The suggestions: the local data filtered by the text, or the answer of the server (url + searchApiKey).
 */
export default function SuggestionsAPI(props) {
  const filterCallback = toRef(props, "filterCallback");
  const filterMode = toRef(props, "filterMode");
  const ignoreDiacritics = toRef(props, "ignoreDiacritics");
  const isDataSimpleArray = toRef(props, "isDataSimpleArray");
  const keyGroup = toRef(props, "keyGroup");
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

  // the item of the data, without the keys of the component
  const getOriginalItem = item => {
    return isPlainObject(item) && !isDataSimpleArray.value ? omit(item, [AKeyId, AKeyLabel]) : item[AKeyId];
  };

  const filterItem = item => {
    if (isFunction(filterCallback.value)) {
      return filterCallback.value({
        item: getOriginalItem(item),
        label: item[AKeyLabel],
        search: searchText.value,
      });
    }
    return isMatch(item[AKeyLabel], searchText.value, {
      filterMode: filterMode.value,
      ignoreDiacritics: ignoreDiacritics.value,
    });
  };

  // the options of a group stay together (the order of the first item of the group), so the arrows go as they look
  const sortByGroup = items => {
    if (!keyGroup.value) {
      return items;
    }
    const ORDER = [];
    items.forEach(item => {
      const GROUP = get(item, keyGroup.value);
      if (ORDER.indexOf(GROUP) === -1) {
        ORDER.push(GROUP);
      }
    });
    // without a group first
    const RANK = group => (isNil(group) ? -1 : ORDER.indexOf(group));
    return [...items].sort((a, b) => RANK(get(a, keyGroup.value)) - RANK(get(b, keyGroup.value)));
  };

  const suggestions = computed(() => {
    const ITEMS = isServer.value ?
      dataLocal.value :
      dataLocal.value.filter(filterItem);
    return sortByGroup(ITEMS.slice(0, maxItems.value));
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
    getOriginalItem,
    isServer,
    loading,
    search,
    searchText,
    stopSearch,
    suggestions,
  };
}
