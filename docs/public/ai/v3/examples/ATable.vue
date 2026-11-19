<script setup>
import { ref } from "vue";
import { ATable } from "aloha-vue";

const empty = ref(false);
const columns = [{ id: "name", keyLabel: "name", label: "Workshop" }];
const rows = [{ id: 1, name: "Accessibility" }, { id: 2, name: "Vue basics" }];
</script>

<template>
  <div>
    <button type="button" @click="empty = !empty">{{ empty ? "Show rows" : "Show empty state" }}</button>
    <ATable label="Workshops" :columns="columns" :data="empty ? [] : rows" key-id="id" />
  </div>
</template>
