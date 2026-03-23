export default function HtmlAPI() {
  const codeHtml = `<a-datepicker
  v-model="model"
  label="_PAGE_DATEPICKER_LBL_TYPE_DATE_"
  label-description="_PAGE_DATEPICKER_TXT_ALOHA_"
></a-datepicker>`;

  return {
    codeHtml,
  };
}
