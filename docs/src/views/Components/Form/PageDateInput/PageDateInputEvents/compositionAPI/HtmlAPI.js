export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  ref="dateInputRef"
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_BIRTHDAY_"
  @open="onOpen"
  @close="onClose"
/>
<a-button
  class="a_btn a_btn_outline_primary"
  text="_A_DATE_INPUT_EXAMPLE_OPEN_CALENDAR_"
  @click="openCalendar"
/>
<pre>{{ events }}</pre>`;

  return {
    codeHtml,
  };
}
