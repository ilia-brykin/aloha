import {
  computed,
  inject,
} from "vue";

export default function MainPanelLinkActiveAPI(props, {
  id = computed(() => ""),
}) {
  const isPanelMain = inject("isPanelMain");
  const panelParentsOpen = inject("panelParentsOpen");

  const isPanelMainLinkActive = computed(() => {
    return isPanelMain.value && panelParentsOpen.value[0] === id.value;
  });

  return {
    isPanelMainLinkActive,
  };
}
