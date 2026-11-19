<script setup>
import { ref } from "vue";
import { ACheckboxRadioGroups } from "aloha-vue";

const options = {
  _not_grouped: [
    { _a_id: "north", _a_label: "North" },
    { _a_id: "south", _a_label: "South" },
  ],
};
const groups = { 0: [{ groupKey: "_not_grouped", allGroupKeys: "_not_grouped" }] };
const selection = ref([]);
</script>

<template>
  <fieldset>
    <legend>Teams</legend>
    <ACheckboxRadioGroups
      id="team-group"
      type="checkbox"
      :level-index="0"
      :groups-for-lever="groups"
      :data-grouped="options"
      model-search=""
      :searching-elements="{}"
      :searching-groups="{}"
      :searching-groups-with-search-in-group="{}"
      :model-value="selection"
      @change-model-value="selection = $event.model"
    />
  </fieldset>
</template>
