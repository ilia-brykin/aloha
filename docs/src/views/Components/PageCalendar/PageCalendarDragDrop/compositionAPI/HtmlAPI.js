export default function HtmlAPI() {
  const codeHtml = `<a-calendar
  v-model="model"
  v-model:view="view"
  :events="events"
  :is-draggable="isDraggable"
  @event-drop="onEventDrop"
/>
<p v-if="lastDrop">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_DRAG_LAST_"
  />: {{ lastDrop }}
</p>`;

  return {
    codeHtml,
  };
}
