export default function HtmlAPI() {
  const codeHtml = `<div class="a_d_flex a_gap_2">
  <a-button
    class="a_btn a_btn_primary"
    text="_A_CALENDAR_EXPORT_DOWNLOAD_"
    @click="download"
  />
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_CALENDAR_EXPORT_PREVIEW_"
    @click="showPreview"
  />
</div>
<a-calendar
  ref="calendarRef"
  :events="events"
/>
<pre v-if="ics">{{ ics }}</pre>`;

  return {
    codeHtml,
  };
}
