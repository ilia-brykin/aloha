import {
  computed,
  toRef,
} from "vue";

import AKeyBreadcrumbs from "../../const/AKeyBreadcrumbs";
import {
  forEach,
} from "lodash-es";

export default function BreadcrumbsItemsAPI(props) {
  const item = toRef(props, "item");

  const breadcrumbsItems = computed(() => {
    const BREADCRUMBS_ITEMS = [
      {
        label: "_A_MENU_2_MAIN_MENU_",
        isFirst: true,
        parentIds: [],
      },
    ];

    const PARENT_IDS = [];
    forEach(item.value[AKeyBreadcrumbs], breadcrumb => {
      PARENT_IDS.push(breadcrumb.parentId);
      BREADCRUMBS_ITEMS.push({
        label: breadcrumb.label,
        parentId: breadcrumb.parentId,
        parentIds: [
          ...PARENT_IDS,
        ],
      });
    });

    return BREADCRUMBS_ITEMS;
  });

  return {
    breadcrumbsItems,
  };
}
