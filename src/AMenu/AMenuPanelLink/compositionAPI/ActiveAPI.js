import {
  computed,
  inject,
  toRef,
} from "vue";

export default function ActiveAPI(props, {
  id = computed(() => undefined),
}) {
  const isLinkInSearchPanel = toRef(props, "isLinkInSearchPanel");

  const activeRoutesIds = inject("activeRoutesIds");

  const isLinkActive = computed(() => {
    if (isLinkInSearchPanel.value) {
      return false;
    }
    return activeRoutesIds.value.indexOf(id.value) !== -1;
  });

  return {
    isLinkActive,
  };
}
