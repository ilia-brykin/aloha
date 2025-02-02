export default function HtmlAPI() {
  const codeHtml = `<a-switch
  v-model="model"
  label="ASwitch"
></a-switch>
<a-switch
  v-model="model"
  class="a_mt_3"
  label-screen-reader="ASwitch"
></a-switch>`;

  return {
    codeHtml,
  };
}
