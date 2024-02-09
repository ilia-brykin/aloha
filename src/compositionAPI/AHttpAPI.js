import {
  ref,
} from "vue";

import axios from "axios";

import {
  forEach,
  isArray,
  isFunction,
  isNil,
  isPlainObject,
  isString,
  keyBy,
} from "lodash-es";


const BASE_URL = ref("/api/");
const API = ref(axios.create());
const API_SAVED = ref({});
const ERROR_CALLBACKS = ref({});
const HEADER_PARAMS = ref({});
const abortGroupController = {};
const abortGroupPending = {};

export const API_CONFIG = ref({
  setUrlForArray: setUrlForArray,
});

export function create({ axiosCreateOptions = {} }) {
  API.value = axios.create(axiosCreateOptions);
}

export function setBaseUrl({ baseUrl = "" }) {
  BASE_URL.value = baseUrl;
}

export function setErrorCallbacks({ errorCallbacks = {} }) {
  ERROR_CALLBACKS.value = errorCallbacks;
}

export function setHeaderParams({ headerParams = {} } = {}) {
  HEADER_PARAMS.value = headerParams;
}

export function abortHttp({
  all = false,
  abortGroup,
  excludeAbortGroup,
}) {
  const EXCLUDE_ABORT_GROUP_OBJ = getExcludeAbortGroup({ excludeAbortGroup });

  if (all) {
    forEach(abortGroupController, (abortController, abortKey) => {
      if (EXCLUDE_ABORT_GROUP_OBJ[abortKey]) {
        return;
      }
      abortController.abort();
      delete abortGroupController[abortKey];
      if (abortGroupPending[abortGroup]) {
        delete abortGroupPending[abortGroup];
      }
    });
  } else if (abortGroup) {
    let abortGroupList = [];
    if (isString(abortGroup)) {
      abortGroupList.push(abortGroup);
    } else if (isArray(abortGroup)) {
      abortGroupList = abortGroup;
    }
    forEach(abortGroupList, abortKey => {
      if (EXCLUDE_ABORT_GROUP_OBJ[abortKey]) {
        return;
      }
      if (abortGroupController[abortKey]) {
        abortGroupController[abortKey].abort();
        delete abortGroupController[abortKey];
        if (abortGroupPending[abortGroup]) {
          delete abortGroupPending[abortGroup];
        }
      }
    });
  }
}

export function clearAllApiSaved() {
  API_SAVED.value = {};
}

export function clearApiSaved({ apiSaveId }) {
  if (apiSaveId in API_SAVED.value) {
    delete API_SAVED.value[apiSaveId];
  }
}

export default function AHttpAPI() {
  return {
    abortHttp,
    clearAllApiSaved,
    clearApiSaved,
    deleteHttp,
    getHttp,
    getListHttp,
    getOptionsHttp,
    patchHttp,
    postHttp,
    putHttp,
  };
}

export function getHttp({
  url,
  urlBase,
  data,
  urlParams = {},
  headerParams,
  responseType,
  apiSaveId,
  keyId,
  fullResponse,
  showError,
  ignoreErrorHandler = false,
  abortable = true,
  abortGroup = "",
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "get",
    url,
    urlBase,
    urlParams,
    data,
    headerParams,
    responseType,
    apiSaveId,
    keyId,
    fullResponse,
    showError,
    ignoreErrorHandler,
    abortable,
    abortGroup,
  });
}

export function getListHttp({
  url,
  urlBase,
  data,
  urlParams = {},
  headerParams,
  responseType,
  apiSaveId,
  keyId,
  fullResponse,
  showError,
  ignoreErrorHandler = false,
  abortable = true,
  abortGroup = "",
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "get",
    url,
    urlBase,
    urlParams,
    data,
    headerParams,
    responseType,
    apiSaveId,
    keyId,
    fullResponse,
    showError,
    ignoreErrorHandler,
    abortable,
    abortGroup,
    expectedList: true,
  });
}

export function getOptionsHttp({
  url,
  urlBase,
  data,
  urlParams = {},
  headerParams,
  responseType,
  keyId,
  fullResponse,
  showError,
  ignoreErrorHandler = false,
  abortable = true,
  abortGroup = "",
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "options",
    url,
    urlBase,
    urlParams,
    data,
    headerParams,
    responseType,
    keyId,
    fullResponse,
    showError,
    abortable,
    abortGroup,
    ignoreErrorHandler,
  });
}

export function postHttp({
  url,
  data,
  urlParams = {},
  headerParams,
  responseType,
  fullResponse,
  showError,
  ignoreErrorHandler = false,
  abortable = true,
  abortGroup = "",
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "post",
    url,
    urlParams,
    data,
    headerParams,
    responseType,
    fullResponse,
    showError,
    abortable,
    abortGroup,
    ignoreErrorHandler,
  });
}

