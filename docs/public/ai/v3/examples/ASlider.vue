<script setup>
import { ref } from "vue";
import { ASlider } from "aloha-vue";

const value = ref(35);
</script>

<template>
  <div>
        <ASlider v-model="value" label="Volume" :min="0" :max="100" />
        <output>{{ value }}</output>
      </div>
</template>
