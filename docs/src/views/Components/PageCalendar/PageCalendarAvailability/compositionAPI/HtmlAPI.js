export default function HtmlAPI() {
  const codeHtml = `<a-calendar
  v-model="model"
  :min-date="minDate"
  :max-date="maxDate"
  :disabled-dates="isHoliday"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_SELECTED_"
  />: {{ model }}
</p>`;

  return {
    codeHtml,
  };
}
