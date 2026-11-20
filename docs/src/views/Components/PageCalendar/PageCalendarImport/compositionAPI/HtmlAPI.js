export default function HtmlAPI() {
  const codeHtml = `<div class="a_d_flex a_flex_wrap a_gap_3 a_align_items_end">
  <a-input-file
    v-model="file"
    :is-dropzone="true"
    accept=".ics,text/calendar"
    label="_A_CALENDAR_IMPORT_FILE_"
  />
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="_A_CALENDAR_IMPORT_SAMPLE_"
    @click="useSample"
  />
</div>
<template v-if="imported.length || skipped.length || warnings.length">
  <div class="a_d_flex a_align_items_center a_gap_3">
    <a-translation
      tag="strong"
      text="_A_CALENDAR_IMPORT_READ_{{count}}_"
      :extra="{ count: imported.length }"
    />
    <a-button
      v-if="imported.length"
      class="a_btn a_btn_primary"
      text="_A_CALENDAR_IMPORT_SAVE_"
      @click="save"
    />
  </div>
  <div v-if="warnings.length">
    <a-translation
      tag="strong"
      text="_A_CALENDAR_IMPORT_WARNINGS_"
    />
    <ul>
      <li
        v-for="(warning, index) in warnings"
        :key="index"
      >
        <a-translation
          tag="span"
          :text="getCodeText(warning.code)"
          :extra="{ label: warning.label, value: warning.value }"
        />
      </li>
    </ul>
  </div>
  <div v-if="skipped.length">
    <a-translation
      tag="strong"
      text="_A_CALENDAR_IMPORT_SKIPPED_"
    />
    <ul>
      <li
        v-for="(item, index) in skipped"
        :key="index"
      >
        <a-translation
          tag="span"
          :text="getCodeText(item.code)"
          :extra="{ label: item.label }"
        />
      </li>
    </ul>
  </div>
</template>
<a-calendar
  :events="calendarEvents"
/>`;

  return {
    codeHtml,
  };
}
