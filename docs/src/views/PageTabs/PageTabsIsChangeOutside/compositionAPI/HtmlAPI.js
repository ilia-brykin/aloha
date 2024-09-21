export default function HtmlAPI() {
  const codeHtml = `<a-tabs
  :data="data"
  :active-tab-id="activeTabId"
  :is-change-outside="true"
  key-id="id"
  @change="changeTab"
></a-tabs>`;

  return {
    codeHtml,
  };
}
