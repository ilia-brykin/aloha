export default function HtmlAPI() {
  const codeHtml = `<a-form
  v-model="model"
  :data="data"
  @submit="onSubmit"
/>
<p
  v-if="countSubmit"
  class="a_mt_3"
>submit: {{ countSubmit }}</p>`;

  return {
    codeHtml,
  };
}
