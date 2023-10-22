export default function HtmlAPI() {
  const codeHtml = `<a-datepicker-range
  id="date5"
  :width="350"
  :model="dateRangeModel"
  :disabled="isDisabled">
</a-datepicker-range>`;

  return {
    codeHtml,
  };
}
