export default function HtmlAPI() {
  const codeHtml = `<a-datepicker
  v-model="model1"
  label="Input 1"
></a-datepicker>
<div>model1: {{ model1 }}</div>
<a-datepicker
  v-model="model2"
  label="Input 2"
></a-datepicker>
<div>model2: {{ model2 }}</div>
<a-datepicker
  v-model="model3"
  label="Input 3"
></a-datepicker>
<div>model3: {{ model3 }}</div>`;

  return {
    codeHtml,
  };
}
