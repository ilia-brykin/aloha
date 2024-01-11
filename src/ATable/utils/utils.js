import { isNil } from "lodash-es";

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

function isTargetTags({ element, tagsName, classStop }) {
  if (element && element.tagName) {
    if (tagsName.indexOf(element.tagName) !== -1) {
      return true;
    }
    if (element.classList.contains(classStop)) {
      return false;
    }
    if (element.parentElement) {
      return isTargetTags({ element: element.parentElement, tagsName, classStop });
    }
  }
  return false;
}
export function isClickTags({ $event, classStop = "", tagsName = [] } = {}) {
  if ($event && $event.target) {
    return isTargetTags({ element: $event.target, tagsName, classStop });
  }
  return false;
}

export function isColumnVisibleFromModel({ column, modelColumnsVisibleLocal }) {
  if (column.isRender === false) {
    return false;
  }

  if (column.id in modelColumnsVisibleLocal) {
    return !!modelColumnsVisibleLocal[column.id];
  }
  return !column.hide;
}

function isColumnVisibleFromScroll({ columnIndex, indexFirstScrollInvisibleColumn }) {
  if (isNil(indexFirstScrollInvisibleColumn)) {
    return true;
  }
  return columnIndex < indexFirstScrollInvisibleColumn;
}

export function isColumnVisible({ column, columnIndex, modelIsTableWithoutScroll, modelColumnsVisibleLocal, indexFirstScrollInvisibleColumn }) {
  if (modelIsTableWithoutScroll) {
    return isColumnVisibleFromModel({
      column,
      modelColumnsVisibleLocal,
    }) && isColumnVisibleFromScroll({
      columnIndex,
      indexFirstScrollInvisibleColumn,
    });
  }
  return isColumnVisibleFromModel({
    column,
    modelColumnsVisibleLocal,
  });
}
