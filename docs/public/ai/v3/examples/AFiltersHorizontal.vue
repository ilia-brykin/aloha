<script setup>
import { reactive } from "vue";
import { AFiltersHorizontal } from "aloha-vue";

const draft = reactive({ query: "" });
const filter = { id: "query", label: "Name", type: "text" };
function updateFilter({ fullModel }) {
  Object.assign(draft, fullModel);
}
</script>

<template>
  <AFiltersHorizontal
    id="horizontal-filters"
    :filters-group="{ alwaysVisible: [], filters: [filter] }"
    :filters-key-by-id="{ query: filter }"
    :filters-saved="[]"
    :filters-visible="[filter]"
    :unapplied-model="draft"
    :on-update-model-filters="updateFilter"
    :update-data-key-by-id-from-filter="() => {}"
    :update-filters-saved="() => {}"
    :can-save="false"
  />
</template>
