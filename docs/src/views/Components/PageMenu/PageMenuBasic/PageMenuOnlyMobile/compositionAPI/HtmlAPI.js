export default function HtmlAPI() {
  const codeHtml = `<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_only_mobile_toggle' }"
  :only-mobile="true"
  menu-id="docs_menu_only_mobile"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :has-search="false"
    :is-inline="true"
    :only-mobile="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_only_mobile"
  />
</div>`;

  return {
    codeHtml,
  };
}
