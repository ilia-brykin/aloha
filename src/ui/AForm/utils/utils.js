/**
 * Returns the model identifier from the passed object. If the object contains a `modelId` property,
 * this value is returned. Otherwise, the value of the `id` property is returned.
 *
 * @param {Object} [params] - The parameters object, which may include an `item` property.
 * @param {Object} [params.item] - The object from which to extract the identifier.
 * @returns {(string|undefined)} The model identifier or `undefined` if `item` is not defined or lacks the required properties.
 */
export function getModelId({ item } = {}) {
  return item?.modelId || item?.id;
}
