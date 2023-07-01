import {
  API_CONFIG,
  create,
  setBaseUrl,
  setErrorCallbacks,
  setHeaderParams,
} from "../compositionAPI/AHttpAPI";

import {
  isFunction,
} from "lodash-es";

export default {
  install: (app, { axiosCreateOptions = {}, baseUrl = "/api/", errorCallbacks = {}, headerParams = {}, setUrlForArray = undefined } = {}) => {
    create({ axiosCreateOptions });
    setBaseUrl({ baseUrl });
    setErrorCallbacks({ errorCallbacks });
    setHeaderParams({ headerParams });
    if (isFunction(setUrlForArray)) {
      API_CONFIG.value.setUrlForArray = setUrlForArray;
    }
  },
};
