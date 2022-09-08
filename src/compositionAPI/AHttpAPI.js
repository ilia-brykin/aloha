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
  keyBy,
} from "lodash-es";


const BASE_URL = ref("/api/");
const API = ref(axios.create());
const API_SAVED = ref({});
const ERROR_CALLBACKS = ref({});

export function create({ axiosCreateOptions = {} }) {
  API.value = axios.create(axiosCreateOptions);
}

export function setBaseUrl({ baseUrl = "" }) {
  BASE_URL.value = baseUrl;
}

export function setErrorCallbacks({ errorCallbacks = {} }) {
  ERROR_CALLBACKS.value = errorCallbacks;
}

export default function AHttpAPI() {
  return {
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
  data,
  urlParams = {},
  headerParams,
  responseType,
  apiSaveId,
  keyId,
  fullResponse,
  showError,
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "get",
    url,
    urlParams,
    data,
    headerParams,
    responseType,
    apiSaveId,
    keyId,
    fullResponse,
    showError,
  });
}

export function getListHttp({
  url,
  data,
  urlParams = {},
  headerParams,
  responseType,
  apiSaveId,
  keyId,
  fullResponse,
  showError,
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "get",
    url,
    urlParams,
    data,
    headerParams,
    responseType,
    apiSaveId,
    keyId,
    fullResponse,
    showError,
    expectedList: true,
  });
}

export function getOptionsHttp({
  url,
  data,
  urlParams = {},
  headerParams,
  responseType,
  keyId,
  fullResponse,
  showError,
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "options",
    url,
    urlParams,
    data,
    headerParams,
    responseType,
    keyId,
    fullResponse,
    showError,
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
  });
}

export function putHttp({
  url,
  data,
  urlParams = {},
  headerParams,
  responseType,
  fullResponse,
  showError,
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "put",
    url,
    urlParams,
    data,
    headerParams,
    responseType,
    fullResponse,
    showError,
  });
}

export function patchHttp({
  url,
  data,
  urlParams = {},
  headerParams,
  responseType,
  fullResponse,
  showError,
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "patch",
    url,
    urlParams,
    data,
    headerParams,
    responseType,
    fullResponse,
    showError,
  });
}

export function deleteHttp({
  url,
  data,
  urlParams = {},
  headerParams,
  responseType,
  fullResponse,
  showError,
}) {
  return callHttpRequestAndCheckSavedApi({
    methodHttp: "delete",
    url,
    urlParams,
    data,
    headerParams,
    responseType,
    fullResponse,
    showError,
  });
}

export function callHttpRequestAndCheckSavedApi({
  methodHttp,
  url,
  urlParams,
  data,
  headerParams,
  responseType = "json",
  apiSaveId,
  keyId,
  fullResponse,
  showError = false,
  expectedList
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
    let url_full = `${ BASE_URL.value }${ URL_NEW }`;
    url_full = url_full.replace(/\/\//g, "/");
    API.value({
      method: methodHttp,
      url: url_full,
      data,
      headers: headerParams,
      responseType,
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
        if (checkErrorStatus({ error: error.response, showError, client: API, reject, resolve })) {
          return reject(error.response);
        }
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
    const CALLBACK = ERROR_CALLBACKS[error.status];
    if (isFunction(CALLBACK)) {
      return CALLBACK({ error, showError, client, resolve, reject });
    }
  };

  ERROR_CALLBACK();
  // Let the promise handle the error
  return true;
}

export function setUrlWithParams({ url, params }) {
  const URL = url || "";
  let urlParams = "";
  forEach(params, (value, key) => {
    if (isArray(value)) {
      urlParams = setUrlForArray({ id: key, array: value, url: urlParams });
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
  if (id === "fields") {
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
