export default function HtmlAPI() {
  const codeHtml = `<a-multiselect-ordered
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :search-in-group="true"
  :search-text-in-html="true"
  :search="true"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-multiselect-ordered>
<a-multiselect-ordered
  v-model="model"
  :data="data"
  :search-text-in-html="true"
  :search="true"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-multiselect-ordered>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
