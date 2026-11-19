<script setup>
import { ref } from "vue";
import { ASelect } from "aloha-vue";

const value = ref("north");
const options = [{ id: "north", label: "North" }, { id: "south", label: "South" }];
</script>

<template>
  <div>
        <ASelect v-model="value" label="Team" :data="options" key-id="id" key-label="label" />
        <output>{{ value }}</output>
      </div>
</template>