export function putHttp({
  url,
  urlBase,
  data,
  urlParams = {},
  headerParams,
  responseType,
  fullResponse,
  showError,
  ignoreErrorHandler = false,
  abortable = true,
  abortGroup = "",
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "put",
    url,
    urlBase,
    urlParams,
    data,
    headerParams,
    responseType,
    fullResponse,
    showError,
    abortable,
    abortGroup,
    ignoreErrorHandler,
  });
}

export function patchHttp({
  url,
  urlBase,
  data,
  urlParams = {},
  headerParams,
  responseType,
  fullResponse,
  showError,
  ignoreErrorHandler = false,
  abortable = true,
  abortGroup = "",
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "patch",
    url,
    urlBase,
    urlParams,
    data,
    headerParams,
    responseType,
    fullResponse,
    showError,
    abortable,
    abortGroup,
    ignoreErrorHandler,
  });
}

export function deleteHttp({
  url,
  urlBase,
  data,
  urlParams = {},
  headerParams,
  responseType,
  fullResponse,
  showError,
  ignoreErrorHandler = false,
  abortable = true,
  abortGroup = "",
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "delete",
    url,
    urlBase,
    urlParams,
    data,
    headerParams,
    responseType,
    fullResponse,
    showError,
    abortable,
    abortGroup,
    ignoreErrorHandler,
  });
}

