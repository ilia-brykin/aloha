export default function HtmlAPI() {
  const codeHtml = `<a-breadcrumb
  :items="items"
  separator="/"
></a-breadcrumb>`;

  return {
    codeHtml,
  };
}
