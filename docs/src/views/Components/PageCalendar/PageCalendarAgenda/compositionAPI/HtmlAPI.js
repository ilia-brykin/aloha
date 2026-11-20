export default function HtmlAPI() {
  const codeHtml = `<a-calendar
  view="agenda"
  :views="['month', 'agenda']"
  :events="events"
  :is-event-popover="true"
/>`;

  return {
    codeHtml,
  };
}
