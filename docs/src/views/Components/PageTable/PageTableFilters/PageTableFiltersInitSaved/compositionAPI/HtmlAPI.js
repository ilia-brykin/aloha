export default function HtmlAPI() {
  const codeHtml = `<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_FILTERS_LABEL_"
  key-id="id"
  :filter="{ filters, canSave: true, filtersSaved }"
  :model-filters="modelFilters"
  @update-model-filters="updateModelFilters"
>
</a-table>`;

  return {
    codeHtml,
  };
}
