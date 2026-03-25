import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

import AHttpAPI from "../../compositionAPI/AHttpAPI";

import {
  ADataRetrievePluginOptions,
} from "../../plugins/ADataRetrievePlugin";
import {
  AKeyId,
  AKeyLabel,
} from "../../const/AKeys";
import {
  cloneDeep,
  filter,
  find,
  forEach,
  get,
  isArray,
  isEqual,
  isFunction,
  isNil,
  isNumber,
  isPlainObject,
  isString,
  map,
  some,
  toString,
  uniq,
} from "lodash-es";

export default function UiDataFromServerAPI(props, {
  changeModel = () => {},
  dataExtraLocal = computed(() => []),
  dataFromRetrieve = ref([]),
  dataFromServer = ref([]),
} = {}) {
  const apiSaveId = toRef(props, "apiSaveId");
  const data = toRef(props, "data");
  const isDataSimpleArray = toRef(props, "isDataSimpleArray");
  const keyId = toRef(props, "keyId");
  const keyLabel = toRef(props, "keyLabel");
  const searchApi = toRef(props, "searchApi");
  const modelValue = toRef(props, "modelValue");
  const searchApiKey = toRef(props, "searchApiKey");
  const type = toRef(props, "type");
  const url = toRef(props, "url");
  const urlRetrieve = toRef(props, "urlRetrieve");
  const urlParams = toRef(props, "urlParams");
  const urlRetrieveParams = toRef(props, "urlRetrieveParams");

  const loadingSearchApi = ref(false);
  const loadingDataFromServer = ref(undefined);
  const loadingRequestCount = ref(0);

  const {
    getListHttp,
  } = AHttpAPI();

  const startLoading = () => {
    loadingRequestCount.value += 1;
    loadingDataFromServer.value = true;
  };

  const stopLoading = () => {
    loadingRequestCount.value = Math.max(loadingRequestCount.value - 1, 0);
    loadingDataFromServer.value = loadingRequestCount.value > 0;
  };

  const searchApiLocal = computed(() => {
    return !!(searchApi.value && searchApiKey.value && url.value);
  });

  const retrieveCallback = computed(() => {
    return ADataRetrievePluginOptions.value.callbacks.retrieve;
  });

  const urlRetrieveLocal = computed(() => {
    return urlRetrieve.value || url.value;
  });

  const urlRetrieveParamsLocal = computed(() => {
    if (!isNil(urlRetrieveParams.value)) {
      return urlRetrieveParams.value;
    }
    return urlParams.value;
  });

  const isRetrieveLocal = computed(() => {
    return !!(urlRetrieveLocal.value && isFunction(retrieveCallback.value));
  });

  const urlPropsComputed = computed(() => {
    return [
      apiSaveId.value,
      url.value,
      urlParams.value,
    ];
  });

  const retrievePropsComputed = computed(() => {
    return [
      urlRetrieveLocal.value,
      urlRetrieveParamsLocal.value,
    ];
  });

  const getItemId = item => {
    if (isDataSimpleArray.value) {
      if (isPlainObject(item)) {
        return get(item, AKeyId, get(item, keyId.value));
      }

      return item;
    }

    return get(item, keyId.value);
  };

  const getCurrentBaseData = () => {
    if (dataFromServer.value.length) {
      return dataFromServer.value;
    }

    return data.value || [];
  };

  const uniqueList = list => {
    return uniq(map(list, item => toString(getItemId(item)))).map(itemId => {
      return find(list, item => toString(getItemId(item)) === itemId);
    });
  };

  const getCurrentData = () => {
    return uniqueList([
      ...getCurrentBaseData(),
      ...dataFromRetrieve.value,
    ]);
  };

  const loadDataFromServer = () => {
    if (!url.value || searchApiLocal.value) {
      dataFromServer.value = [];
      return;
    }
    startLoading();
    getListHttp({
      url: url.value,
      urlParams: urlParams.value,
      apiSaveId: apiSaveId.value,
    }).then(
      response => {
        dataFromServer.value = response;
        syncDataFromRetrieve();
        return loadDataFromServerForRetrieve();
      },
    ).finally(
      () => {
        stopLoading();
      },
    );
  };

  const isTypeList = computed(() => {
    return type.value === "checkbox" || type.value === "multiselect";
  });

  const updateUrlPropsComputed = (newVal, oldVal) => {
    if (!isEqual(oldVal, newVal)) {
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

  const isValidModelValue = value => {
    if (dataExtraLocal.value.length) {
      return !find(dataExtraLocal.value, [AKeyId, value]);
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

  const getMissingModelArray = () => {
    const DATA_CURRENT = getCurrentData();

    return filter(modelArrayWithoutDataExtra.value, model => {
      if (isNil(model)) {
        return false;
      }

      return !find(DATA_CURRENT, item => {
        return toString(getItemId(item)) === toString(model);
      });
    });
  };

  const changeDataFromServerWithModel = ({ response }) => {
    const DATA_FROM_SERVER_ALT = cloneDeep(dataFromServer.value);
    const DATA_FROM_SERVER_NEW = [];
    const MODEL_ARRAY = cloneDeep(modelArrayWithoutDataExtra.value);

    forEach(DATA_FROM_SERVER_ALT, itemAlt => {
      if (MODEL_ARRAY.length === 0) {
        return false;
      }
      const ID = getItemId(itemAlt);
      const INDEX_IN_MODEL = MODEL_ARRAY.indexOf(ID);
      if (INDEX_IN_MODEL !== -1) {
        MODEL_ARRAY.splice(INDEX_IN_MODEL, 1);
        DATA_FROM_SERVER_NEW.push(itemAlt);
      }
    });
    DATA_FROM_SERVER_NEW.push(...response);
    dataFromServer.value = uniqueList(DATA_FROM_SERVER_NEW);
  };

  const isRetrieveInvalidEntries = computed(() => {
    return !searchApiLocal.value &&
      !!(url.value || data.value?.length);
  });

  const prepareRetrieveResponse = ({ response = [] } = {}) => {
    return map(response, item => {
      if (!isRetrieveInvalidEntries.value) {
        return item;
      }

      if (isPlainObject(item)) {
        return {
          ...item,
          __invalidEntry__: true,
        };
      }

      return {
        [AKeyId]: item,
        [AKeyLabel]: item,
        __invalidEntry__: true,
      };
    });
  };

  function syncDataFromRetrieve({ requestedModelArray = [], response = [] } = {}) {
    const DATA_CURRENT_BASE = getCurrentBaseData();
    const DATA_CURRENT_RETRIEVE = filter(dataFromRetrieve.value, item => {
      const ITEM_ID = getItemId(item);

      return some(modelArrayWithoutDataExtra.value, model => {
        return toString(model) === toString(ITEM_ID);
      }) && !some(requestedModelArray, model => {
        return toString(model) === toString(ITEM_ID);
      }) && !find(DATA_CURRENT_BASE, baseItem => {
        return toString(getItemId(baseItem)) === toString(ITEM_ID);
      });
    });

    dataFromRetrieve.value = uniqueList([
      ...DATA_CURRENT_RETRIEVE,
      ...prepareRetrieveResponse({ response }),
    ]);
  }

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
        dataFromRetrieve.value = [];
        changeDataFromServerWithModel({ response, data });
      },
    ).then(
      () => {
        loadingSearchApi.value = false;
      },
    );
  };

  const loadDataFromServerForSearchAPI = () => {
    if (!searchApiLocal.value ||
      isRetrieveLocal.value ||
      !modelArrayWithoutDataExtra.value.length) {
      return;
    }
    let MODEL_ARRAY;
    if (keyId.value === "pk") {
      MODEL_ARRAY = filter(modelArrayWithoutDataExtra.value, value => !isNil(value));
    } else {
      MODEL_ARRAY = cloneDeep(modelArrayWithoutDataExtra.value);
    }
    if (!MODEL_ARRAY.length) {
      return;
    }
    startLoading();
    const URL_PARAMS = {
      ...urlParams.value,
      ...{
        [keyId.value]: MODEL_ARRAY,
        limit: MODEL_ARRAY.length,
      },
    };
    return getListHttp({
      url: url.value,
      urlParams: URL_PARAMS,
    }).then(
      response => {
        dataFromRetrieve.value = [];
        dataFromServer.value = response || [];
      },
    ).finally(() => {
      stopLoading();
    });
  };

  function loadDataFromServerForRetrieve() {
    if (!isRetrieveLocal.value) {
      return;
    }

    const MODEL_ARRAY = getMissingModelArray();
    if (!MODEL_ARRAY.length) {
      return;
    }

    startLoading();
    return Promise.resolve().then(() => {
      return retrieveCallback.value({
        data: cloneDeep(getCurrentData()),
        getListHttp,
        isDataSimpleArray: isDataSimpleArray.value,
        keyId: keyId.value,
        keyLabel: keyLabel.value,
        modelArray: cloneDeep(MODEL_ARRAY),
        modelValue: cloneDeep(modelArrayWithoutDataExtra.value),
        props,
        url: urlRetrieveLocal.value,
        urlParams: urlRetrieveParamsLocal.value,
      });
    }).then(response => {
      if (!response?.length) {
        return;
      }

      syncDataFromRetrieve({
        requestedModelArray: MODEL_ARRAY,
        response,
      });
    }).finally(() => {
      stopLoading();
    });
  }

  watch(modelArrayWithoutDataExtra, (newVal, oldVal) => {
    if (!isEqual(newVal, oldVal)) {
      syncDataFromRetrieve();
      loadDataFromServerForRetrieve();
    }
  });

  watch(retrievePropsComputed, (newVal, oldVal) => {
    if (!isEqual(newVal, oldVal)) {
      dataFromRetrieve.value = [];
      loadDataFromServerForRetrieve();
    }
  });

  watch(data, (newVal, oldVal) => {
    if (!url.value &&
      !isEqual(newVal, oldVal)) {
      syncDataFromRetrieve();
      loadDataFromServerForRetrieve();
    }
  }, {
    deep: true,
  });

  return {
    loadDataFromServer,
    loadDataFromServerForRetrieve,
    loadDataFromServerForSearchAPI,
    loadingDataFromServer,
    loadingSearchApi,
    onSearchInApi,
    searchApiLocal,
    updateUrlPropsComputed,
    urlPropsComputed,
  };
}
