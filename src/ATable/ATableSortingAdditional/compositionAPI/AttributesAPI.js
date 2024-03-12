import {
  computed,
  inject,
} from "vue";

export default function AttributesAPI() {
  const tableId = inject("tableId");

  const excludeRenderAttributes = [
    "additionalProps",
  ];

  const idPrefix = computed(() => {
    return `${ tableId.value }_`;
  });

  return {
    excludeRenderAttributes,
    idPrefix,
  };
}
