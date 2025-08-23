export default function HtmlAPI() {
  const codeHtml = `<a-datepicker
  v-model="model1"
  :min-date="dateYesterday"
  label="_PAGE_DATEPICKER_LBL_WITH_MIN_DATE_"
  type="date"
></a-datepicker>
<div>model1: {{ model1 }}</div>
<a-datepicker
  v-model="model2"
  :max-date="dateTomorrow"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_WITH_MAX_DATE_"
  type="date"
></a-datepicker>
<div>model2: {{ model2 }}</div>
<a-datepicker
  v-model="model3"
  :max-date="dateTomorrow"
  :min-date="dateTomorrow"
  class="a_mt_3"
  label="_PAGE_DATEPICKER_LBL_WITH_MIN_AND_MAX_DATE_"
  type="date"
></a-datepicker>
<div>model3: {{ model3 }}</div>`;

  return {
    codeHtml,
  };
}
