export default function HtmlAPI() {
  const codeHtml = `<div style="max-width: 22rem;">
  <a-calendar
    :events="events"
    :views="['month', 'agenda']"
    :is-event-popover="true"
  />
</div>`;

  return {
    codeHtml,
  };
}
