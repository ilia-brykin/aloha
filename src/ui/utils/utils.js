import {
  isArray,
} from "lodash";
import {
  typesContainer,
  typesModelArray,
  typesModelObject,
} from "../const/AUiTypes";
import {
  filter,
  forEach,
  get,
  isEmpty,
  isNil,
} from "lodash-es";

export function getLabelClickEventName(id) {
  return `clickALabel_${ id }`;
}

/**
 * Recursively filters a list of elements based on visibility and requirement criteria.
 *
 * @param {Array} elements - The list of elements to filter
 * @returns {Array} - Filtered list containing only visible required elements or elements with visible required children
 */
export function filterVisibleRequiredUiElements({ elements }) {
  if (!elements?.length) {
    return [];
  }

  return filter(elements, element => {
    if (element.isRender === false ||
      element.isHide === true) {
      return false;
    }

    if (element?.children?.length) {
      element.children = filterVisibleRequiredUiElements({ elements: element.children });

      if (!element.children.length) {
        return false;
      }
    }

    return element.required;
  });
}

export function isAnyRequiredUiElementEmpty({ elements, model }) {
  let isAnyEmpty = false;

  forEach(elements, element => {
    const CURREN_MODEL = get(model, element.id);
    if (typesModelArray.value[element.type]) {
      if (!isArray(CURREN_MODEL) || !CURREN_MODEL.length) {
        isAnyEmpty = true;
        return false;
      }
    } else if (typesModelObject.value[element.type]) {
      if (isEmpty(CURREN_MODEL)) {
        isAnyEmpty = true;
        return false;
      }
    } else if (element.children?.length) {
      isAnyEmpty = isAnyRequiredUiElementEmpty({ elements: element.children, model: CURREN_MODEL });
      if (isAnyEmpty) {
        return false;
      }
    } else if (typesContainer.value[element.type]) {
      // TODO: Containers
    } else if (isNil(CURREN_MODEL) || CURREN_MODEL === "") {
      isAnyEmpty = true;
      return false;
    }
  });

  return isAnyEmpty;
}
