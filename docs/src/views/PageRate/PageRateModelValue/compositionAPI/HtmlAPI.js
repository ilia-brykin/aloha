export default function HtmlAPI() {
  const codeHtml = `<a-rate
   text="ARate"
  :model-value="modelValue"
  @modelValue="handleModelValueChange">
</a-rate>`;

  return {
    codeHtml,
  };
}
