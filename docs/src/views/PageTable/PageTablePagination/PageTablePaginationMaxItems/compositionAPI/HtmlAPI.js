export default function HtmlAPI() {
  const codeHtml = `<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_MAX_ITEMS_LABEL_"
  key-id="id"
  :use-pagination="true"
  :pagination-max-items="7"
>
</a-table>`;

  return {
    codeHtml,
  };
}
