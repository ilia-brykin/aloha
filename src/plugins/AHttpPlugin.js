import {
  create,
  setBaseUrl, setErrorCallbacks,
} from "../compositionAPI/AHttpAPI";

export default {
  install: (app, { axiosCreateOptions = {}, baseUrl = "/api/", errorCallbacks = {} } = {}) => {
    create({ axiosCreateOptions });
    setBaseUrl({ baseUrl });
    setErrorCallbacks({ errorCallbacks });
  },
};
