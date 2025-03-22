export default function HtmlAPI() {
  const codeHtml = `<a-textarea
  :model-value="model1"
  :readonly="true"
  label="Textarea 1"
></a-textarea>
<a-textarea
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Textarea 2"
></a-textarea>
<a-textarea
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Textarea 3"
  readonly-default="-"
></a-textarea>`;

  return {
    codeHtml,
  };
}
