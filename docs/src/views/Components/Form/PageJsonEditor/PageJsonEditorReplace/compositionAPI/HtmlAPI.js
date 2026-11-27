export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  ref="editorRef"
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_CONFIG_"
  :expand-level="2"
/>
<a-button
  class="a_btn a_btn_outline_primary"
  text="_A_JSON_EDITOR_EXAMPLE_REPLACE_HOST_"
  @click="replaceHost"
/>
<p v-if="result">{{ result }}</p>`;

  return {
    codeHtml,
  };
}
