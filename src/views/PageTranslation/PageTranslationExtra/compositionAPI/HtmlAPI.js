export default function HtmlAPI() {
  const codeHtml = `<a-translation
  :html="'_A_TRANSLATION_EXAMPLE_EXTRA_{{aloha}}_{{a}}_{{b}}_'"
  :extra="{ aloha: 'ALOHA', a: 10, b: 123 }"
>
</a-translation>`;

  return {
    codeHtml,
  };
}
