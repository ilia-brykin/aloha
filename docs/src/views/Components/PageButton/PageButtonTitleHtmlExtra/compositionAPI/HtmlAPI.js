export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_success"
  title="_A_BUTTON_EXAMPLE_BIG_TITLE_{{number}}_"
  text="extra"
  :is-title-html="true"
  :extra="{ number: 2 }"
></a-button>`;

  return {
    codeHtml,
  };
}
