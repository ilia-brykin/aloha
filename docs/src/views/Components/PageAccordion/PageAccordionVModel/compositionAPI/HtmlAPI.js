export default function HtmlAPI() {
  const codeHtml = `<div class="a_mb_3">
  <a-button
    class="a_btn a_btn_secondary a_mr_2"
    text="_A_ACCORDION_EXAMPLE_OPEN_ALL_"
    @click="openAll"
  />
  <a-button
    class="a_btn a_btn_secondary"
    text="_A_ACCORDION_EXAMPLE_CLOSE_ALL_"
    @click="closeAll"
  />
</div>
<a-accordion
  v-model="idsOpen"
  :data="data"
  :always-open="true"
/>
<p class="a_mt_3">v-model: {{ idsOpen }}</p>`;

  return {
    codeHtml,
  };
}
