export default function HtmlAPI() {
  const codeHtml = `<a-datepicker-range
  :model="dateRangeModel"
  :id-prefix="idPrefix"
  :is-error="isError"
  @input="updateDateRange">
</a-datepicker-range>`;

  return {
    codeHtml,
  };
}
