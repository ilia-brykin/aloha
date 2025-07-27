import {
  computed,
} from "vue";

export default function AttributesAPI(props, {
  htmlIdLocal = computed(() => ""),
}) {
  const secondButtonHtmlId = computed(() => {
    return `${ htmlIdLocal.value }_second`;
  });

  return {
    secondButtonHtmlId,
  };
}
