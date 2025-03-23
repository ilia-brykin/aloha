export default function HtmlAPI() {
  const codeHtml = `<a-radio
  :model-value="model1"
  :data="data"
  :readonly="true"
  label="Radio 1"
></a-radio>
<a-radio
  :model-value="model2"
  :data="data"
  :is-model-array="true"
  :readonly="true"
  class="a_mt_3"
  label="Radio 2"
></a-radio>
<a-radio
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  label="Radio 3"
></a-radio>
<a-radio
  :model-value="model3"
  :data="data"
  :readonly="true"
  class="a_mt_3"
  label="Radio 4"
  readonly-default="-"
></a-radio>`;

  return {
    codeHtml,
  };
}
