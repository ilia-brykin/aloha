export default function HtmlAPI() {
  const codeHtml = `<a-one-checkbox
  v-model="model"
  :true-value="1"
  class="a_mt_3"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
