<script setup>
import { ref } from "vue";
import { AModalForm } from "aloha-vue";

const open = ref(false);
const values = ref({ email: "" });
const fields = [{ id: "email", type: "text", label: "Email address" }];
function closeDialog() {
  open.value = false;
}
</script>

<template>
  <div>
        <button id="open-dialog" type="button" @click="open = true">Open dialog</button>
        <AModalForm
          v-if="open"
          header-text="Workshop details"
          selector-close-ids="open-dialog"
          :close="closeDialog"
          :data-form="fields" v-model="values"
        >
        </AModalForm>
      </div>
</template>
