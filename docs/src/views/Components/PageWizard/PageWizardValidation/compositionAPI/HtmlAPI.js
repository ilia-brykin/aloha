export default function HtmlAPI() {
  const codeHtml = `<a-wizard
  :steps="wizardSteps"
  :before-step-change="beforeStepChange"
  is-step-heading-visible
  finish-button-text="_A_WIZARD_FINISH_"
  @finish="onFinish"
>
  <template v-slot:step1>
    <a-input
      v-model="name"
      label="_A_WIZARD_EXAMPLE_NAME_"
      required
      :errors="errors"
    />
  </template>
  <template v-slot:step2>
    <a-translation
      tag="p"
      text="_A_WIZARD_EXAMPLE_CHECK_"
    />
  </template>
</a-wizard>
<a-translation
  v-if="isFinished"
  tag="p"
  role="status"
  text="_A_WIZARD_EXAMPLE_FINISHED_"
/>`;

  return {
    codeHtml,
  };
}
