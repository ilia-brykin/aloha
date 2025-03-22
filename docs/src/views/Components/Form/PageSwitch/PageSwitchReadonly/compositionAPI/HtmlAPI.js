export default function HtmlAPI() {
  const codeHtml = `<a-switch
  :model-value="model1"
  :readonly="true"
  label="Switch 1"
></a-switch>
<a-switch
  :model-value="model2"
  :readonly="true"
  class="a_mt_3"
  label="Switch 2"
></a-switch>
<a-switch
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  label="Switch 3"
></a-switch>
<a-switch
  :model-value="model3"
  :readonly="true"
  class="a_mt_3"
  default-label="default"
  label="Switch 4"
></a-switch>`;

  return {
    codeHtml,
  };
}
