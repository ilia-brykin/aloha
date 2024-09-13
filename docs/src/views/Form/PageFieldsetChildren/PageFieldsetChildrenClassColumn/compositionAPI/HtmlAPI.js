export default function HtmlAPI() {
  const codeHtml = `<a-fieldset
  v-model="model"
  :children="children"
  class-column="a_column a_column_6 a_column_12_touch"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
