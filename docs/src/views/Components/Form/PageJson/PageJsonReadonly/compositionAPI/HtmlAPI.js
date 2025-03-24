export default function HtmlAPI() {
  const codeHtml = `<a-json
  :model-value="model1"
  :readonly="true"
  label="JSON 1"
></a-json>
<a-json
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="JSON 2"
></a-json>
<a-json
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="JSON 3"
  readonly-default="-"
></a-json>`;

  return {
    codeHtml,
  };
}
