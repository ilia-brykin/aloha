export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="model"
  label-position="float"
  label="_A_DATE_INPUT_EXAMPLE_FLOAT_"
/>
<a-date-input
  v-model="model"
  label-position="inset"
  label="_A_DATE_INPUT_EXAMPLE_INSET_"
/>
<a-date-input
  v-model="model"
  label-position="top"
  label="_A_DATE_INPUT_EXAMPLE_TOP_"
/>`;

  return {
    codeHtml,
  };
}
