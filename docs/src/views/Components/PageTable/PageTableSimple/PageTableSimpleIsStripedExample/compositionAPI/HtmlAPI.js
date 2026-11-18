export default function HtmlAPI() {
  const codeHtml = `<a-table
  :columns="columns"
  :data="data"
  :is-striped="true"
  label="_A_TABLE_GROUP_SIMPLE_IS_STRIPED_LABEL_"
  key-id="id"
>
</a-table>`;

  return {
    codeHtml,
  };
}
