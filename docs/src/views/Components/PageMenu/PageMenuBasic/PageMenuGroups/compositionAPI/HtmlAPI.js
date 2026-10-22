export default function HtmlAPI() {
  const codeHtml = `<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_groups_toggle' }"
  menu-id="docs_menu_groups"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_groups"
    :has-search="false"
  />
</div>`;

  return {
    codeHtml,
  };
}
