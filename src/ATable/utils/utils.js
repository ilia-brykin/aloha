export function getModelColumnsVisibleDefault(columns) {
  const MODEL_COLUMNS_VISIBLE = [];
  columns.forEach(column => {
    if (!column.hide) {
      MODEL_COLUMNS_VISIBLE.push(column.id);
    }
  });
  return MODEL_COLUMNS_VISIBLE;
}

export function getModelColumnsOrderingDefault(columns) {
  return columns.map(column => column.id);
}
