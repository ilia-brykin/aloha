import {
  computed,
  ref,
} from "vue";

export default function AMenuSearchAPI() {
  const modelSearch = ref("");

  const updateModelSearch = model => {
    modelSearch.value = model;
  };

  const isSearchActive = computed(() => {
    return !!modelSearch.value;
  });

  const resetSearch = () => {
    modelSearch.value = "";
  };

  return {
    isSearchActive,
    modelSearch,
    resetSearch,
    updateModelSearch,
  };
}
