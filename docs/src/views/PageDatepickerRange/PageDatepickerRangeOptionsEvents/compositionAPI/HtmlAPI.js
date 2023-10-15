export default function HtmlAPI() {
  const codeHtml = `<a-datepicker-range
  :model="dateRangeModel"
  @focus="handleFocus"
  @input="updateDateRange"
  @change="handleChange">
</a-datepicker-range>`;

  return {
    codeHtml,
  };
}
