export default function HtmlAPI() {
  const codeHtml = `<a-input
  v-model="model"
  :show-password="true"
  label="Input"
  type="password"
></a-input>
<a-input
  v-model="model"
  :show-password="false"
  class="a_mt_3"
  label="Input"
  type="password"
></a-input>`;

  return {
    codeHtml,
  };
}
