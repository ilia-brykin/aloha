export default function HtmlAPI() {
  const codeHtml = `<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_START_ASC_LABEL_"
  key-id="id"
  model-sort="number"
>
</a-table>
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_START_DESC_LABEL_"
  key-id="id"
  model-sort="-number"
>
</a-table>`;

  return {
    codeHtml,
  };
}
