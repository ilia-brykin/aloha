export default function HtmlAPI() {
  const codeHtml = `<a-input
  v-model="model"
  label="Input"
></a-input>
<a-input
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Input"
></a-input>`;

  return {
    codeHtml,
  };
}
