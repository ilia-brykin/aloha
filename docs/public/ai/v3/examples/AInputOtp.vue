<script setup>
import { ref } from "vue";
import { AInputOtp } from "aloha-vue";

const value = ref("");
</script>

<template>
  <div>
        <AInputOtp v-model="value" label="Verification code" :length="6" />
        <output>{{ value }}</output>
      </div>
</template>
