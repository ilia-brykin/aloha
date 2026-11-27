import {
  computed,
  toRef,
} from "vue";

export default function TitleAPI(props, {
  isLinkRendered = computed(() => false),
  isLinkOpenPanelMain = computed(() => false),
  isLinkOpenPanelSecondaryMenuClose = computed(() => false),
  labelWithoutFilter = computed(() => ""),
}) {
  const item = toRef(props, "item");

  const isTitleHtml = computed(() => {
    return !!item.value.isTitleHtml;
  });

  // the button that opens the panel (also the toggle of a split item)
  const titleSubmenu = computed(() => {
    if (isLinkOpenPanelMain.value) {
      return "_A_MENU_2_TO_MAIN_MENU_";
    }

    if (isLinkOpenPanelSecondaryMenuClose.value) {
      return [
        "_A_MENU_2_CLOSE_SUBMENU_",
        item.value.title || labelWithoutFilter.value,
      ];
    }

    return [
      "_A_MENU_2_OPEN_SUBMENU_",
      item.value.title || labelWithoutFilter.value,
    ];
  });

  const titleLocal = computed(() => {
    if (isLinkRendered.value) {
      return item.value.title || labelWithoutFilter.value;
    }
    return titleSubmenu.value;
  });

  const titleAttributes = computed(() => {
    return {
      minWidth: item.value.titleHtmlMinWidth,
      width: item.value.titleHtmlWidth,
      maxWidth: item.value.titleHtmlMaxWidth,
    };
  });

  return {
    isTitleHtml,
    titleSubmenu,
    titleLocal,
    titleAttributes,
  };
}
