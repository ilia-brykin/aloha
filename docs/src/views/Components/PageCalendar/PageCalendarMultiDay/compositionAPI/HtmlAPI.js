export default function HtmlAPI() {
  const codeHtml = `<a-calendar
  :events="events"
  :max-events-per-day="0"
/>`;

  return {
    codeHtml,
  };
}
