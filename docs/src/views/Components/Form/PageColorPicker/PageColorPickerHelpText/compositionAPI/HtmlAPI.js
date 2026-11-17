export default function HtmlAPI() {
  const codeHtml = `<a-color-picker
  v-model="model"
  label="Color"
  label-description="Brand color of the product"
  :is-label-float="false"
  help-text="Choose a color with enough contrast"
></a-color-picker>`;

  return {
    codeHtml,
  };
}
