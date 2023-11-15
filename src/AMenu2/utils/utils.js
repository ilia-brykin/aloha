export function setFocusToFirstLinkInPanel(panelId = "") {
  const PANEL_ID = `#a_menu_2_panel_${ panelId }`;
  const PANEL_LINKS_SELECTOR = `${ PANEL_ID } .a_menu_2__listview a`;
  setTimeout(() => {
    const EL_LINK = document.querySelector(PANEL_LINKS_SELECTOR);
    if (EL_LINK) {
      EL_LINK.focus();
    }
  });
}
