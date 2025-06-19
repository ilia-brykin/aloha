export default function HtmlAPI() {
  const codeHtml = `<a-button
  :extra="{ number: 2 }"
  :is-title-html="true"
  class="a_btn a_btn_success"
  text="extra"
  title="_A_BUTTON_EXAMPLE_BIG_TITLE_{{number}}_"
></a-button>`;

  return {
    codeHtml,
  };
}
