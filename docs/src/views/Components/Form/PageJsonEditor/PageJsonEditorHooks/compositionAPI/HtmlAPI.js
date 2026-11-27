export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_SETTINGS_"
  confirm-remove="containers"
  :before-add="beforeAdd"
  :before-rename="beforeRename"
  :after-change="afterChange"
  :get-node-actions="getNodeActions"
/>
<ol>
  <li v-for="(entry, index) in log" :key="index">{{ entry }}</li>
</ol>`;

  return {
    codeHtml,
  };
}
