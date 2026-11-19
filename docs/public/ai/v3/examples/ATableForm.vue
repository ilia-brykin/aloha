<script setup>
import { ref } from "vue";
import { ATableForm } from "aloha-vue";

const columns = [{ id: "name", keyLabel: "name", label: "Name", formElement: { type: "text", label: "Name" } }];
const rows = ref([{ id: 1, name: "Accessibility" }]);
</script>

<template>
  <ATableForm :columns="columns" :rows="rows" key-id="id" label="Workshops" @update-rows="rows = $event" />
</template>
