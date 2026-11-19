<script setup>
import { ADropdown } from "aloha-vue";
</script>

<template>
  <ADropdown button-text="Document actions">
    <template #dropdown>
      <a href="#download">Download report</a>
    </template>
  </ADropdown>
</template>
