<script setup>
import { ref } from "vue";
import { AColorPicker } from "aloha-vue";

const value = ref("#2869cc");
</script>

<template>
  <div>
        <AColorPicker v-model="value" label="Accent color" />
        <output>{{ value }}</output>
      </div>
</template>
