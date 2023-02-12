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
