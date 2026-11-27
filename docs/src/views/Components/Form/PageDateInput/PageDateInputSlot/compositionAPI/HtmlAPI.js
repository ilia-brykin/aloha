export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_VACATION_"
>
  <template v-slot:day="{ date }">
    <template v-if="holidays.includes(date)">
      <!-- a mark for the eyes and a text for screen readers -->
      <span class="a_color_danger" aria-hidden="true">•</span>
      <a-translation class="a_sr_only" tag="span" text="_A_DATE_INPUT_EXAMPLE_HOLIDAY_" />
    </template>
  </template>
</a-date-input>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
