export default function CodeAPI() {
  const opacities = [100, 75, 50, 25, 0];
  const shadows = ["none", "sm", "md", "lg"];
  const cursors = ["pointer", "default", "not_allowed", "move"];
  const ratios = ["1x1", "4x3", "16x9", "21x9"];
  const objectFits = ["cover", "contain", "fill", "none", "scale_down"];

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

  const codeStack = `<div class="a_vstack a_gap_2">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<div class="a_hstack a_gap_2">
  <div>1</div>
  <div>2</div>
  <div class="a_ml_auto">a_ml_auto</div>
</div>`;

  const codeSizing = `<div class="a_width_25">a_width_25</div>
<div class="a_width_50">a_width_50</div>
<div class="a_max_width_400px">a_max_width_400px</div>

<!-- a_min_width_0: the flex item can shrink, the text is truncated -->
<div class="a_hstack a_gap_2">
  <div class="a_flex_shrink_0">Label</div>
  <div class="a_min_width_0 a_text_truncate">A long text ...</div>
</div>

<!-- full height of the visible area, also on mobile with browser bars -->
<div class="a_min_viewport_height_100dvh">...</div>

<!-- only on mobile -->
<div class="a_width_100_mobile">...</div>`;

  const codeRatio = ratios.map(value => `<div class="a_ratio_${ value }">a_ratio_${ value }</div>`).join("\n") + `

<iframe class="a_ratio_16x9 a_width_100" src="..." title="Video"></iframe>`;

  const codeObjectFit = objectFits.map(value => `<img class="a_object_fit_${ value }" src="image.png" alt="" style="width: 10rem; height: 6rem;">`).join("\n");

  const codeStretchedLink = `<div class="a_position_relative a_border a_p_3 a_bg_primary_subtle_hover">
  <p>The whole card is clickable.</p>
  <a class="a_stretched_link" href="/details">a_stretched_link</a>
</div>`;

  const codeHover = `<a class="a_link_muted" href="#">a_link_muted</a>

<button class="a_btn a_bg_primary a_bg_primary_hover a_color_white" type="button">
  a_bg_primary_hover
</button>

<div class="a_bg_primary_subtle_hover" tabindex="0">a_bg_primary_subtle_hover</div>`;

  return {
    codeCursor,
    codeFocus,
    codeHover,
    codeObjectFit,
    codeOpacity,
    codeOrder,
    codePointerEvents,
    codePrint,
    codeRatio,
    codeRoundedCircle,
    codeShadow,
    codeSizing,
    codeStack,
    codeStretchedLink,
    codeText,
    codeTextSelect,
    codeVisibility,
    codeZIndex,
    cursors,
    objectFits,
    opacities,
    ratios,
    shadows,
    zIndexLayers,
  };
}
