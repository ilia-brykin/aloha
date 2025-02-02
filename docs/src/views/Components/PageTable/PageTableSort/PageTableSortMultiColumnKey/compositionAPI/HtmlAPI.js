export default function HtmlAPI() {
  const codeHtml = `<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_SHIFT_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  sorting-multi-column-key="shift"
>
</a-table>
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_CTRL_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  sorting-multi-column-key="ctrl"
>
</a-table>
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SORT_MULTI_COLUMN_KEY_ALT_LABEL_"
  key-id="id"
  :is-sorting-multi-column="true"
  sorting-multi-column-key="alt"
>
</a-table>`;

  return {
    codeHtml,
  };
}
