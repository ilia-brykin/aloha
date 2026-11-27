export default function HtmlAPI() {
  const codeHtml = `<a-accordion
  :data="data"
  :always-open="true"
  :with-gap="true"
/>`;

  return {
    codeHtml,
  };
}
