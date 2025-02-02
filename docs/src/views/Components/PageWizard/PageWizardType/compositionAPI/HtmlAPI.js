export default function HtmlAPI() {
  const codeHtml = `<h3 class="a_my_3">type="basic"</h3>
<a-wizard
  :steps="wizardSteps"
  type="basic"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="line"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="round"</h3>
<a-wizard
  :steps="wizardSteps"
  type="round"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>

<h3 class="a_my_3">type="arrows"</h3>
<a-wizard
  :steps="wizardSteps"
  type="arrows"
>
  <template
    v-slot:step1
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_1_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step2
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_2_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step3
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_3_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
  <template
    v-slot:step4
  >
    <a-translation
      tag="h4"
      text="_A_MODAL_WIZARD_STEP_4_"
    ></a-translation>
    <p>{{ text }}</p>
  </template>
</a-wizard>`;

  return {
    codeHtml,
  };
}
