export default function HtmlAPI() {
  const codeHtml = `<a-datepicker
  v-model="model1"
  :start-date="dateNextYear"
  label="_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_"
  type="date"
></a-datepicker>
<div>model1: {{ model1 }}</div>
<a-datepicker
  v-model="model2"
  :start-date="dateNextYear"
  label="_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_"
  type="date"
></a-datepicker>
<div>model2: {{ model2 }}</div>
<a-datepicker
  v-model="model3"
  :focus-start-date="true"
  :start-date="dateNextYear"
  label="_PAGE_DATEPICKER_LBL_START_DATE_NEXT_YEAR_AND_MODEL_AND_FOCUS_START_DATE_"
  type="date"
></a-datepicker>
<div>model3: {{ model3 }}</div>`;

  return {
    codeHtml,
  };
}
