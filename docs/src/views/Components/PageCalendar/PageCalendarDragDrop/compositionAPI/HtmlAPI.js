export default function HtmlAPI() {
  const codeHtml = `<a-calendar
  v-model="model"
  v-model:view="view"
  :events="events"
  :is-draggable="isDraggable"
  :is-resizable="isDraggable"
  @event-drop="onEventChange"
  @event-resize="onEventChange"
/>
<p v-if="lastDrop">
  <a-translation
    tag="strong"
    text="_A_CALENDAR_DRAG_LAST_"
  />: {{ lastDrop }}
</p>
<a-modal
  v-if="seriesChange"
  header-text="_A_CALENDAR_SERIES_QUESTION_HEADER_"
  body-html="_A_CALENDAR_SERIES_QUESTION_BODY_"
  :close="closeSeriesChange"
  :save="changeOnlyThisOccurrence"
  save-button-text="_A_CALENDAR_SERIES_ONLY_THIS_"
>
  <template v-slot:modalFooterAppend>
    <a-button
      class="a_btn a_btn_outline_primary"
      text="_A_CALENDAR_SERIES_ALL_"
      @click="changeWholeSeries"
    />
  </template>
</a-modal>`;

  return {
    codeHtml,
  };
}
