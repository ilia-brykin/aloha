export default function HtmlAPI() {
  const codeHtml = `<!-- Home › … › Laptops › Aloha Book 14 -->
<a-breadcrumb
  :items="items"
  :max-items="3"
/>`;

  return {
    codeHtml,
  };
}
