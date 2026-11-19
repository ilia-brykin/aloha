<script setup>
import { ref } from "vue";
import { AModalWizard } from "aloha-vue";

const open = ref(false);
const steps = [{ id: "details", label: "Details", slot: "details" }, { id: "review", label: "Review", slot: "review" }];
function closeDialog() {
  open.value = false;
}
</script>

<template>
  <div>
        <button id="open-dialog" type="button" @click="open = true">Open dialog</button>
        <AModalWizard
          v-if="open"
          header-text="Workshop details"
          selector-close-ids="open-dialog"
          :close="closeDialog"
          :steps="steps" key-id="id"
        >
          <template #details><p>Check your contact details.</p></template>
          <template #review><p>Review the registration.</p></template>
        </AModalWizard>
      </div>
</template>
