<script setup>
import { ACarousel } from "aloha-vue";

const slides = [{ id: 1, text: "Introductions" }, { id: 2, text: "Hands-on exercises" }];
</script>

<template>
  <ACarousel :data="slides" key-id="id" aria-label="Workshop highlights">
    <template #item="{ item }">
      <p>{{ item.text }}</p>
    </template>
  </ACarousel>
</template>
