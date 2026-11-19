<script setup>
import { AMenu } from "aloha-vue";

const items = [{ id: "overview", label: "Overview", to: { name: "overview" } }];
</script>

<template>
  <AMenu :data="items" menu-id="workshop-menu" key-id="id" key-label="label" :has-search="false" is-inline :can-change-body-class="false" />
</template>
