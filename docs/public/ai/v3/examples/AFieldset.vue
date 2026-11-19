<script setup>
import { ref } from "vue";
import { AFieldset } from "aloha-vue";

const values = ref({ email: "" });
const fields = [{ id: "email", type: "text", label: "Email address" }];
</script>

<template>
  <AFieldset v-model="values" label="Contact details" :children="fields" />
</template>
