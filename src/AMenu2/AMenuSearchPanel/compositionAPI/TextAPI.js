import {
  computed,
} from "vue";

export default function TextAPI(props, {
  isNoneFound = computed(() => false),
}) {
  const textLocal = computed(() => {
    return isNoneFound.value ?
      "_A_MENU_2_SEARCH_NONE_FOUND_" :
      "_A_MENU_2_SEARCH_ELEMENTS_{{count}}_";
  });

  return {
    textLocal,
  };
}
