export default function CodeAPI() {
  const opacities = [100, 75, 50, 25, 0];
  const shadows = ["none", "sm", "md", "lg"];
  const cursors = ["pointer", "default", "not_allowed", "move"];

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

  const codeShadow = shadows.map(value => `<div class="a_shadow_${ value } a_p_3">a_shadow_${ value }</div>`).join("\n");

  const codeRoundedCircle = `<img class="a_rounded_circle" src="avatar.png" alt="" width="48" height="48">
<span class="a_rounded_circle a_bg_success a_d_inline_block" style="width: .75rem; height: .75rem;"></span>`;

  const codeVisibility = `<!-- the element is hidden, but keeps its place -->
<div class="a_invisible">...</div>

<!-- the element is hidden and takes no place -->
<div class="a_d_none">...</div>`;

  const codeCursor = cursors.map(value => `<div class="a_cursor_${ value }">a_cursor_${ value }</div>`).join("\n");

  const codePointerEvents = `<a class="a_pointer_events_none" href="#" tabindex="-1" aria-disabled="true">a_pointer_events_none</a>

<div class="a_pointer_events_none">
  <a class="a_pointer_events_auto" href="#">a_pointer_events_auto</a>
</div>`;

  const codeTextSelect = `<span class="a_text_select_all a_text_monospace">3f9a1c7e-42b0-4d1e-9c55</span>
<span class="a_text_select_none">Text</span>`;

  const codePrint = `<nav class="a_print_none">...</nav>
<div class="a_d_none a_print_block">Printed on ...</div>`;

  return {
    codeCursor,
    codeFocus,
    codeOpacity,
    codeOrder,
    codePointerEvents,
    codePrint,
    codeRoundedCircle,
    codeShadow,
    codeText,
    codeTextSelect,
    codeVisibility,
    codeZIndex,
    cursors,
    opacities,
    shadows,
    zIndexLayers,
  };
}
