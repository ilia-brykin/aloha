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
  resetSearch = () => {},
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

  const togglePanel = ({ parentIds, parentId, isLinkInSearchPanel, isPanelMain }) => {
    if (parentIds) {
      panelParentsOpen.value = parentIds;
    } else if (isLinkInSearchPanel) {
      const PANEL_PARENTS_OPEN = [];
      panelParentsOpen.value = openPanelFromSearch({ parentId, panelParentsOpenLocal: PANEL_PARENTS_OPEN });
    } else if (isPanelMain && panelParentsOpen.value.length) {
      const INDEX = panelParentsOpen.value.indexOf(parentId);
      if (INDEX === -1) {
        panelParentsOpen.value = [parentId];
      } else {
        panelParentsOpen.value = [];
      }
    } else {
      const INDEX = panelParentsOpen.value.indexOf(parentId);
      if (INDEX === -1) {
        panelParentsOpen.value.push(parentId);
      } else {
        panelParentsOpen.value.splice(INDEX, panelParentsOpen.value.length);
      }
    }
    setFocusToFirstLinkInPanel({
      menuId: menuId.value,
      panelId: last(panelParentsOpen.value) || "",
    });
    resetSearch();
  };

  const setDefaultMenu = () => {
    resetSearch();
    panelParentsOpen.value = [];
    console.log("setDefaultMenu");
  };

  return {
    closeAllPanels,
    isSubMenuOpen,
    panelParentsOpen,
    setDefaultMenu,
    togglePanel
  };
}
