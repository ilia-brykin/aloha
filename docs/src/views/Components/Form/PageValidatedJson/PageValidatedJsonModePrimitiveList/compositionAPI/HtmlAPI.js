export default function HtmlAPI() {
  const codeHtml = `<a-validated-json
  v-model="model"
  mode="list"
  value-key="value"
  :children="children"
  :unique-children-ids="['value']"
  element-template="{{ value }}"
/>`;
  return { codeHtml };
}
