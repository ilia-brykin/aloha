<script setup>
import { AWizard } from "aloha-vue";

const steps = [{ id: "details", label: "Details", slot: "details" }, { id: "review", label: "Review", slot: "review" }];
</script>

<template>
  <AWizard :steps="steps" key-id="id" aria-label="Registration">
    <template #details><p>Check your contact details.</p></template>
      <template #review><p>Review the registration.</p></template>
  </AWizard>
</template>
