export default function HtmlAPI() {
  const codeHtml = `<a-select
  v-model="model"
  :data="data"
  :is-exclusive-option-enabled="true"
  :exclusive-option-label="exclusiveOptionLabel"
  :exclusive-option-value="exclusiveOptionValue"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
