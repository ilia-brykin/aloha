export default function HtmlAPI() {
  const codeHtml = `<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_LABEL_"
  key-id="id"
>
</a-table>`;

  return {
    codeHtml,
  };
}
