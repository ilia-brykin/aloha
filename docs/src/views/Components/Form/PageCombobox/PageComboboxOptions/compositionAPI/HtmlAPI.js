export default function HtmlAPI() {
  const codeHtml = `<a-combobox
  v-model="model"
  :data="languages"
  :is-data-simple-array="true"
  :max-items="5"
  :min-length="0"
  :open-on-focus="true"
  label="_A_COMBOBOX_EXAMPLE_LANGUAGE_"
/>`;

  return {
    codeHtml,
  };
}
