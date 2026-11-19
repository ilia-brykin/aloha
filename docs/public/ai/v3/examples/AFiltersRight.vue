<script setup>
import { reactive } from "vue";
import { AFiltersRight } from "aloha-vue";

const model = reactive({ query: "" });
const filter = { id: "query", label: "Name", type: "text" };
function updateFilter({ fullModel }) {
  Object.assign(model, fullModel);
}
</script>

<template>
  <AFiltersRight
    id="side-filters"
    :filters="[filter]"
    :applied-model="model"
    :filters-key-by-id="{ query: filter }"
    :on-update-model-filters="updateFilter"
    :update-data-key-by-id-from-filter="() => {}"
  />
</template>
