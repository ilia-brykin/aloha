export default function HtmlAPI() {
  const codeHtml = `<a-datepicker-range
  html-id="myDatepicker3"    
  :model="dateRangeModel"
  :options="options"
  :errors="errors"
  @input="updateDateRange">
</a-datepicker-range>`;

  return {
    codeHtml,
  };
}
