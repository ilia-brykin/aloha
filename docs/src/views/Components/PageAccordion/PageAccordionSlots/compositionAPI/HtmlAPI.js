export default function HtmlAPI() {
  const codeHtml = `<a-accordion
  :data="data"
>
  <template v-slot:returnsButton>
    <a-translation
      tag="span"
      text="_A_ACCORDION_EXAMPLE_RETURNS_"
    />
    <a-translation
      class="a_badge a_badge_success a_ml_2"
      tag="span"
      text="_A_ACCORDION_EXAMPLE_NEW_"
    />
  </template>
  <template v-slot:returnsContent>
    <a-translation
      tag="p"
      text="_A_ACCORDION_EXAMPLE_RETURNS_CONTENT_"
    />
    <a-button
      class="a_btn a_btn_primary"
      text="_A_ACCORDION_EXAMPLE_RETURN_BTN_"
    />
  </template>
</a-accordion>`;

  return {
    codeHtml,
  };
}
