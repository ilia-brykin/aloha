import {
  computed,
  ref,
  toRef,
} from "vue";

import AHttpAPI from "../../compositionAPI/AHttpAPI";

import AKeyId from "../../const/AKeyId";
import {
  cloneDeep,
  filter,
  find,
  forEach,
  get,
  isArray,
  isMatch,
  isNil,
  isNumber,
  isString,
  map,
  uniq,
  uniqBy,
} from "lodash-es";

export default function UiDataFromServerAPI(props, {
  changeModel = () => {},
  dataExtraLocal = computed(() => []),
  dataFromServer = ref([])
} = {}) {
  const apiSaveId = toRef(props, "apiSaveId");
  const isDataSimpleArray = toRef(props, "isDataSimpleArray");
  const keyId = toRef(props, "keyId");
  const keyLabel = toRef(props, "keyLabel");
  const searchApi = toRef(props, "searchApi");
  const modelValue = toRef(props, "modelValue");
  const searchApiKey = toRef(props, "searchApiKey");
  const type = toRef(props, "type");
  const url = toRef(props, "url");
  const urlParams = toRef(props, "urlParams");

  const loadingSearchApi = ref(false);
  const loadingDataFromServer = ref(undefined);

  const {
    getListHttp,
  } = AHttpAPI();

  const searchApiLocal = computed(() => {
    return !!(searchApi.value && searchApiKey.value && url.value);
  });

  const urlPropsComputed = computed(() => {
    return [
      apiSaveId,
      url,
      urlParams,
    ];
  });

  const loadDataFromServer = () => {
    if (!url.value || searchApiLocal.value) {
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

  const isTypeList = computed(() => {
    return type.value === "checkbox" || type.value === "multiselect";
  });

  const updateUrlPropsComputed = (newVal, oldVal) => {
    if (!isNil(oldVal) && !isMatch(oldVal, newVal)) {
      loadDataFromServer();
      if (isTypeList.value) {
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

  const uniqueList = list => {
    if (isDataSimpleArray.value) {
      return uniq(list);
    }
    return uniqBy(list, keyId.value);
  };

  const isValidModelValue = value => {
    if (dataExtraLocal.value.length) {
      return !!find(dataExtraLocal.value, [AKeyId, value]);
    }
    return isString(value) || isNumber(value);
  };

  const modelArrayWithoutDataExtra = computed(() => {
    let model = [];
    if (isArray(modelValue.value) && modelValue.value.length) {
      model = filter(modelValue.value, currentModel => isValidModelValue(currentModel));
    } else if (isValidModelValue(modelValue.value)) {
      model = [modelValue.value];
    }
    return model;
  });

  const changeDataFromServerWithModel = ({ response }) => {
    const DATA_FROM_SERVER_ALT = cloneDeep(dataFromServer.value);
    const DATA_FROM_SERVER_NEW = [];
    const MODEL_ARRAY = cloneDeep(modelArrayWithoutDataExtra.value);

    forEach(DATA_FROM_SERVER_ALT, itemAlt => {
      if (MODEL_ARRAY.length === 0) {
        return false;
      }
      const ID = isDataSimpleArray.value ? itemAlt : get(itemAlt, keyId.value);
      const INDEX_IN_MODEL = MODEL_ARRAY.indexOf(ID);
      if (INDEX_IN_MODEL !== -1) {
        MODEL_ARRAY.splice(INDEX_IN_MODEL, 1);
        DATA_FROM_SERVER_NEW.push(itemAlt);
      }
    });
    DATA_FROM_SERVER_NEW.push(...response);
    dataFromServer.value = uniqueList(DATA_FROM_SERVER_NEW);
  };

  const onSearchInApi = ({ search, data = [] }) => {
    if (!searchApiLocal.value) {
      return;
    }
    loadingSearchApi.value = true;
    getListHttp({
      url: url.value,
      urlParams: {
        ...(urlParams.value || {}),
        [searchApiKey.value]: search,
      },
    }).then(
      response => {
        if (isDataSimpleArray.value) {
          response = map(response, item => item[keyLabel.value]);
        }
        changeDataFromServerWithModel({ response, data });
      },
    ).then(
      () => {
        loadingSearchApi.value = false;
      }
    );
  };

  const loadDataFromServerForSearchAPI = () => {
    if (!searchApiLocal.value ||
      !modelArrayWithoutDataExtra.value.length) {
      return;
    }
    loadingDataFromServer.value = true;
    const URL_PARAMS = {
      ...urlParams.value,
      ...{
        [keyId.value]: modelArrayWithoutDataExtra.value,
        limit: modelArrayWithoutDataExtra.value.length,
      },
    };
    return getListHttp({
      url: url.value,
      urlParams: URL_PARAMS,
    }).then(
      response => {
        dataFromServer.value = response || [];
      }
    ).finally(() => {
      loadingDataFromServer.value = false;
    });
  };

  return {
    loadDataFromServer,
    loadDataFromServerForSearchAPI,
    loadingDataFromServer,
    loadingSearchApi,
    onSearchInApi,
    searchApiLocal,
    updateUrlPropsComputed,
    urlPropsComputed,
  };
}
