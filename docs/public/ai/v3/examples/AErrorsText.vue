<script setup>
import { AErrorsText } from "aloha-vue";
</script>

<template>
  <div>
    <label for="contact-email">Email address</label>
    <input id="contact-email" type="email" aria-invalid="true" aria-describedby="contact-error">
    <AErrorsText id="contact-error" :errors="['Enter a valid email address.']" />
  </div>
</template>
