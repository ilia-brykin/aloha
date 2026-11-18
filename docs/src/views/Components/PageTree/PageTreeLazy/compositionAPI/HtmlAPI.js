export default function HtmlAPI() {
  const codeHtml = `<a-tree
  :data="data"
  :load="load"
  aria-label="Folders"
></a-tree>`;

  return {
    codeHtml,
  };
}
