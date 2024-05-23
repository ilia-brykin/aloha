import {
  filter,
  forEach,
  last,
} from "lodash-es";

export function filterActionsHiddenAndDivider({ actions }) {
  const ACTIONS_FILTERED = filter(actions, action => {
    return !action.isHidden;
  });

  const ACTIONS_DIVIDER_FILTERED = [];
  forEach(ACTIONS_FILTERED, action => {
    if (action.type !== "divider" ||
        (ACTIONS_DIVIDER_FILTERED.length > 0 &&
          last(ACTIONS_DIVIDER_FILTERED).type !== "divider")) {
      ACTIONS_DIVIDER_FILTERED.push(action);
    }
  });
  const LAST_ACTION = last(ACTIONS_DIVIDER_FILTERED);
  if (LAST_ACTION && LAST_ACTION.type === "divider") {
    ACTIONS_DIVIDER_FILTERED.pop();
  }

  return ACTIONS_DIVIDER_FILTERED;
}

export function filterActionsDivider({ actions }) {
  const ACTIONS_DIVIDER_FILTERED = [];
  forEach(actions, action => {
    if (action.type !== "divider" ||
      (ACTIONS_DIVIDER_FILTERED.length > 0 &&
        last(ACTIONS_DIVIDER_FILTERED).type !== "divider")) {
      ACTIONS_DIVIDER_FILTERED.push(action);
    }
  });
  const LAST_ACTION = last(ACTIONS_DIVIDER_FILTERED);
  if (LAST_ACTION && LAST_ACTION.type === "divider") {
    ACTIONS_DIVIDER_FILTERED.pop();
  }

  return ACTIONS_DIVIDER_FILTERED;
}

/**
 * Concatenates two strings with a space between them.
 *
 * @param {Object} options - The options for concatenation.
 * @param {string} options.class1 - The first class to concatenate.
 * @param {string} options.class2 - The second class to concatenate.
 * @param {string} [options.defaultValue=undefined] - The default value to return if both class1 and class2 are falsy.
 * @returns {string} The concatenated string or the defaultValue if both class1 and class2 are falsy.
 */
export function concatTwoStringsWithSpace({ class1, class2, defaultValue = undefined }) {
  if (class1) {
    if (class2) {
      return `${ class1 } ${ class2 }`;
    }
    return class1;
  }
  if (class2) {
    return class2;
  }
  return defaultValue;
}
