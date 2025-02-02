export default function HtmlAPI() {
  const codeHtml = `<a-input-currency
  v-model="model"
  :max="20"
  :min="1"
  label="1 - 20"
></a-input-currency>
<a-input-currency
  v-model="model"
  :max="19.05"
  :min="-10.05"
  class="a_mt_3"
  label="-10.05 - 19.05"
></a-input-currency>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
