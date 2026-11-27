export default function HtmlAPI() {
  const codeHtml = `<a-combobox
  v-model="model"
  :data="cities"
  :inline-autocomplete="true"
  filter-mode="startsWith"
  label="_A_COMBOBOX_EXAMPLE_CITY_"
/>`;

  return {
    codeHtml,
  };
}
