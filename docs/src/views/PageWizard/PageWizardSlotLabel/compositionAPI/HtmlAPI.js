export default function HtmlAPI() {
  const codeHtml = `<a-wizard
  :steps="wizardSteps"
>
  <template
    v-slot:stepLabel="{ step, stepNumber, stepIndex, isStepDisabled, isStepActive }"
  >
    <a-translation
      tag="span"
      :text="step.label"
    ></a-translation>
  </template>
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
