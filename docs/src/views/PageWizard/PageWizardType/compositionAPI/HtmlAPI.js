export default function HtmlAPI() {
  const codeHtml = `<div
  class="a_columns a_columns_count_12"
>
  <div
    class="a_column.a_column_6 a_columns_count_12_touch a_mb_5"
  >
    <a-select
      v-model="modelType"
      label="_A_WIZARD_LABEL_TYPE_"
      key-id="value"
      key-label="label"
      :data="types"
      :deselectable="false"
      :translate-data="true"
    ></a-select>
  </div>
</div>
<a-wizard
  :steps="wizardSteps"
  :type="modelType"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h2"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h2"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h2"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h2"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`;

  return {
    codeHtml,
  };
}
