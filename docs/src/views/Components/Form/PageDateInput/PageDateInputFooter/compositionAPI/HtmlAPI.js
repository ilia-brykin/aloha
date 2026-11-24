export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_DELIVERY_"
>
  <template v-slot:footer>
    <a-translation
      class="a_mb_0 a_mr_auto"
      tag="p"
      text="_A_DATE_INPUT_EXAMPLE_FOOTER_TEXT_"
    />
  </template>
</a-date-input>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
