export default function HtmlAPI() {
  const codeHtml = `<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LABEL_"
  key-id="id"
  :use-pagination="true"
>
</a-table>`;

  return {
    codeHtml,
  };
}
