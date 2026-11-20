export default function HtmlAPI() {
  const codeHtml = `<a-calendar
  v-model="model"
  view="week"
  :events="events"
/>`;

  return {
    codeHtml,
  };
}
