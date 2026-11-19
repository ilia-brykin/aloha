<script setup>
import { ref } from "vue";
import { AAlert } from "aloha-vue";

const visible = ref(true);
</script>

<template>
  <div>
    <button v-if="!visible" type="button" @click="visible = true">Show alert</button>
    <AAlert :is-visible="visible" closable type="success" text="Changes saved" @close="visible = false" />
  </div>
</template>