export function callHttpRequestAndCheckSavedApi({
  methodHttp,
  url,
  urlBase,
  urlParams,
  data,
  headerParams = {},
  responseType = "json",
  apiSaveId,
  keyId,
  fullResponse,
  showError = false,
  ignoreErrorHandler = false,
  abortable = true,
  abortGroup = "",
  expectedList,
}) {
  let apiSavedData = undefined;
  if (apiSaveId) {
    apiSavedData = API_SAVED.value[apiSaveId];
    if (apiSavedData) {
      if (apiSavedData.loading) {
        return apiSavedData.promise;
      }
    }
  }

  const PROMISE = new Promise((resolve, reject) => {
    if (apiSavedData) {
      if (!apiSavedData.loading) {
        if (keyId) {
          if (apiSavedData.keyData) {
            return resolve(apiSavedData.keyData);
          }
          const KEY_DATA = setKeyData({ data: apiSavedData.data, keyId });
          API_SAVED.value[apiSaveId].keyData = KEY_DATA;
          return resolve(KEY_DATA);
        }
        return resolve(apiSavedData.data);
      }
    }
    const URL_NEW = setUrlWithParams({ url, params: urlParams });
    let url_full = `${ isNil(urlBase) ? BASE_URL.value : urlBase }${ URL_NEW }`;
    url_full = url_full.replace(/\/\//g, "/");
    const HEADER_PARAMS_LOCAL = {
      ...HEADER_PARAMS.value,
      ...headerParams,
    };

    const signal = getAbortGroupSignal({ abortGroup, abortable });
    setAbortGroupPendingCurrent({ abortGroup, abortable });

    API.value({
      method: methodHttp,
      url: url_full,
      data,
      headers: HEADER_PARAMS_LOCAL,
      responseType,
      signal,
    }).then(
      response => {
        if (fullResponse) {
          return resolve(response);
        }
        const DATA = checkedExpectedList({ expectedList, response });
        const KEY_DATA = setKeyData({ data: DATA, keyId });
        if (apiSaveId) {
          API_SAVED.value[apiSaveId].data = DATA;
          API_SAVED.value[apiSaveId].keyData = KEY_DATA;
          API_SAVED.value[apiSaveId].loading = false;
        }
        if (keyId) {
          return resolve(KEY_DATA);
        }
        return resolve(DATA);
      },
      error => {
        if (error?.code === "ERR_CANCELED") { // workaround. we'll remake this in v2.0.0
          return reject(error);
        }
        if (ignoreErrorHandler || checkErrorStatus({ error: error.response, showError, client: API, reject, resolve })) {
          return reject(error.response);
        }
      }
    ).finally(
      () => {
        removeAbortGroupCurrent({ abortGroup, abortable });
      }
    );
  });

  if (!apiSavedData) {
    API_SAVED.value[apiSaveId] = API_SAVED.value[apiSaveId] || {};
    API_SAVED.value[apiSaveId].loading = true;
    API_SAVED.value[apiSaveId].promise = PROMISE;
  }

  return PROMISE;
}

function checkErrorStatus({ error, showError, client, resolve, reject }) {
  if (!error) {
    return true;
  }
  const ERROR_CALLBACK = () => {
    const CALLBACK = ERROR_CALLBACKS.value[error.status];
    if (isFunction(CALLBACK)) {
      return CALLBACK({ error, showError, client, resolve, reject });
    }
    if (isFunction(ERROR_CALLBACKS.value.all)) {
      return ERROR_CALLBACKS.value.all({ error, showError, client, resolve, reject });
    }
    return true;
  };

  return ERROR_CALLBACK();
}

export function setUrlWithParams({ url, params }) {
  const URL = url || "";
  let urlParams = "";
  forEach(params, (value, key) => {
    if (isArray(value)) {
      urlParams = API_CONFIG.value.setUrlForArray({ id: key, array: value, url: urlParams });
    } else if (isPlainObject(value)) {
      forEach(value, (v, k) => {
        if (v) {
          if (urlParams) {
            urlParams += "&";
          }
          urlParams += `${ k }=${ v }`;
        }
      });
    } else if (!isNil(value)) {
      if (urlParams) {
        urlParams += "&";
      }
      urlParams += `${ key }=${ value }`;
    }
  });
  const prefix = urlParams && URL ? URL.indexOf("?") === -1 ? "?" : "&" : "";

  return `${ URL }${ prefix }${ urlParams }`;
}

export function setUrlForArray({ array, url, id }) {
  if (!array.length) {
    return url;
  }
  let URL = url || "";
  if (id === "fields" || id === "ordering") { // TODO: soll in plugin sein.
    if (URL) {
      URL += "&";
    }
    URL += `${ id }=`;
    URL += array.join(",");
  } else {
    forEach(array, v => {
      if (URL) {
        URL += "&";
      }
      URL += `${ id }=${ v }`;
    });
  }
  return URL;
}

function setKeyData({ data, keyId }) {
  if (!keyId) {
    return undefined;
  }
  return keyBy(data, keyId);
}

function checkedExpectedList({ expectedList, response }) {
  if (expectedList) {
    if (isArray(response.data)) {
      return response.data;
    }
    return response.data.results ? response.data.results : [];
  }
  return response.data;
}

function getAbortGroupSignal({ abortGroup = "_global", abortable } = {}) {
  if (!abortable) {
    return undefined;
  }
  abortGroupController[abortGroup] = abortGroupController[abortGroup] || new AbortController();
  return abortGroupController[abortGroup].signal;
}

function getExcludeAbortGroup({ excludeAbortGroup }) {
  const EXCLUDE_ABORT_GROUP_OBJ = {};
  if (excludeAbortGroup) {
    if (isString(excludeAbortGroup)) {
      EXCLUDE_ABORT_GROUP_OBJ[excludeAbortGroup] = true;
    } else if (isArray(excludeAbortGroup)) {
      forEach(excludeAbortGroup, abortGroupkey => {
        EXCLUDE_ABORT_GROUP_OBJ[abortGroupkey] = true;
      });
    }
  }
  return EXCLUDE_ABORT_GROUP_OBJ;
}

function setAbortGroupPendingCurrent({ abortGroup, abortable }) {
  if (!abortable || !abortGroup) {
    return;
  }
  if (abortGroupPending[abortGroup]) {
    abortGroupPending[abortGroup]++;
  } else {
    abortGroupPending[abortGroup] = 1;
  }
}

function removeAbortGroupCurrent({ abortGroup, abortable }) {
  if (!abortable || !abortGroup) {
    return;
  }
  if (abortGroupPending[abortGroup]) {
    abortGroupPending[abortGroup]--;
  }
  if (abortGroupPending[abortGroup] === 0 && abortGroupController[abortGroup]) {
    delete abortGroupPending[abortGroup];
    delete abortGroupController[abortGroup];
  }
}

export function getUrlParams({ url, allCommasToArray = false, keysCommaToArray = [] } = {}) {
  let urlParamsString = url || window.location.search.substring(1);
  try {
    urlParamsString = decodeURI(urlParamsString);
  } catch (e) {
    console.error(e);
  }
  const urlParamsArray = urlParamsString.split("&");
  const urlParamsObj = {};
  forEach(urlParamsArray, item => {
    const pair = item.split("=");
    if (pair && pair.length === 2) {
      if (pair[1].indexOf("[") !== -1 || pair[1].indexOf("%5B") !== -1) { // Wenn in URL array steht. Z.B.: doc_type1=%5B%22uuid1%22%5D oder doc_type1=["uuid1"]
        const stringValue = pair[1].replace("%5B", "[").replace("%5D", "]").replace(/%22/g, `"`);
        urlParamsObj[pair[0]] = JSON.parse(stringValue);
      } else if (pair[1].indexOf(",") !== -1 &&
        (allCommasToArray ||
          keysCommaToArray.indexOf(pair[0]) !== -1)) {
        const LIST = pair[1].split(",");
        urlParamsObj[pair[0]] = LIST;
      } else if (urlParamsObj[pair[0]]) {
        if (isString(urlParamsObj[pair[0]])) {
          urlParamsObj[pair[0]] = [urlParamsObj[pair[0]]];
          urlParamsObj[pair[0]].push(pair[1]);
        } else if (isArray(urlParamsObj[pair[0]])) {
          urlParamsObj[pair[0]].push(pair[1]);
        }
      } else {
        urlParamsObj[pair[0]] = pair[1];
      }
    }
  });
  return urlParamsObj;
}
