export default function HtmlAPI() {
  const codeHtml = `<a-color-picker
  v-model="modelRgb"
  color-format="rgb"
  label="rgb"
  :show-alpha="true"
></a-color-picker>
<div>model: {{ modelRgb }}</div>
<a-color-picker
  v-model="modelHsl"
  color-format="hsl"
  label="hsl"
></a-color-picker>
<div>model: {{ modelHsl }}</div>
<a-color-picker
  v-model="modelHsv"
  color-format="hsv"
  label="hsv"
></a-color-picker>
<div>model: {{ modelHsv }}</div>`;

  return {
    codeHtml,
  };
}
