<script setup>
import { ref } from "vue";
import { AFormElement } from "aloha-vue";

const value = ref("");
</script>

<template>
  <div>
        <AFormElement v-model="value" label="First name" type="text" />
        <output>{{ value }}</output>
      </div>
</template>
