<script setup>
import { AErrors } from "aloha-vue";
</script>

<template>
  <div>
    <AErrors :errors="{ email: ['Enter a valid email address.'] }" :is-error-link="false" :auto-focus="false" />
  </div>
</template>
