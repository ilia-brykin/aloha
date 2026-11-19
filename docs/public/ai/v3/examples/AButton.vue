<script setup>
import { ref } from "vue";
import { AButton, AIconClose } from "aloha-vue";

const saved = ref(false);
</script>

<template>
  <div>
    <AButton class="a_btn a_btn_primary" text="Save draft" @click="saved = true" />
    <AButton class="a_btn a_btn_secondary" :icon-left="AIconClose" aria-label="Clear saved state" @click="saved = false" />
    <output>{{ saved ? "Draft saved" : "" }}</output>
  </div>
</template>
