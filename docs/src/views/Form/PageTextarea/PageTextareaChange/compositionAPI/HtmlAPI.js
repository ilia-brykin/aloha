export default function HtmlAPI() {
  const codeHtml = `<a-textarea
  :change="changeModel"
  :model-value="model"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
