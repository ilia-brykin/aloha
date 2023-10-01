export default function HtmlAPI() {
  const codeHtml = `<a-wizard
  :steps="wizardSteps"
  :back-button-attributes="{ stop: true }"
  back-button-class="a_btn a_btn_warning"
  back-button-icon-left="ChevronLeft"
  back-button-icon-right="ChevronLeft"
  back-button-text="_A_WIZARD_PAGE_BACK_BTN_TEXT_"
  back-button-title="_A_WIZARD_PAGE_BACK_BTN_TEXT_"
  :forward-button-attributes="{ stop: true }"
  forward-button-class="a_btn a_btn_primary"
  forward-button-icon-left="ChevronRight"
  forward-button-icon-right="ChevronRight"
  forward-button-text="_A_WIZARD_PAGE_FORWARD_BTN_TEXT_"
  forward-button-title="_A_WIZARD_PAGE_FORWARD_BTN_TEXT_"
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
