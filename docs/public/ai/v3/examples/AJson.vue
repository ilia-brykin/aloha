<script setup>
import { ref } from "vue";
import { AJson } from "aloha-vue";

const value = ref({ enabled: true });
</script>

<template>
  <div>
        <AJson v-model="value" label="Settings" />
        <output>{{ value }}</output>
      </div>
</template>
