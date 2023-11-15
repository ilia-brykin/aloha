import {
  computed,
  inject,
} from "vue";

export default function MainPanelLinkOpenAPI(props, {
  id = computed(() => ""),
}) {
  const isPanelMain = inject("isPanelMain");
  const panelParentsOpen = inject("panelParentsOpen");

  const isPanelMainLinkOpen = computed(() => {
    return isPanelMain.value && panelParentsOpen.value[0] === id.value;
  });

  return {
    isPanelMainLinkOpen,
  };
}
