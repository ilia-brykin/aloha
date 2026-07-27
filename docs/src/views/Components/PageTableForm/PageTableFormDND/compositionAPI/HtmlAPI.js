export default function HtmlAPI() {
  const codeHtml = `<a-table-form
  :columns="columns"
  :dnd-disabled-callback="dndDisabledCallback"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>\n`;

  return {
    codeHtml,
  };
}
