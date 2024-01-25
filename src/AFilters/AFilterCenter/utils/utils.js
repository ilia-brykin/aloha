import {
  isArray,
  isNil,
} from "lodash-es";

export function hasFilterCenter({ filter, currentModel }) {
  if (!filter ||
    filter.hideFilterCenter ||
    isNil(currentModel) ||
    currentModel === "" ||
    (isArray(currentModel) && !currentModel.length)) {
    return false;
  }
  return true;
}
