export default function HtmlAPI() {
  const codeHtml = `<a-progress
  :value="20"
>
  <template
    v-slot:progressText="{ valuePercent }"
  >
    <span>Aloha {{ valuePercent }}</span>
  </template>
</a-progress>
<a-progress
  class="a_mt_4"
  :value="40"
>
  <template
    v-slot:progressText="{ valuePercent }"
  >
    <span>$$$ {{ valuePercent }}</span>
  </template>
</a-progress>`;

  return {
    codeHtml,
  };
}
