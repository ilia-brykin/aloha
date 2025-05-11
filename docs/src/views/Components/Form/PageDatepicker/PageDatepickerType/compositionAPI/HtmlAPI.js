export default function HtmlAPI() {
  const codeHtml = `<a-datepicker
  v-model="model1"
  label="Date"
  type="date"
></a-datepicker>
<div>model1: {{ model1 }}</div>
<a-datepicker
  v-model="model2"
  :minute-step="1"
  format-save="YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
  format="HH:mm"
  label="Time"
  type="time"
></a-datepicker>
<div>model2: {{ model2 }}</div>
<a-datepicker
  v-model="model3"
  label="Datetime"
  format="DD.MM.YYYY HH:mm"
  format-save="YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
  type="datetime"
></a-datepicker>
<div>model3: {{ model3 }}</div>`;

  return {
    codeHtml,
  };
}
