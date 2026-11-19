<script setup>
import { ref } from "vue";
import { ADatepickerRange } from "aloha-vue";

const value = ref({ from: "2026-11-19", until: "2026-11-22" });
</script>

<template>
  <div>
        <ADatepickerRange v-model="value" label="Booking window" key-from="from" key-until="until" format-save="YYYY-MM-DD" />
        <output>{{ value }}</output>
      </div>
</template>
