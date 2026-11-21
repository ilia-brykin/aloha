<template>
  <main class="a_p_4">
    <div class="a_d_flex a_justify_content_between a_align_items_center a_mb_3">
      <a-translation
        tag="h1"
        text="_APP_TITLE_"
      />
      <a-button
        class="a_btn a_btn_link"
        text="_APP_LANGUAGE_"
        @click="toggleLanguage"
      />
    </div>

    <form
      class="a_d_flex a_align_items_end a_gap_2 a_mb_3"
      @submit.prevent="addTask"
    >
      <a-input
        v-model="title"
        label="_APP_TASK_"
        :required="true"
      />
      <a-button
        class="a_btn a_btn_primary"
        text="_APP_ADD_"
        type="submit"
        :disabled="!title"
      />
    </form>

    <a-table
      :columns="columns"
      :data="tasks"
      :is-action-column-visible="true"
      key-id="id"
      label="_APP_TABLE_"
    >
      <template #rowActions="{ row }">
        <a-button
          class="a_btn a_btn_secondary"
          icon-left="Trash"
          text-screen-reader="_APP_DELETE_"
          title="_APP_DELETE_"
          :extra="{ title: row.title }"
          @click="deleteTask(row)"
        />
      </template>
    </a-table>
  </main>
</template>

<script setup>
import { ref } from "vue";
import {
  AButton,
  AInput,
  ATable,
  ATranslation,
  setLanguage,
} from "aloha-vue";

const title = ref("");
const tasks = ref([
  { id: 1, title: "Read node_modules/aloha-vue/AGENTS.md", created: "2026-01-15" },
]);

const columns = [
  { id: "title", keyLabel: "title", label: "_APP_COLUMN_TITLE_" },
  { id: "created", keyLabel: "created", label: "_APP_COLUMN_CREATED_", slot: "get", filter: "date" },
];

let nextId = 2;
const addTask = () => {
  tasks.value = [...tasks.value, { id: nextId++, title: title.value, created: new Date().toISOString() }];
  title.value = "";
};

const deleteTask = row => {
  tasks.value = tasks.value.filter(task => task.id !== row.id);
};

let language = "de";
const toggleLanguage = () => {
  language = language === "de" ? "en" : "de";
  setLanguage(language);
};
</script>
