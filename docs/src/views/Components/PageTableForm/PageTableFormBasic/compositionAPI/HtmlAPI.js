export default function HtmlAPI() {
  const codeHtml = `<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>\n`;

  return {
    codeHtml,
  };
}
