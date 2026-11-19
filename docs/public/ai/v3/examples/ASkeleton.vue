<script setup>
import { ref } from "vue";
import { ASkeleton } from "aloha-vue";

const loading = ref(true);
</script>

<template>
  <div>
    <button type="button" @click="loading = !loading">{{ loading ? "Show content" : "Show skeleton" }}</button>
    <ASkeleton :loading="loading" :rows="3">
      <p>Account details</p>
    </ASkeleton>
  </div>
</template>
