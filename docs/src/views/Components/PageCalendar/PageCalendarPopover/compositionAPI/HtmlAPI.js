export default function HtmlAPI() {
  const codeHtml = `<a-calendar
  :events="events"
  :is-event-popover="true"
>
  <template v-slot:popoverActions="{ event, close }">
    <a-button
      class="a_btn a_btn_outline_danger a_btn_small"
      text="_A_CALENDAR_DETAILS_DELETE_"
      @click="deleteEvent({ event })"
    />
    <a-button
      class="a_btn a_btn_primary a_btn_small"
      text="_A_CALENDAR_DETAILS_EDIT_"
      @click="editEvent({ event, close })"
    />
  </template>
</a-calendar>
<p v-if="lastAction">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_DETAILS_LAST_"
  />: {{ lastAction }}
</p>`;

  return {
    codeHtml,
  };
}
