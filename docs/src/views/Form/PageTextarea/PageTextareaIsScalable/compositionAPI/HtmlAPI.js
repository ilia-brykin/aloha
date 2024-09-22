export default function HtmlAPI() {
  const codeHtml = `<a-textarea
  v-model="model"
  :is-scalable="true"
  label="Textarea"
></a-textarea>
<div>model:</div>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}