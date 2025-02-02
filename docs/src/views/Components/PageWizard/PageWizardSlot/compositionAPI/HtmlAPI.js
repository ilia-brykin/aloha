export default function HtmlAPI() {
  const codeHtml = `<a-wizard
  :steps="wizardSteps"
>
  <template
    v-slot:step="{ step, stepIndex }"
  >
    <a-translation
      tag="h3"
      :text="step.label"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
 
  <template
    v-slot:step4
  >
    <h2>ALOHA</h2>
    <p>{{ text }}</p>
  </template>
</a-wizard>`;

  return {
    codeHtml,
  };
}
