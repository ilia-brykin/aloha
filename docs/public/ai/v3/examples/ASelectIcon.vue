<script setup>
import { ref } from "vue";
import { ASelectIcon, AIconClose } from "aloha-vue";

const value = ref(AIconClose);
const options = [{ value: AIconClose, label: "Close" }];
</script>

<template>
  <div>
        <ASelectIcon v-model="value" label="Status icon" :data="options" />
        <output>{{ value }}</output>
      </div>
</template>
