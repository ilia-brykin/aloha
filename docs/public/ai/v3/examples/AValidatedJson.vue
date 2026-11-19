<script setup>
import { ref } from "vue";
import { AValidatedJson } from "aloha-vue";

const value = ref([]);
const fields = [{ id: "name", type: "text", label: "Name" }];
</script>

<template>
  <div>
        <AValidatedJson v-model="value" label="Participants" :children="fields" />
        <output>{{ value }}</output>
      </div>
</template>
