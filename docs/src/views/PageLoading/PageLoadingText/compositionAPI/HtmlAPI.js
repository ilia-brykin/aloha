export default function HtmlAPI() {
  const codeHtml = `<div
  class="a_position_relative"
>
  <a-loading
    :extra="{ number: 1 }"
    :is-loading="true"
    text="_PAGE_LOADING_TEXT_{{number}}_"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>`;

  return {
    codeHtml,
  };
}
