export default function HtmlAPI() {
  const codeHtml = `<a-color-picker
  v-model="model"
  label="hex, rgb, hsl, hsv"
  :color-formats="['hex', 'rgb', 'hsl', 'hsv']"
  :show-alpha="true"
></a-color-picker>
<div>model: {{ model }}</div>
<a-color-picker
  v-model="modelRgb"
  color-formats="rgb"
  label="rgb"
></a-color-picker>
<div>model: {{ modelRgb }}</div>`;

  return {
    codeHtml,
  };
}
