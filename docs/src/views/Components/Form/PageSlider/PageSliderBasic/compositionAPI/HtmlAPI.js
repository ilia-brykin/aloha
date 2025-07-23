export default function HtmlAPI() {
  const codeHtml = `<a-slider
  v-model="model"
  label="_A_SLIDER_BASIC_LABEL"
></a-slider>
<div>model: {{ model }}</div>
<a-slider
  v-model="model"
  :disabled="true"
  label="_A_SLIDER_DISABLED_LABEL"
></a-slider>
`;

  return {
    codeHtml,
  };
}
