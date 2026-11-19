<script setup>
import { AGet } from "aloha-vue";
</script>

<template>
  <AGet :data="{ contact: { name: 'Anna Becker' } }" key-label="contact.name" />
</template>
