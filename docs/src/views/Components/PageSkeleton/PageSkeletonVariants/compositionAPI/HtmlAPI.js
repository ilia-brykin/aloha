export default function HtmlAPI() {
  const codeHtml = `<a-skeleton-item variant="text"></a-skeleton-item>
<a-skeleton-item variant="heading"></a-skeleton-item>
<a-skeleton-item variant="circle"></a-skeleton-item>
<a-skeleton-item variant="rect"></a-skeleton-item>
<a-skeleton-item variant="button"></a-skeleton-item>
<a-skeleton-item variant="input"></a-skeleton-item>
<a-skeleton-item
  variant="image"
  width="12rem"
></a-skeleton-item>`;

  return {
    codeHtml,
  };
}
