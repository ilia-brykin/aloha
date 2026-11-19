<script setup>
import { ref } from "vue";
import { AOneCheckbox } from "aloha-vue";

const value = ref(false);
</script>

<template>
  <div>
        <AOneCheckbox v-model="value" label="I agree to the terms" />
        <output>{{ value }}</output>
      </div>
</template>
