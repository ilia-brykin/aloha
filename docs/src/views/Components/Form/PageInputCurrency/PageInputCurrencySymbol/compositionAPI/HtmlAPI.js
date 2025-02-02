export default function HtmlAPI() {
  const codeHtml = `<a-input-currency
  v-model="model"
  currency-symbol-position="right"
  currency-symbol="%"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  class="a_mt_3"
  currency-symbol-position="left"
  currency-symbol="$"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
