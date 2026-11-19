<script setup>
import { AAccordion } from "aloha-vue";

const sections = [{ id: "hours", label: "Opening hours", content: "Monday to Friday" }];
</script>

<template>
  <AAccordion :data="sections" key-id="id" key-label="label" key-content="content" />
</template>
