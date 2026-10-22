export default function HtmlAPI() {
  const codeHtml = `<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_breadcrumbs_toggle' }"
  menu-id="docs_menu_breadcrumbs"
/>
<a-switch
  v-model="showCountChildren"
  label="Show submenu item counts"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :use-backdrop-mobile="false"
    menu-id="docs_menu_breadcrumbs"
    key-children="children"
    :is-breadcrumbs-truncated="true"
    :show-count-children="showCountChildren"
  />
</div>`;

  return {
    codeHtml,
  };
}
