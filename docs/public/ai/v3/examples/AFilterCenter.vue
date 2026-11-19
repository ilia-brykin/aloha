<script setup>
import { ref } from "vue";
import { AFilterCenter } from "aloha-vue";

const filter = { id: "query", label: "Name", type: "text" };
const applied = ref({ query: "Anna" });
function clear() {
  applied.value = {};
}
</script>

<template>
  <AFilterCenter
    id="active-filters"
    :applied-model="applied"
    :close-all-filters="clear"
    :close-filter-value="clear"
    :data-key-by-key-id-per-filter="{}"
    :filters-group="{ alwaysVisible: [], filters: [filter] }"
    :filters-key-by-id="{ query: filter }"
    :filters-visible-all="[filter]"
  />
</template>
