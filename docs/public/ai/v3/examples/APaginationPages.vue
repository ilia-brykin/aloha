<script setup>
import { ref } from "vue";
import { APaginationPages } from "aloha-vue";

const offset = ref(0);
</script>

<template>
  <APaginationPages v-model:offset="offset" :limit="10" :total-count="52" />
</template>
