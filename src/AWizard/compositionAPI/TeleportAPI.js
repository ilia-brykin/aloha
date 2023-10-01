import {
  computed,
  toRef,
} from "vue";

export default function TeleportAPI(props) {
  const toolbarBottomTeleportId = toRef(props, "toolbarBottomTeleportId");

  const useTeleportToolbarBottom = computed(() => {
    return !!toolbarBottomTeleportId.value;
  });

  const toolbarBottomTeleportSelector = computed(() => {
    if (useTeleportToolbarBottom.value) {
      return `#${ toolbarBottomTeleportId.value }`;
    }
    return undefined;
  });

  return {
    toolbarBottomTeleportSelector,
    useTeleportToolbarBottom,
  };
}
