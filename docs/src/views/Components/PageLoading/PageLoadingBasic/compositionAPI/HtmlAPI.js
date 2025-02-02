export default function HtmlAPI() {
  const codeHtml = `<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
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
