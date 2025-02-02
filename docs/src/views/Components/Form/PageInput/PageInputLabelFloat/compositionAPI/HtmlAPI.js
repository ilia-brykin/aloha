export default function HtmlAPI() {
  const codeHtml = `<a-input
  v-model="model"
  :is-label-float="false"
  label="Input"
></a-input>
<a-input
  v-model="model"
  :is-label-float="true"
  label="Input"
></a-input>`;

  return {
    codeHtml,
  };
}
