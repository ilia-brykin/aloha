export default function HtmlAPI() {
  const codeHtml = `<a-combobox
  v-model="model"
  :data="cities"
  label="_A_COMBOBOX_EXAMPLE_CITY_"
  @select="selected = $event"
/>
<pre>v-model: {{ model }}, select: {{ selected }}</pre>`;

  return {
    codeHtml,
  };
}
