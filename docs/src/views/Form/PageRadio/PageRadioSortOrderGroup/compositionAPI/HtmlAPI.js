export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  :sort-order-group="undefined"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order-group="asc"
></a-radio>
<a-radio
  v-model="model"
  :data="data"
  :key-group="['alohaBR', 'aloha']"
  class="a_mt_3"
  key-id="id"
  key-label="label"
  label="Aloha"
  sort-order-group="desc"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
