import {
  ref,
} from "vue";

import {
  AKeyId,
  AKeyLabel,
} from "../const/AKeys";
import {
  get,
  map,
} from "lodash-es";

export const defaultRetrieve = ({
  getListHttp,
  isDataSimpleArray = false,
  keyId = "value",
  keyLabel = "label",
  modelArray = [],
  url,
  urlParams = {},
} = {}) => {
  if (!url || !modelArray.length) {
    return Promise.resolve([]);
  }

  return getListHttp({
    url,
    urlParams: {
      ...(urlParams || {}),
      [keyId]: modelArray,
      limit: modelArray.length,
    },
  }).then(response => {
    if (!isDataSimpleArray) {
      return response || [];
    }

    return map(response || [], item => {
      return {
        [AKeyId]: get(item, keyId, item),
        [AKeyLabel]: get(item, keyLabel, get(item, keyId, item)),
      };
    });
  });
};

export const ADataRetrievePluginOptions = ref({
  callbacks: {
    retrieve: defaultRetrieve,
  },
});

export default {
  install: (app, {
    callbacks = {},
  } = {}) => {
    ADataRetrievePluginOptions.value.callbacks = {
      ...ADataRetrievePluginOptions.value.callbacks,
      ...callbacks,
    };
  },
};
