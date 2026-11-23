export default function HtmlAPI() {
  const codeHtml = `<a-calendar
  :events="events"
  :is-loading="isLoading"
  @range-change="loadEvents"
/>`;

  return {
    codeHtml,
  };
}
