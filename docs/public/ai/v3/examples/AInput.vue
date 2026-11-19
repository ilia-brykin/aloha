<script setup>
import { ref } from "vue";
import { AInput } from "aloha-vue";

const value = ref("invalid");
</script>

<template>
  <div>
        <AInput v-model="value" label="Email address" :errors="['Enter a valid email address.']" />
        <output>{{ value }}</output>
      </div>
</template>
