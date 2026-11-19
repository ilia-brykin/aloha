<script setup>
import { ref } from "vue";
import { AFormElementBtnClear } from "aloha-vue";

const value = ref("Workshop");
</script>

<template>
  <div>
    <label for="filter-text">Filter</label>
    <input id="filter-text" v-model="value">
    <AFormElementBtnClear text-screen-reader="Clear filter" :disabled="!value" @clear="value = ''" />
  </div>
</template>
