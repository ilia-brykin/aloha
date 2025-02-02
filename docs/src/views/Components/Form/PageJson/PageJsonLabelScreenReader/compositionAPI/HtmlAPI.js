export default function HtmlAPI() {
  const codeHtml = `<a-json
  v-model="model"
  label="JSON"
></a-json>
<a-json
  v-model="model"
  class="a_mt_3"
  label-screen-reader="JSON"
></a-json>`;

  return {
    codeHtml,
  };
}
