import {
  computed,
  inject,
  toRef,
} from "vue";

export function frameworksApi(props) {
  const framework = toRef(props, "framework");
  const $aloha = inject("$aloha", "{}");
  const frameworkInject = inject("framework", undefined) || {};
  const frameworkLocal = computed(() => framework.value || frameworkInject.value || $aloha.framework || "bootstrap");
  const isBootstrap = computed(() => frameworkLocal.value === "bootstrap");
  const isFoundation = computed(() => frameworkLocal.value === "foundation");

  return {
    frameworkLocal,
    isBootstrap,
    isFoundation,
  };
}
