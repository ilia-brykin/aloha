export default function HtmlAPI() {
  const codeHtml = `<a-one-checkbox
  v-model="model"
    :indeterminate="true"
    label="Aloha"
></a-one-checkbox>`;

  return {
    codeHtml,
  };
}
