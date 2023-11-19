export function setFocusToFirstLinkInPanel({
  menuId = "a_menu_2_",
  panelId = "",
}) {
  const PANEL_ID = `#${ getElementId({ menuId, id: panelId, suffix: "panel" }) }`;
  const PANEL_LINKS_SELECTOR = `${ PANEL_ID } .a_menu_2__listview a`;
  setTimeout(() => {
    const EL_LINK = document.querySelector(PANEL_LINKS_SELECTOR);
    if (EL_LINK) {
      EL_LINK.focus();
    }
  });
}

export function getElementId({
  menuId = "a_menu_2_",
  id = "",
  suffix = "",
}) {
  return `${ menuId }_${ id }_${ suffix }`;
}
