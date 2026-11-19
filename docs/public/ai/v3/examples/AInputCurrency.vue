<script setup>
import { ref } from "vue";
import { AInputCurrency } from "aloha-vue";

const value = ref(25);
</script>

<template>
  <div>
        <label for="workshop-budget">Budget</label>
    <AInputCurrency v-model="value" html-id="workshop-budget" currency-symbol="€" />
        <output>{{ value }}</output>
      </div>
</template>
