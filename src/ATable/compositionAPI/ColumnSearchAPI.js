import {
  ref,
} from "vue";

export default function ColumnSearchAPI() {
  const searchColumnModel = ref("");

  const updateSearchColumnModel = model => {
    searchColumnModel.value = model;
  };

  return {
    searchColumnModel,
    updateSearchColumnModel,
  };
}
