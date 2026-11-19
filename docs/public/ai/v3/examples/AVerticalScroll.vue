<script setup>
import { AVerticalScroll } from "aloha-vue";
</script>

<template>
  <AVerticalScroll>
    <p v-for="item in 20" :key="item">Workshop {{ item }}</p>
  </AVerticalScroll>
</template>
