export default function HtmlAPI() {
  const codeHtml = `<a-checkbox
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha group"
  key-disabled="disabled"
></a-checkbox>
<div>model: {{ model }}</div>
<a-checkbox
  v-model="model"
  class="a_mt_3"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  key-disabled="disabled"
></a-checkbox>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
