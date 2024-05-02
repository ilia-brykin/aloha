import {
  typesModelArray,
  typesModelObject,
} from "../ui/const/AUiTypes";

import {
  isEmpty,
} from "lodash-es";

/**
 * Evaluates if a specified model identified by a filter is not empty. The function distinguishes between models
 * that are arrays and those that are objects, based on the filter's type. For array types, it checks if the array
 * has elements. For object types, it verifies the object is not empty. Assumes true if the model does not
 * match the specified types.
 *
 * @param {Object} options - Parameters
 * @param {Object} options.filter - Filter with `id` and `type` for model identification.
 * @param {Object} options.modelObj - Object with models keyed by ID.
 *
 * @returns {boolean} True if the model is not empty, false otherwise.
 */

export function isModelForFilterNotEmpty({ filter = {}, modelObj = {} }) {
  const MODEL_ID = filter.id;
  if (!(MODEL_ID in modelObj)) {
    return false;
  }

  if (typesModelArray.value[filter.type]) {
    return !!modelObj[MODEL_ID]?.length;
  }

  if (typesModelObject.value[filter.type]) {
    return !!(modelObj[MODEL_ID] && !isEmpty(modelObj[MODEL_ID]));
  }

  return true;
}
