export default function HtmlAPI() {
  const codeHtml = `<a-switch
  v-model="model"
  :is-title-html="true"
  title="Aloha"
></a-switch>
<a-switch
  v-model="model"
  :is-title-html="false"
  class="a_mt_3"
  title="Aloha"
></a-switch>`;

  return {
    codeHtml,
  };
}
