import {
  computed,
  toRef,
} from "vue";

import {
  AKeyLabel,
} from "../../../const/AKeys";
import {
  forEach,
  get,
} from "lodash-es";

export default function ItemsAPI(props) {
  const dataKeyById = toRef(props, "dataKeyById");

  const panelParentsOpen = toRef(props, "panelParentsOpen");

  const breadcrumbsItems = computed(() => {
    if (!panelParentsOpen.value.length) {
      return [];
    }
    const BREADCRUMBS_ITEMS = [];
    let currentLabel = "_A_MENU_2_MAIN_MENU_";
    let currentItem;
    forEach(panelParentsOpen.value, (panelParentId, index) => {
      BREADCRUMBS_ITEMS.push({
        isFirst: index === 0,
        label: currentLabel,
        panelParentId,
      });
      currentItem = get(dataKeyById.value, panelParentId);
      currentLabel = get(currentItem, AKeyLabel);
    });
    BREADCRUMBS_ITEMS.push({
      panelParentId: undefined,
      label: currentLabel,
      // split item: the page of the open panel
      to: currentItem && !currentItem.disabled ? currentItem.to : undefined,
    });

    return BREADCRUMBS_ITEMS;
  });

  return {
    breadcrumbsItems,
  };
}
