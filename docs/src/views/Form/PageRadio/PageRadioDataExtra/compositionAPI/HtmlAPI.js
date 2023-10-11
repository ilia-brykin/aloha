export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model1"
  :data="data"
  :data-extra="dataExtraArrayOfArrays"
  key-id="id"
  key-label="label"
  label="Data extra (Array of Arrays)"
  :search="true"
></a-radio>
<div>model1: {{ model1 }}</div>
<a-radio
  v-model="model2"
  class="a_mt_3"
  :data="data"
  :data-extra="dataExtraArrayOfObjects"
  key-id="id"
  key-label="label"
  label="Data extra (Array of Objects)"
  :search="true"
></a-radio>
<div>model2: {{ model2 }}</div>`;

  return {
    codeHtml,
  };
}
