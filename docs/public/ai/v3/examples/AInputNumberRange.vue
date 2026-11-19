<script setup>
import { ref } from "vue";
import { AInputNumberRange } from "aloha-vue";

const value = ref({ min: 2, max: 8 });
</script>

<template>
  <div>
        <AInputNumberRange v-model="value" label="Seats per table" key-min="min" key-max="max" />
        <output>{{ value }}</output>
      </div>
</template>
