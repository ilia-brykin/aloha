export default function CodeAPI() {
  const opacities = [100, 75, 50, 25, 0];

  const zIndexLayers = [
    "fixed",
    "backdrop",
    "menu_mobile",
    "modal",
    "backdrop_confirm",
    "confirm",
    "dropdown",
    "notification",
    "tooltip",
    "popup",
  ].map(name => ({
    className: `a_z_index_${ name }`,
    value: `var(--a_z_index_${ name })`,
  }));

  const codeFocus = `<div class="a_focus_ring a_p_3 a_border" tabindex="0">
  a_focus_ring
</div>
<div class="a_focus_ring_inset a_p_3 a_border" tabindex="0">
  a_focus_ring_inset
</div>`;

  const codeText = `<p class="a_text_muted">a_text_muted</p>
<p class="a_text_emphasis">a_text_emphasis</p>`;

  const codeOpacity = opacities.map(value => `<div class="a_opacity_${ value } a_bg_primary a_p_2">a_opacity_${ value }</div>`).join("\n");

  const codeOrder = `<div class="a_d_flex a_gap_2">
  <div class="a_order_last">1: a_order_last</div>
  <div class="a_order_2">2: a_order_2</div>
  <div class="a_order_first">3: a_order_first</div>
  <div class="a_order_1">4: a_order_1</div>
</div>

<!-- only on mobile: the last element is shown first -->
<div class="a_order_first_mobile">...</div>`;

  const codeZIndex = `<div class="a_position_fixed a_z_index_popup">...</div>

<!-- local stacking inside a component -->
<div class="a_position_relative a_z_index_1">...</div>`;

  const codePrint = `<nav class="a_print_none">...</nav>
<div class="a_d_none a_print_block">Printed on ...</div>`;

  return {
    codeFocus,
    codeOpacity,
    codeOrder,
    codePrint,
    codeText,
    codeZIndex,
    opacities,
    zIndexLayers,
  };
}
