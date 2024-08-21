export default function HtmlAPI() {
  const codeHtml = `<a-input-currency
  v-model="model"
  thousand-divider=","
  label="thousand-divider=','"
></a-input-currency>
<a-input-currency
  v-model="model"
  thousand-divider="."
  class="a_mt_3"
  label="thousand-divider='.'"
></a-input-currency>
<a-input-currency
  v-model="model"
  thousand-divider=" "
  class="a_mt_3"
  label="thousand-divider=' '"
></a-input-currency>
<a-input-currency
  v-model="model"
  thousand-divider=""
  class="a_mt_3"
  label="thousand-divider=''"
></a-input-currency>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
