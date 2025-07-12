export default function HtmlAPI() {
  const codeHtml = `<a-select-style
  :change="changeModel1"
  :model-value="model1"
  label="Select 1"
></a-select-style>
<div>model1: {{ model1 }}</div>
<a-select-style
  :change="changeModel2"
  :model-value="model2"
  class="a_mt_3"
  label="Select 2"
  type="multiselect"
></a-select-style>
<div>model1: {{ model1 }}</div>`;

  return {
    codeHtml,
  };
}
