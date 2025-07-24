export default function HtmlAPI() {
  const codeHtml = `<a-router-link-config
  v-model="model1"
  :required="true"
  label="Select"
  type="selectRoute"
></a-router-link-config>
<div>model1: {{ model1 }}</div>
<a-router-link-config
  v-model="model2"
  :required="true"
  class="a_mt_3"
  label="Select"
  type="multiselectRoute"
></a-router-link-config>
<div>model2: {{ model2 }}</div>`;

  return {
    codeHtml,
  };
}
