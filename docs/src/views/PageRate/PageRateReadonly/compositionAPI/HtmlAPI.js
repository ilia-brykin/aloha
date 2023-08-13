export default function HtmlAPI() {
  const codeHtml = `<a-rate 
  :model-value="2.4"
  :readonly="true"
  text="2.4 readonly">
</a-rate>`;

  return {
    codeHtml,
  };
}
