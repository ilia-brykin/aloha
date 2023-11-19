import {
  computed,
  toRef,
} from "vue";

export default function TitleAPI(props, {
  isItemLink = computed(() => false),
  isLinkOpenPanelMain = computed(() => false),
  isLinkOpenPanelSecondaryMenuClose = computed(() => false),
  labelWithoutFilter = computed(() => ""),
}) {
  const item = toRef(props, "item");

  const isTitleHtml = computed(() => {
    return !!item.value.isTitleHtml;
  });

  const titleLocal = computed(() => {
    if (isLinkOpenPanelMain.value) {
      return "_A_MENU_2_TO_MAIN_MENU_";
    }

    if (isLinkOpenPanelSecondaryMenuClose.value) {
      return [
        "_A_MENU_2_CLOSE_SUBMENU_",
        item.value.title || labelWithoutFilter.value,
      ];
    }

    if (isItemLink.value) {
      return item.value.title || labelWithoutFilter.value;
    }

    return [
      "_A_MENU_2_OPEN_SUBMENU_",
      item.value.title || labelWithoutFilter.value,
    ];
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
    titleLocal,
    titleAttributes,
  };
}
