export default function HtmlAPI() {
  const codeHtml = `<a-element
  :extra="{ number: 2 }"
  :is-title-html="true"
  class="a_btn a_btn_success"
  text="extra"
  title="_A_ELEMENT_EXAMPLE_BIG_TITLE_{{number}}_"
  type="button"
></a-element>`;

  return {
    codeHtml,
  };
}
