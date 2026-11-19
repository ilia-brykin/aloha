<script setup>
import { ref } from "vue";
import { AMultiselectOrdered } from "aloha-vue";

const value = ref(["north", "south"]);
const options = [{ id: "north", label: "North" }, { id: "south", label: "South" }];
</script>

<template>
  <div>
        <AMultiselectOrdered v-model="value" label="Team order" :data="options" key-id="id" key-label="label" />
        <output>{{ value }}</output>
      </div>
</template>
