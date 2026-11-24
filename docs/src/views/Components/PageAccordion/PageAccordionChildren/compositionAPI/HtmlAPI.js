export default function HtmlAPI() {
  const codeHtml = `<a-accordion
  :data="data"
  :indexes-for-open="indexesForOpen"
  key-id="id"
/>`;

  return {
    codeHtml,
  };
}
