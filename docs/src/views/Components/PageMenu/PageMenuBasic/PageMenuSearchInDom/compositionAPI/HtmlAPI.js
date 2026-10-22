export default function HtmlAPI() {
  const codeHtml = `<a-menu-button-toggle
  :can-change-body-class="false"
  :button-toggle-props="{ id: 'docs_menu_dom_toggle' }"
  menu-id="docs_menu_dom"
/>
<a-switch
  v-model="isTranslated"
  label="Translate DOM to German"
  @update:model-value="translateMenu"
/>
<div style="height: 24rem; overflow: hidden;">
  <a-menu
    :can-change-body-class="false"
    :data="menuItems"
    :is-inline="true"
    :search-in-dom="true"
    :use-backdrop-mobile="false"
    key-children="children"
    menu-id="docs_menu_dom"
  />
</div>`;

  return {
    codeHtml,
  };
}
