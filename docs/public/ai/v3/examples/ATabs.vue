<script setup>
import { ATabs } from "aloha-vue";

const tabs = [
  { id: "overview", label: "Overview", content: "Workshop overview" },
  { id: "schedule", label: "Schedule", content: "Saturday, 10:00" },
];
</script>

<template>
  <ATabs :data="tabs" key-id="id" key-label="label" key-content="content" />
</template>
