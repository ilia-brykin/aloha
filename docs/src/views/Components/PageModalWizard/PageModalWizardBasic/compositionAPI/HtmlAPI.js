export default function HtmlAPI() {
  const codeHtml = `<a-button
  id="wizard_basic"
  class="a_btn a_btn_primary"
  text="open"
  @click="openModalWizard"
></a-button>
<a-modal-wizard
  v-if="isModalWizardVisible"
  size="xxl"
  selector-close-ids="wizard_basic"
  header-text="Wizard"
  :close="closeModalWizard"
  :steps="wizardSteps"
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
</a-modal-wizard>`;

  return {
    codeHtml,
  };
}
