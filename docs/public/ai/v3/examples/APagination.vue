<script setup>
import { computed, ref } from "vue";
import { APagination } from "aloha-vue";

const limit = ref(10);
const offset = ref(0);
const rowsLength = computed(() => Math.min(limit.value, 52 - offset.value));
</script>

<template>
  <APagination v-model:limit="limit" v-model:offset="offset" :rows-length="rowsLength" :total-count="52" />
</template>
