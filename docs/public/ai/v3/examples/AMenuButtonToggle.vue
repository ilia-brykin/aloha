<script setup>
import { AMenuButtonToggle, AMenu } from "aloha-vue";

const items = [{ id: "overview", label: "Overview", to: { name: "overview" } }];
</script>

<template>
  <div>
    <AMenuButtonToggle menu-id="workshop-menu" :can-change-body-class="false" />
    <AMenu :data="items" menu-id="workshop-menu" key-id="id" key-label="label" :has-search="false" is-inline :can-change-body-class="false" />
  </div>
</template>
