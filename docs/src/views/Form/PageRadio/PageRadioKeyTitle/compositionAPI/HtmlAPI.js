export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  key-title="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :key-title-callback="onKeyTitleCallback"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
