<script setup>
import { ref } from "vue";
import { AFilters } from "aloha-vue";

const applied = ref({});
const draft = ref({});
const filters = [{ id: "query", label: "Name", type: "text", alwaysVisible: true }];
</script>

<template>
  <AFilters
    id="directory-filters"
    v-model:applied-model="applied"
    v-model:unapplied-model="draft"
    :filters="filters"
  />
</template>
