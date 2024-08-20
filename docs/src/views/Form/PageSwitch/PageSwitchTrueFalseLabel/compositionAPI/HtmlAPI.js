export default function HtmlAPI() {
  const codeHtml = `<a-switch
  v-model="model"
  false-label="0"
  true-label="1"
></a-switch>`;

  return {
    codeHtml,
  };
}
