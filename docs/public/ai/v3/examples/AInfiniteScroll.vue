<script setup>
import { ref } from "vue";
import { AInfiniteScroll } from "aloha-vue";

const rows = ref([1, 2, 3]);
function loadMore() {
  if (rows.value.length < 12) rows.value = [...rows.value, rows.value.length + 1];
}
</script>

<template>
  <AInfiniteScroll :callback="loadMore">
    <p v-for="row in rows" :key="row">Result {{ row }}</p>
  </AInfiniteScroll>
</template>
