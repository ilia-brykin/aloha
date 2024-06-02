import {
  computed,
  toRef,
} from "vue";

export default function AttributesAPI(props, {
  htmlIdLocal = computed(() => ""),
}) {
  const label = toRef(props, "label");

  const groupId = computed(() => {
    return `${ htmlIdLocal.value }_group`;
  });

  const groupAriaLabelledby = computed(() => {
    if (!label.value) {
      return undefined;
    }

    return `${ htmlIdLocal.value }_legend`;
  });

  return {
    groupAriaLabelledby,
    groupId,
  };
}
