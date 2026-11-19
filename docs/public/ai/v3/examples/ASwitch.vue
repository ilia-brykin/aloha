<script setup>
import { ref } from "vue";
import { ASwitch } from "aloha-vue";

const value = ref(false);
</script>

<template>
  <div>
        <ASwitch v-model="value" label="Email reminders" />
        <output>{{ value }}</output>
      </div>
</template>
