import {
  create,
  setBaseUrl,
  setErrorCallbacks,
  setHeaderParams,
} from "../compositionAPI/AHttpAPI";

export default {
  install: (app, { axiosCreateOptions = {}, baseUrl = "/api/", errorCallbacks = {}, headerParams = {} } = {}) => {
    create({ axiosCreateOptions });
    setBaseUrl({ baseUrl });
    setErrorCallbacks({ errorCallbacks });
    setHeaderParams({ headerParams });
  },
};
