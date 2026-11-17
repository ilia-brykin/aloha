export default function HtmlAPI() {
  const codeHtml = `<a-select
  v-model="model"
  label="label-position: float"
  label-position="float"
  :data="data"
  key-id="id"
  key-label="label"
></a-select>
<a-select
  v-model="model"
  label="label-position: inset"
  label-position="inset"
  :data="data"
  key-id="id"
  key-label="label"
></a-select>
<a-select
  v-model="model"
  label="label-position: top"
  label-position="top"
  :data="data"
  key-id="id"
  key-label="label"
></a-select>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
