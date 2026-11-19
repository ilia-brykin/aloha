<script setup>
import { ref } from "vue";
import { AInputNumber } from "aloha-vue";

const value = ref(2);
</script>

<template>
  <div>
        <label for="workshop-seats">Seats</label>
    <AInputNumber v-model="value" html-id="workshop-seats" :min="1" :max="8" />
        <output>{{ value }}</output>
      </div>
</template>
