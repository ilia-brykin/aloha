export default function HtmlAPI() {
  const codeHtml = `<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_PAGINATION_LIMIT_START_LABEL_"
  key-id="id"
  :has-pagination="true"
  :limits-per-page="['5', '10', '25', '50', '100', '200']"
  :limit-start="5"
>
</a-table>`;

  return {
    codeHtml,
  };
}
