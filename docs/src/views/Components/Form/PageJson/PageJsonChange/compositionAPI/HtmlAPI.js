export default function HtmlAPI() {
  const codeHtml = `<a-json
  :change="changeModel"
  :model-value="model"
  label="JSON"
></a-json>
<div>model:</div>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
