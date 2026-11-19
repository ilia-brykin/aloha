<script setup>
import { ATree } from "aloha-vue";

const nodes = [{ id: "vue", label: "Vue", children: [{ id: "forms", label: "Accessible forms" }] }];
</script>

<template>
  <ATree :data="nodes" key-id="id" key-label="label" key-children="children" aria-label="Workshop topics" />
</template>
