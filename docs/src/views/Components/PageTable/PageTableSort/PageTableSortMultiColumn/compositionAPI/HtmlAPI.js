export default function HtmlAPI() {
  const codeHtml = `<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_MULTI_COLUMN_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  :model-sort="['-alohaPlus', 'aloha']"
>
</a-table>`;

  return {
    codeHtml,
  };
}
