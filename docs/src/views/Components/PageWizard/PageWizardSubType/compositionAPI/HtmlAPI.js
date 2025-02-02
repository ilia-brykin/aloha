export default function HtmlAPI() {
  const codeHtml = `<h3 class="a_my_3">type="line", sub-type="square"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
  sub-type="square"
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

<h3 class="a_my_3">type="line", sub-type="circle"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
  sub-type="circle"
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

<h3 class="a_my_3">type="line", sub-type="square-bordered"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
  sub-type="square-bordered"
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

<h3 class="a_my_3">type="line", sub-type="circle-bordered"</h3>
<a-wizard
  :steps="wizardSteps"
  type="line"
  sub-type="circle-bordered"
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
