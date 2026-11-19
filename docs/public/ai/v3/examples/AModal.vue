<script setup>
import { ref } from "vue";
import { AModal } from "aloha-vue";

const open = ref(false);
function closeDialog() {
  open.value = false;
}
</script>

<template>
  <div>
        <button id="open-dialog" type="button" @click="open = true">Open dialog</button>
        <AModal
          v-if="open"
          header-text="Workshop details"
          selector-close-ids="open-dialog"
          :close="closeDialog"
          is-save-button-hide
        >
          <template #modalBody>
            <p>Registration closes on Friday.</p>
          </template>
        </AModal>
      </div>
</template>
