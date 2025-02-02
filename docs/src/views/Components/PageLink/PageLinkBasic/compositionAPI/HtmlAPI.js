export default function HtmlAPI() {
  const codeHtml = `<a-Link
  text="https://github.com/"
  href="https://github.com/"
>
</a-Link>
<a-Link
  class="a_ml_2"
  text="Aloha"
  :to="{ name: 'PageButton' }"
>
</a-Link>
<a-Link
  class="a_ml_2"
  text="Aloha"
  to="/button"
>
</a-Link>`;

  return {
    codeHtml,
  };
}
