export default function HtmlAPI() {
  const codeHtml = `<a-select
  v-model="model"
  :data="data"
  :is-select-all="true"
  :is-deselect-all="true"
  :search="true"
  label="_A_SELECT_EXAMPLE_CITIES_"
  type="multiselect"
/>
<div class="a_mt_2">model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
