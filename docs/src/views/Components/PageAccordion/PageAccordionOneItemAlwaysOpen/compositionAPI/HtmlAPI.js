export default function HtmlAPI() {
  const codeHtml = `<a-accordion
  :data="data"
  :ids-for-open-default="idsForOpenDefault"
  :one-item-always-open="true"
/>`;

  return {
    codeHtml,
  };
}
