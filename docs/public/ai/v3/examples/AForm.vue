<script setup>
import { ref } from "vue";
import { AForm } from "aloha-vue";

const values = ref({ email: "" });
const fields = [{ id: "email", type: "text", label: "Email address" }];
</script>

<template>
  <div>
    <AForm v-model="values" :data="fields" />
    <output>{{ values.email }}</output>
  </div>
</template>
