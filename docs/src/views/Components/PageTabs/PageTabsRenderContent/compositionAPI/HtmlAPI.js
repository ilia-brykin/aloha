export default function HtmlAPI() {
  const codeHtml = `<a-tabs
  :data="data"
  key-id="id"
  render-content="once"
/>`;

  return {
    codeHtml,
  };
}
