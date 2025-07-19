export default function HtmlAPI() {
  const codeHtml = `<!-- Basic Slider -->
<a-slider
  v-model="value1"
  label="Basic Slider"
></a-slider>
<div>Value: {{ value1 }}</div>

<!-- Custom Min/Max/Step -->
<a-slider
  v-model="value2"
  :min="-20"
  :max="20"
  :step="5"
  label="Custom Min/Max/Step"
></a-slider>
<div>Value: {{ value2 }}</div>

<!-- Range Slider -->
<a-slider
  v-model="value3"
  :range="true"
  label="Range Slider"
></a-slider>
<div>Range: {{ value3 }}</div>`;

  return {
    codeHtml,
  };
}
