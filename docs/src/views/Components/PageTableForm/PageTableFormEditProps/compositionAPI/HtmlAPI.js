export default function HtmlAPI() {
  const codeHtml = `<a-table-form
  :columns="columns"
  :is-editable="true"
  :rows="rows"
  :save-row="saveRow"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
`;

  return {
    codeHtml,
  };
}
