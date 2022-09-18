import {
  ref,
} from "vue";

export default function AMenuPanelsAPI() {
  const panelParentsOpen = ref([]);

  const togglePanel = ({ parentId }) => {
    const INDEX = panelParentsOpen.value.indexOf(parentId);
    if (INDEX === -1) {
      panelParentsOpen.value.push(parentId);
    } else {
      panelParentsOpen.value.splice(INDEX, panelParentsOpen.value.length);
    }
  };

  return {
    panelParentsOpen,
    togglePanel
  };
}
