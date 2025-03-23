export default function HtmlAPI() {
  const codeHtml = `<a-fieldset
  :model-value="model1"
  :children="children1"
  :readonly="true"
  label="Fieldset 1"
></a-fieldset>
<a-fieldset
  :model-value="model2"
  :children="children2"
  :readonly="true"
  class="a_mt_3"
  label="Fieldset 2"
  readonly-default="-"
></a-fieldset>`;

  return {
    codeHtml,
  };
}
