<script setup>
import { ref } from "vue";
import { AGroup } from "aloha-vue";

const values = ref({ email: "" });
const fields = [{ id: "email", type: "text", label: "Email address" }];
</script>

<template>
  <AGroup v-model="values" label="Contact details" :children="fields" />
</template>
