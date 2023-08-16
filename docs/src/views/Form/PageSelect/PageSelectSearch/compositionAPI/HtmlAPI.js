export default function HtmlAPI() {
  const codeHtml = `<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  label="Aloha group"
  :search="true"
></a-select>
<div>model: {{ model }}</div>
<a-select
  v-model="model"
  class="a_mt_3"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :search="true"
></a-select>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
