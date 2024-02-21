import {
  computed,
  toRef,
} from "vue";

export default function AttributesComponentAPI(props, {
  attributesForRoot = computed(() => ({})),
  isColumnVisible = computed(() => false),
  isLocked = computed(() => false),
  labelTranslated = computed(() => ""),
}) {
  const searchColumnModel = toRef(props, "searchColumnModel");

  const isComponentVisible = computed(() => {
    if (!searchColumnModel.value) {
      return true;
    }
    const RE = new RegExp(searchColumnModel.value, "gi");
    return `${ labelTranslated.value }`.search(RE) !== -1;
  });

  const attributesComponent = computed(() => {
    const ATTRIBUTES = {
      ...attributesForRoot.value,
      class: "a_table__th__dropdown__li",
    };
    if (!isComponentVisible.value) {
      ATTRIBUTES.style = "display: none;";
    }
    if (!isLocked.value && !isColumnVisible.value) {
      ATTRIBUTES.class += " a_table__th__dropdown__li_invisible";
    }
    return ATTRIBUTES;
  });

  return {
    attributesComponent,
  };
}
