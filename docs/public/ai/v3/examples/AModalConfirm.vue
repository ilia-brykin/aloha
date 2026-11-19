<script setup>
import { ref } from "vue";
import { AModalConfirm, AConfirmAPI_closeConfirm, AConfirmAPI_openConfirm } from "aloha-vue";

const deleted = ref(false);
function confirmDeletion() {
  AConfirmAPI_openConfirm({
    headerText: "Delete the draft?",
    bodyHtml: "The draft will be removed.",
    selectorCloseIds: "delete-draft",
    save() {
      deleted.value = true;
      AConfirmAPI_closeConfirm();
    },
  });
}
</script>

<template>
  <div>
    <button id="delete-draft" type="button" @click="confirmDeletion">Delete draft</button>
    <AModalConfirm />
    <output>{{ deleted ? "Draft deleted" : "" }}</output>
  </div>
</template>
