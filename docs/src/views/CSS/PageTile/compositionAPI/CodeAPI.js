export default function CodeAPI() {
  const codeBasic = `<div class="a_tile">
  <div class="a_tile__body">
    A tile groups related content on the surface.
  </div>
</div>`;

  const codeParts = `<div class="a_tile">
  <div class="a_tile__header">
    <h3 class="a_fs_5">Invoice 2026-114</h3>
  </div>
  <div class="a_tile__body">
    <p>Amount: 1.234,50 €</p>
    <p>Due on 01.12.2026</p>
  </div>
  <div class="a_tile__footer a_d_flex a_gap_2">
    <button class="a_btn a_btn_primary" type="button">Pay</button>
    <button class="a_btn a_btn_secondary" type="button">Details</button>
  </div>
</div>`;

  const codeClickable = `<div class="a_tile a_bg_primary_subtle_hover">
  <div class="a_tile__body">
    <h3 class="a_fs_5">
      <a class="a_stretched_link" href="/projects/1">Project Aloha</a>
    </h3>
    <p>The whole tile is clickable.</p>
  </div>
</div>`;

  const codeColors = `<div class="a_tile a_border_primary_subtle">...</div>
<div class="a_tile a_border_danger">...</div>
<div class="a_tile a_shadow_md a_border_0">...</div>
<div class="a_tile a_border_style_dashed">...</div>`;

  const codeGrid = `<div class="a_columns a_columns_count_3 a_columns_count_1_mobile">
  <div class="a_column a_column_1">
    <div class="a_tile a_height_100">...</div>
  </div>
  <div class="a_column a_column_1">
    <div class="a_tile a_height_100">...</div>
  </div>
  <div class="a_column a_column_1">
    <div class="a_tile a_height_100">...</div>
  </div>
</div>`;

  return {
    codeBasic,
    codeClickable,
    codeColors,
    codeGrid,
    codeParts,
  };
}
