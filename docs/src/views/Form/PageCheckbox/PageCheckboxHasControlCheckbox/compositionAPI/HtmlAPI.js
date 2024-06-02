export default function HtmlAPI() {
  const codeHtml = `<a-checkbox
  v-model="model"
  :data="data"
  :inline="true"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
></a-checkbox>
<div>model: {{ model }}</div>
<a-checkbox
  v-model="model"
  :data="data"
  :inline="true"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-checkbox>
<div>model: {{ model }}</div>
<a-checkbox
  v-model="model1"
  :data="data"
  :has-control-checkbox="true"
  :inline="true"
  key-id="id"
  key-label="label"
  label="Aloha inline"
  type="select"
></a-checkbox>
<div>model1: {{ model1 }}</div>`;

  return {
    codeHtml,
  };
}
