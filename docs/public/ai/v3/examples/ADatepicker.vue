<script setup>
import { ref } from "vue";
import { ADatepicker } from "aloha-vue";

const value = ref("2026-11-19");
</script>

<template>
  <div>
        <ADatepicker v-model="value" label="Appointment date" format="DD.MM.YYYY" format-save="YYYY-MM-DD" />
        <output>{{ value }}</output>
      </div>
</template>
