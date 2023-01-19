import {
  computed,
  toRef,
} from "vue";

export default function AttributesAPI(props) {
  const tab = toRef(props, "tab");
  const disabled = toRef(props, "disabled");

  const isDisabled = computed(() => {
    return !!(disabled.value || tab.value.disabled);
  });

  const tabindexLocal = computed(() => {
    return isDisabled.value ? -1 : 0;
  });

  return {
    isDisabled,
    tabindexLocal,
  };
}
