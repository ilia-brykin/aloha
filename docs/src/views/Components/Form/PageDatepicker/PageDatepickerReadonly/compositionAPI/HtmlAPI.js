export default function HtmlAPI() {
  const codeHtml = `<a-datepicker
  :model-value="model1"
  :readonly="true"
  label="Input 1"
></a-datepicker>
<a-datepicker
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Input 2"
></a-datepicker>
<a-datepicker
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Input 3"
></a-datepicker>
<a-datepicker
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Input 4"
  readonly-default="-"
  help-text="Aloha"
></a-datepicker>`;

  return {
    codeHtml,
  };
}
