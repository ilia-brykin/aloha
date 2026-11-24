export default function HtmlAPI() {
  const codeHtml = `<a-tabs
  v-model:active-tab-id="activeTabId"
  :data="data"
  key-id="id"
/>
<p class="a_my_3">active-tab-id: {{ activeTabId }}</p>
<a-button
  class="a_btn a_btn_secondary"
  text="_A_TABS_EXAMPLE_OPEN_TAB_3_"
  @click="activeTabId = 'tab3'"
/>`;

  return {
    codeHtml,
  };
}
