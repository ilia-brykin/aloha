<script setup>
import { AGroupButtonDropdown } from "aloha-vue";

const actions = [
  { type: "button", text: "Save", click: () => console.log("Save") },
  { type: "link", text: "Preview", href: "#preview" },
];
</script>

<template>
  <AGroupButtonDropdown :actions="actions" />
</template>
