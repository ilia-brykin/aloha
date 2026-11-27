export default function HtmlAPI() {
  const codeHtml = `<a-combobox
  v-model="model"
  :data="stations"
  :min-length="0"
  :open-on-focus="true"
  key-disabled="isClosed"
  key-group="line"
  label="_A_COMBOBOX_EXAMPLE_STATION_"
/>`;

  return {
    codeHtml,
  };
}
