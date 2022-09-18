import {
  ref,
} from "vue";

export default function AMenuSearchAPI() {
  const modelSearch = ref("");

  const updateModelSearch = model => {
    modelSearch.value = model;
  };

  return {
    modelSearch,
    updateModelSearch,
  };
}
