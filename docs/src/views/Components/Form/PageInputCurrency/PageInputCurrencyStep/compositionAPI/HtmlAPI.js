export default function HtmlAPI() {
  const codeHtml = `<a-input-currency
  v-model="model"
  :step="2"
  controls-type="plus-minus"
  label="step 2"
></a-input-currency>
<a-input-currency
  v-model="model"
  :step="0.01"
  class="a_mt_3"
  controls-type="plus-minus"
  label="step 0.01"
></a-input-currency>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
