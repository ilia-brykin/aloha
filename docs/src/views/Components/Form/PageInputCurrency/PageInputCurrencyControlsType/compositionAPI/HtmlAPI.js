export default function HtmlAPI() {
  const codeHtml = `<a-input-currency
  v-model="model"
  controls-type="none"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  controls-type="plus-minus"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
