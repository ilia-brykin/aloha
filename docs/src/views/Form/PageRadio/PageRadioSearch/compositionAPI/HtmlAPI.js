export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  label="Aloha group"
  :search="true"
></a-radio>
<div>model: {{ model }}</div>
<a-radio
  v-model="model"
  class="a_mt_3"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :search="true"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
