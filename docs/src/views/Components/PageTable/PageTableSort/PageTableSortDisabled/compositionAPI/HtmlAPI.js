export default function HtmlAPI() {
  const codeHtml = `<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_DISABLED_LABEL_"
  key-id="id"
  :disabled-sort="true"
>
</a-table>`;

  return {
    codeHtml,
  };
}
