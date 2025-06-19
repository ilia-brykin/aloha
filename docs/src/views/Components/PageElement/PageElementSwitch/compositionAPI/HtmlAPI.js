export default function HtmlAPI() {
  const codeHtml = `<a-element
  :is-switch="true"
  :model-switch="modelSwitch"
  text="(***)"
  type="button"
  @click="toggleModelSwitch"
></a-element>`;

  return {
    codeHtml,
  };
}
