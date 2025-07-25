export default function HtmlAPI() {
  const codeHtml = `<a-slider
  v-model="model1"
  :max="40"
  :min="10"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model1: {{ model1 }}</div>
<a-slider
  v-model="model2"
  :max="50"
  :min="-10"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model2: {{ model2 }}</div>
<a-slider
  v-model="model3"
  :max="20"
  :min="40"
  :range="true"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model3: {{ model3 }}</div>`;

  return {
    codeHtml,
  };
}
