export default function HtmlAPI() {
  const codeHtml = `<a-checkbox
  v-model="model"
  :data="data"
  :has-border="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<a-checkbox
  v-model="model"
  :data="data"
  :has-border="false"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
