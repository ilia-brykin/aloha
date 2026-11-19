<script setup>
import { ALoading } from "aloha-vue";

const loading = false;
</script>

<template>
  <ALoading :is-loading="loading" text="Loading account">
    <p>Account details</p>
  </ALoading>
</template>
