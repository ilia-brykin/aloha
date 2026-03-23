export default function HtmlAPI() {
  const codeHtml = `<a-datepicker
  v-model="model1"
  label="_PAGE_DATEPICKER_LBL_INPUT_1_"
></a-datepicker>
<div>model1: {{ model1 }}</div>
<a-datepicker
  v-model="model2"
  label="_PAGE_DATEPICKER_LBL_INPUT_2_"
></a-datepicker>
<div>model2: {{ model2 }}</div>
<a-datepicker
  v-model="model3"
  label="_PAGE_DATEPICKER_LBL_INPUT_3_"
></a-datepicker>
<div>model3: {{ model3 }}</div>`;

  return {
    codeHtml,
  };
}
