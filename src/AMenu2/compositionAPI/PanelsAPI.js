import {
  computed,
  ref,
} from "vue";

import AKeyParent from "../../const/AKeyParent";

export default function PanelsAPI(props, {
  dataKeyById = computed(() => ({})),
  resetSearch = () => {},
}) {
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

  const togglePanel = ({ parentIds, parentId, isLinkInSearchPanel }) => {
    if (parentIds) {
      panelParentsOpen.value = parentIds;
    } else if (isLinkInSearchPanel) {
      const PANEL_PARENTS_OPEN = [];
      panelParentsOpen.value = openPanelFromSearch({ parentId, panelParentsOpenLocal: PANEL_PARENTS_OPEN });
    } else {
      const INDEX = panelParentsOpen.value.indexOf(parentId);
      if (INDEX === -1) {
        panelParentsOpen.value.push(parentId);
      } else {
        panelParentsOpen.value.splice(INDEX, panelParentsOpen.value.length);
      }
    }
    resetSearch();
  };

  const closeAllPanels = () => {
    panelParentsOpen.value = [];
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
    togglePanel
  };
}
