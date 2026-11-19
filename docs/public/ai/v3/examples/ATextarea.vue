<script setup>
import { ref } from "vue";
import { ATextarea } from "aloha-vue";

const value = ref("");
</script>

<template>
  <div>
        <ATextarea v-model="value" label="Additional notes" />
        <output>{{ value }}</output>
      </div>
</template>
