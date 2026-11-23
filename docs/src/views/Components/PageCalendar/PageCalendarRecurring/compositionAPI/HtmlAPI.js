export default function HtmlAPI() {
  const codeHtml = `<a-calendar
  :events="events"
  @event-click="onEventClick"
/>
<p v-if="lastClick">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_REC_CLICK_"
  />: {{ lastClick }}
</p>`;

  return {
    codeHtml,
  };
}
