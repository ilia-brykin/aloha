export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model"
  :data="data"
  :is-data-simple-array="true"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
