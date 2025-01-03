import {
  computed,
  toRef,
} from "vue";

import AKeyLabel from "../../../const/AKeyLabel";
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
    forEach(panelParentsOpen.value, (panelParentId, index) => {
      BREADCRUMBS_ITEMS.push({
        isFirst: index === 0,
        label: currentLabel,
        panelParentId,
      });
      currentLabel = get(dataKeyById.value, `${ panelParentId }.${ AKeyLabel }`);
    });
    BREADCRUMBS_ITEMS.push({
      panelParentId: undefined,
      label: currentLabel,
    });

    return BREADCRUMBS_ITEMS;
  });

  return {
    breadcrumbsItems,
  };
}
