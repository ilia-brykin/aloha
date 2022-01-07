import {
  computed,
  inject,
  toRefs
} from "vue";

export function frameworksApi(props) {
  const { framework } = toRefs(props);
  const $aloha = inject("$aloha", "{}");
  const frameworkLocal = computed(() => framework.value || $aloha.framework || "bootstrap");
  const isBootstrap = computed(() => frameworkLocal.value === "bootstrap");
  const isFoundation = computed(() => frameworkLocal.value === "foundation");

  return {
    frameworkLocal,
    isBootstrap,
    isFoundation,
  };
}
