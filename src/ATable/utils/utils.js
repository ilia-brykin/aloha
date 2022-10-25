import {
  forEach,
} from "lodash-es";

export function getModelColumnsVisibleDefault(columns) {
  const MODEL_COLUMNS_VISIBLE = {};
  columns.forEach(column => {
    MODEL_COLUMNS_VISIBLE[column.id] = !column.hide;
  });
  return MODEL_COLUMNS_VISIBLE;
}

export function getModelColumnsOrderingDefault(columns) {
  return columns.map(column => column.id);
}

export function isClickOnLinkOrButton($event) {
  if ($event && $event.path) {
    let isLink = false;
    forEach($event.path, item => {
      if (item.tagName === "A" || item.tagName === "BUTTON") {
        isLink = true;
        return false;
      } else if (item.tagName === "TD") {
        return false;
      }
    });

    return isLink;
  }
}
