export default function HtmlAPI() {
  const codeHtml = `<a-calendar
  v-model="model"
  :events="events"
/>
<p>
  <a-translation
    tag="strong"
    text="_A_CALENDAR_SELECTED_"
  />: {{ model }}
</p>`;

  return {
    codeHtml,
  };
}
