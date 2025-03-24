export default function HtmlAPI() {
  const codeHtml = `<a-input-number-range
  :model-value="model1"
  :readonly="true"
  label="Input 1"
></a-input-number-range>
<a-input-number-range
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Input 2"
></a-input-number-range>
<a-input-number-range
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Input 3"
></a-input-number-range>
<a-input-number-range
  :model-value="model4"
  :readonly="true"
  class="a_mt_3"
  label="Input 4"
></a-input-number-range>
<a-input-number-range
  :model-value="model4"
  :readonly="true"
  class="a_mt_3"
  label="Input 5"
  readonly-default="-"
></a-input-number-range>
<a-input-number-range
  :model-value="model4"
  :readonly="true"
  class="a_mt_3"
  help-text="Aloha"
  label="Input 6"
  readonly-default-max="-"
  readonly-default-min="----"
></a-input-number-range>`;

  return {
    codeHtml,
  };
}
