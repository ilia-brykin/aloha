export default function HtmlAPI() {
  const codeHtml = `<a-textarea
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-textarea>
<a-textarea
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-textarea>
<a-textarea
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-textarea>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
