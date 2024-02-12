import {
  computed,
  inject,
  toRef,
} from "vue";

import AKeysCode from "../../../const/AKeysCode";
import AKeyParent from "../../../const/AKeyParent";

export default function EventsAPI(props, {
  id = computed(() => undefined),
}) {
  const isLinkInSearchPanel = toRef(props, "isLinkInSearchPanel");
  const item = toRef(props, "item");

  const clickMenuLink = inject("clickMenuLink");
  const isPanelMain = inject("isPanelMain");
  const togglePanel = inject("togglePanel");

  const openSubMenu = () => {
    togglePanel({
      parentId: id.value,
      isLinkInSearchPanel: isLinkInSearchPanel.value,
      isPanelMain: isPanelMain.value,
    });
  };

  const onKeydown = $event => {
    if ($event.keyCode === AKeysCode.enter ||
      $event.keyCode === AKeysCode.space) {
      openSubMenu();
      $event.stopPropagation();
      $event.preventDefault();
    }
  };

  const clickLink = ({ $event }) => {
    if (isLinkInSearchPanel.value) {
      togglePanel({ parentId: item.value[AKeyParent], isLinkInSearchPanel: isLinkInSearchPanel.value });
    }
    clickMenuLink({ ctrlKey: $event.ctrlKey });
  };

  return {
    clickLink,
    onKeydown,
    openSubMenu,
  };
}
