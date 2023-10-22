export default function HtmlAPI() {
  const codeHtml = `<a-datepicker-range
  v-model="model"
  format="DD.MM.YY"
  format-save="YY-MM-DD"
</a-datepicker-range>`;

  return {
    codeHtml,
  };
}
