<script setup>
import { ref } from "vue";
import { AResizer } from "aloha-vue";

const width = ref(180);
let startX = 0;
let startWidth = 180;

function startResize({ $event }) {
  startX = $event.clientX;
  startWidth = width.value;
}

function resize({ clientX }) {
  width.value = Math.max(120, startWidth + clientX - startX);
}
</script>

<template>
  <div style="display: flex; align-items: stretch">
    <div :style="{ width: width + 'px' }">Workshop list</div>
    <AResizer direction="x" @mousedown="startResize" @mousemove="resize" />
    <button type="button" @click="width = Math.max(120, width - 20)">Narrower</button>
    <button type="button" @click="width += 20">Wider</button>
    <div>Workshop details</div>
  </div>
</template>
