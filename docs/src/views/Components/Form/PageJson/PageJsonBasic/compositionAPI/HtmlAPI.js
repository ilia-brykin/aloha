export default function HtmlAPI() {
  const codeHtml = `<a-json
  v-model="model"
  label="JSON"
></a-json>
<div>model:</div>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
