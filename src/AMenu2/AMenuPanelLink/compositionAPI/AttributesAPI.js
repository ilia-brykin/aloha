import {
  computed,
  inject,
  toRef,
} from "vue";

import AKeyId from "../../../const/AKeyId";
import {
  get,
} from "lodash-es";

export default function AttributesAPI(props) {
  const isLinkInSearchPanel = toRef(props, "isLinkInSearchPanel");
  const isPanelOpen = toRef(props, "isPanelOpen");
  const item = toRef(props, "item");
  const keyIcon = toRef(props, "keyIcon");

  const isMenuOpen = inject("isMenuOpen");
  const isPanelMain = inject("isPanelMain");

  const tabindex = computed(() => {
    if (isLinkInSearchPanel.value) {
      return 0;
    }
    if (isPanelOpen.value && isMenuOpen.value) {
      return 0;
    }
    if (isPanelMain.value && !isMenuOpen.value) {
      return 0;
    }
    return -1;
  });

  const id = computed(() => {
    return item.value[AKeyId];
  });

  const icon = computed(() => {
    if (isLinkInSearchPanel.value) {
      return undefined;
    }
    return get(item.value, keyIcon.value);
  });

  const iconClassLocal = computed(() => {
    const CLASS = "a_menu_2__link__icon";
    if (item.value.iconClass) {
      return `{ CLASS } ${ item.value.iconClass }`;
    }
    return CLASS;
  });

  return {
    icon,
    iconClassLocal,
    id,
    tabindex,
  };
}
