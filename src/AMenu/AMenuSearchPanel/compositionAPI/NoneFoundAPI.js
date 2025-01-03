import {
  computed,
  toRef,
} from "vue";

export default function NoneFoundAPI(props) {
  const itemsWithSearch = toRef(props, "itemsWithSearch");
  const isSearchActive = toRef(props, "isSearchActive");

  const isNoneFound = computed(() => {
    if (isSearchActive.value) {
      return itemsWithSearch.value.length === 0;
    }
    return false;
  });

  return {
    isNoneFound,
  };
}
