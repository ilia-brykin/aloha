export default function HtmlAPI() {
  const codeHtml = `<a-calendar
  v-model="model"
  view="workweek"
  :views="['month', 'workweek']"
  :events="events"
  :is-week-numbers="true"
  :working-hours="{ start: 8, end: 18 }"
/>`;

  return {
    codeHtml,
  };
}
