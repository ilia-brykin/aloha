export default function HtmlAPI() {
  const codeHtml = `<a-calendar
  v-model="model"
  v-model:view="view"
  :events="events"
  :views="['day', 'week']"
  :hour-start="7"
  :hour-end="20"
/>`;

  return {
    codeHtml,
  };
}
