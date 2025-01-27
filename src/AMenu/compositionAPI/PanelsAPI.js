import {
  computed,
  ref,
  toRef,
} from "vue";

import AKeyParent from "../../const/AKeyParent";
import {
  setFocusToFirstLinkInPanel,
} from "../utils/utils";
import {
  last,
} from "lodash-es";

export default function PanelsAPI(props, {
  dataKeyById = computed(() => ({})),
  resetSearch = () => {
  },
}) {
  const menuId = toRef(props, "menuId");

  const panelParentsOpen = ref([]);

  const isSubMenuOpen = computed(() => {
    return panelParentsOpen.value.length > 0;
  });

  const openPanelFromSearch = ({ parentId, panelParentsOpenLocal }) => {
    if (parentId) {
      panelParentsOpenLocal.unshift(parentId);
      const PARENT_ID = dataKeyById.value[parentId][AKeyParent];
      return openPanelFromSearch({ parentId: PARENT_ID, panelParentsOpenLocal });
    }
    return panelParentsOpenLocal;
  };

  const closeAllPanels = () => {
    panelParentsOpen.value = [];
    resetSearch();
  };

  const togglePanel = ({ parentIds, parentId, isLinkInSearchPanel, withoutFocus }) => {
    if (parentIds) {
      panelParentsOpen.value = parentIds;
    } else {
      const INDEX = panelParentsOpen.value.indexOf(parentId);
      const PANEL_PARENTS_OPEN = openPanelFromSearch({ parentId, panelParentsOpenLocal: [] });
      if (!isLinkInSearchPanel && INDEX !== -1) {
        PANEL_PARENTS_OPEN.splice(-1, 1);
      }
      panelParentsOpen.value = PANEL_PARENTS_OPEN;
    }

    if (!withoutFocus) {
      setFocusToFirstLinkInPanel({
        menuId: menuId.value,
        panelId: last(panelParentsOpen.value) || "",
      });
    }
    resetSearch();
  };

  const setDefaultMenu = () => {
    resetSearch();
    panelParentsOpen.value = [];
  };

  return {
    closeAllPanels,
    isSubMenuOpen,
    panelParentsOpen,
    setDefaultMenu,
    togglePanel,
  };
}
