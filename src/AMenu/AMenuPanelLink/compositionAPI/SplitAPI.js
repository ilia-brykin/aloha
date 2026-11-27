import {
  computed,
  inject,
} from "vue";

/**
 * An item with "to" and children is split: the link opens the page, the toggle opens the panel of the children.
 * In the closed menu (only icons) there is no place for the toggle: the item opens the panel,
 * the header of the panel is the link to the page.
 */
export default function SplitAPI(props, {
  countChildren = computed(() => 0),
  isItemLink = computed(() => false),
}) {
  const isMenuOpen = inject("isMenuOpen");
  const isPanelMain = inject("isPanelMain");

  const hasChildren = computed(() => countChildren.value > 0);

  const isOpenerInClosedMenu = computed(() => {
    return hasChildren.value && isPanelMain.value && !isMenuOpen.value;
  });

  const isLinkRendered = computed(() => {
    return isItemLink.value && !isOpenerInClosedMenu.value;
  });

  const isSplit = computed(() => {
    return isLinkRendered.value && hasChildren.value;
  });

  return {
    isLinkRendered,
    isSplit,
  };
}
