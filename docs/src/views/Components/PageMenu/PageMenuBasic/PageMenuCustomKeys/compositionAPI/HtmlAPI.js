export default function HtmlAPI() {
  const codeHtml = `<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_keys_toggle' }"
  menu-id="docs_menu_keys"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_keys"
    key-id="code"
    key-label="title"
    key-icon="symbol"
    key-group="section"
    key-children="items"
  />
</div>`;

  return {
    codeHtml,
  };
}
