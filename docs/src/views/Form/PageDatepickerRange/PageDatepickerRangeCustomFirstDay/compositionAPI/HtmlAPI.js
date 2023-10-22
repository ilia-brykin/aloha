export default function HtmlAPI() {
  const codeHtml = `<a-datepicker-range
  v-model="model"
  label="_PAGE_DATEPICKER_RANGE_CUSTOM_FIRST_DAY_EXAMPLE_"
  first-day-of-week=4
</a-datepicker-range>`;

  return {
    codeHtml,
  };
}
