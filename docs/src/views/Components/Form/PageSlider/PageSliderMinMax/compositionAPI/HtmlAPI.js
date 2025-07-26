export default function HtmlAPI() {
  const codeHtml = `<a-slider
  v-model="model1"
  :extra="{ max: 40, min: 10, step: 2 }"
  :max="40"
  :min="10"
  :step="2"
  label="_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_"
></a-slider>
<div>model1: {{ model1 }}</div>
<a-slider
  v-model="model2"
  :extra="{ max: 50, min: -10, step: 10 }"
  :max="50"
  :min="-10"
  :step="10"
  label="_A_SLIDER_BASIC_LABEL_{{max}}_{{min}}_{{step}}_"
></a-slider>
<div>model2: {{ model2 }}</div>
<a-slider
  v-model="model3"
  :extra="{ max: 40, min: 20, step: 4 }"
  :max="40"
  :min="20"
  :range="true"
  :step="4"
  label="_A_SLIDER_RANGE_LABEL_{{max}}_{{min}}_{{step}}_"
></a-slider>
<div>model3: {{ model3 }}</div>`;

  return {
    codeHtml,
  };
}
