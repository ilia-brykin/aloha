import {
  computed,
  inject,
  toRef,
} from "vue";

export default function AttributesAPI(props) {
  const isPanelOpen = toRef(props, "isPanelOpen");
  const isMenuOpen = inject("isMenuOpen");

  const tabindex = computed(() => {
    return isPanelOpen.value && isMenuOpen.value ? 0 : -1;
  });

  return {
    tabindex,
  };
}
