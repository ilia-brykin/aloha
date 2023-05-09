import {
  computed,
  inject,
} from "vue";

export default function MobileAPI({
  isColumnVisible = computed(() => false),
}) {
  const isMobile = inject("isMobile");

  const styleMobile = computed(() => {
    if (isMobile.value) {
      return !isColumnVisible.value ? "display: none;" : "";
    }
    return "";
  });

  return {
    styleMobile,
  };
}
