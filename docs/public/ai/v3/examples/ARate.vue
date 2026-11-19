<script setup>
import { ref } from "vue";
import { ARate } from "aloha-vue";

const value = ref(3);
</script>

<template>
  <div>
        <ARate v-model="value" label="Workshop rating" :max="5" clearable />
        <output>{{ value }}</output>
      </div>
</template>
