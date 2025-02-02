export default function HtmlAPI() {
  const codeHtml = `<a-one-checkbox
  v-model="model1"
  :false-value="false"
  label="false-value='false'"
></a-one-checkbox>
<div>model1: {{ model1 }}</div>
<a-one-checkbox
  v-model="model2"
  :false-value="0"
  class="a_mt_3"
  label="false-value='0'"
></a-one-checkbox>
<div>model2: {{ model2 }}</div>`;

  return {
    codeHtml,
  };
}
