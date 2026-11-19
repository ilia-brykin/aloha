<script setup>
import { ref } from "vue";
import { ASelectStyle } from "aloha-vue";

const value = ref(undefined);
</script>

<template>
  <div>
        <ASelectStyle v-model="value" label="Button style" />
        <output>{{ value }}</output>
      </div>
</template>
