export default function HtmlAPI() {
  const codeHtml = `<a-button
  :is-switch="true"
  :model-switch="modelSwitch"
  text="(***)"
  @click="toggleModelSwitch"
></a-button>`;

  return {
    codeHtml,
  };
}
