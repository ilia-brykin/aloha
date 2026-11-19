<script setup>
import { ref } from "vue";
import { AInputFile } from "aloha-vue";

const value = ref(undefined);
</script>

<template>
  <div>
        <AInputFile v-model="value" accept=".pdf" text="Choose attachment" label-screen-reader="Choose an attachment" />
        <output>{{ value }}</output>
      </div>
</template>
