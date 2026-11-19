<script setup>
import { ref } from "vue";
import { ACheckbox } from "aloha-vue";

const value = ref(["north"]);
const options = [{ id: "north", label: "North" }, { id: "south", label: "South" }];
</script>

<template>
  <div>
        <ACheckbox v-model="value" label="Teams" :data="options" key-id="id" key-label="label" />
        <output>{{ value }}</output>
      </div>
</template>
