export default function HtmlAPI() {
  const codeHtml = `<a-datepicker-range
  :model="dateRangeModel"
  @input="updateDateRange">
</a-datepicker-range>`;

  return {
    codeHtml,
  };
}
