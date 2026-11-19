<script setup>
import { AShowMore } from "aloha-vue";

const description = "<p>Introduction and registration</p><p>Workshops and demonstrations</p><p>Questions and closing remarks</p>";
</script>

<template>
  <AShowMore :height="32" btn-text-more="Show full description" btn-text-less="Show less" :html="description" />
</template>
