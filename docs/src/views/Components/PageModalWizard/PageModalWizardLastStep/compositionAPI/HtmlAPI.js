export default function HtmlAPI() {
  const codeHtml = `<a-button
  id="wizard_last_step"
  class="a_btn a_btn_primary"
  text="_A_MODAL_WIZARD_EXAMPLE_OPEN_"
  @click="openModalWizard"
/>
<a-modal-wizard
  v-if="isModalWizardVisible"
  selector-close-ids="wizard_last_step"
  header-text="_A_MODAL_WIZARD_EXAMPLE_HEADER_"
  is-save-button-last-step-only
  :close="closeModalWizard"
  :save="closeModalWizard"
  :steps="wizardSteps"
>
  <template v-slot:step1>
    <a-translation tag="p" text="_A_MODAL_WIZARD_STEP_1_" />
  </template>
  <template v-slot:step2>
    <a-translation tag="p" text="_A_MODAL_WIZARD_STEP_2_" />
  </template>
  <template v-slot:step3>
    <a-translation tag="p" text="_A_MODAL_WIZARD_STEP_3_" />
  </template>
</a-modal-wizard>`;

  return {
    codeHtml,
  };
}
