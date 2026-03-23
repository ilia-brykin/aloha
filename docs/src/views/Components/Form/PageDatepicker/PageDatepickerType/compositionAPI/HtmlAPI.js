export default function HtmlAPI() {
  const codeHtml = `<a-datepicker
  v-model="model1"
  label="_PAGE_DATEPICKER_LBL_TYPE_DATE_"
  type="date"
></a-datepicker>
<div>model1: {{ model1 }}</div>
<a-datepicker
  v-model="model2"
  :minute-step="1"
  format="HH:mm"
  label="_PAGE_DATEPICKER_LBL_TYPE_TIME_"
  type="time"
></a-datepicker>
<div>model2: {{ model2 }}</div>
<a-datepicker
  v-model="model3"
  label="_PAGE_DATEPICKER_LBL_TYPE_DATETIME_"
  type="datetime"
></a-datepicker>
<div>model3: {{ model3 }}</div>`;

  return {
    codeHtml,
  };
}
