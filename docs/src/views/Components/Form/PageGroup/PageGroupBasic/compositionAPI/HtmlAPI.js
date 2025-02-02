export default function HtmlAPI() {
  const codeHtml = `<a-group
  v-model="model"
  :children="childrenGroup"
></a-group>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
