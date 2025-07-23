export default function HtmlAPI() {
  const codeHtml = `<a-slider
  v-model="model1"
  :range="true"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model1: {{ model1 }}</div>
<a-slider
  v-model="model2"
  :range="true"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model2: {{ model2 }}</div>
<a-slider
  v-model="model3"
  :range="true"
  label="_A_SLIDER_BASIC_LABEL_"
></a-slider>
<div>model3: {{ model3 }}</div>
<a-slider
  v-model="model4"
  :disabled="true"
  :range="true"
  label="_A_SLIDER_DISABLED_LABEL_"
></a-slider>`;

  return {
    codeHtml,
  };
}
