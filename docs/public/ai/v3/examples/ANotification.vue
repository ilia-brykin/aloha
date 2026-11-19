<script setup>
import { ANotification, ANotificationAPI_addNotification } from "aloha-vue";

function notify() {
  ANotificationAPI_addNotification({ text: "Draft saved" });
}
</script>

<template>
  <div>
    <button type="button" @click="notify">Show notification</button>
    <ANotification />
  </div>
</template>
