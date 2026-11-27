export default function HtmlAPI() {
  const codeHtml = `<a-navbar
  :data="data"
  :open-delay="100"
  :close-delay="300"
  trigger="hover"
/>`;

  return {
    codeHtml,
  };
}
