export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="overflow"
  :data="dataOverflow"
  :is-inline="true"
  label="overflow"
/>
<div
  class="a_mt_3"
  style="max-width: 30rem;"
>
  <a-navbar
    :data="data"
    :overflow="overflow"
  />
</div>`;

  return {
    codeHtml,
  };
}
