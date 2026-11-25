export default function HtmlAPI() {
  const codeHtml = `<!-- main.js: the defaults for all editors
app.use(AComponentsPlugin, {
  AJsonEditor: { props: { density: "compact", showTypes: false } },
});
-->
<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_CONFIG_"
  density="compact"
  @fullscreen="onFullscreen"
/>`;

  return {
    codeHtml,
  };
}
