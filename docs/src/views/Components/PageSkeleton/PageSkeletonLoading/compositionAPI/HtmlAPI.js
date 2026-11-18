export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_secondary a_mb_3"
  text="Reload"
  :disabled="loading"
  @click="load"
></a-button>
<a-skeleton
  :loading="loading"
  :avatar="true"
  :rows="2"
>
  <div class="a_d_flex a_gap_3 a_align_items_start">
    <span class="a_rounded_circle ...">AB</span>
    <div>
      <h3>Anna Becker</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
  </div>
</a-skeleton>`;

  return {
    codeHtml,
  };
}
