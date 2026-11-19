<script setup>
import { ref } from "vue";
import { ARouterLinkConfig } from "aloha-vue";

const value = ref({});
const routes = [{ name: "overview", path: "/overview", meta: { title: "Overview" } }];
</script>

<template>
  <div>
        <ARouterLinkConfig v-model="value" label="Destination" :routes="routes" />
        <output>{{ value }}</output>
      </div>
</template>
