# Utilities

## Focus ring

The two-colored focus ring of the components for own focusable elements, e.g. a card with `tabindex="0"`. It is shown for keyboard focus only and is configured with the focus tokens.

```html
<div class="a_focus_ring a_p_3 a_border" tabindex="0">
  a_focus_ring
</div>
<div class="a_focus_ring_inset a_p_3 a_border" tabindex="0">
  a_focus_ring_inset
</div>
```

## Text color

Secondary and emphasized text that stays readable in the light and the dark theme.

```html
<p class="a_text_muted">a_text_muted</p>
<p class="a_text_emphasis">a_text_emphasis</p>
```

## Stack

`a_vstack` places the items one below the other (flex column), `a_hstack` next to each other and centers them vertically (flex row). The space between the items is set with `a_gap_*`, `a_ml_auto` pushes an item to the end.

```html
<div class="a_vstack a_gap_2">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<div class="a_hstack a_gap_2">
  <div>1</div>
  <div>2</div>
  <div class="a_ml_auto">a_ml_auto</div>
</div>
```

## Sizing

Classes set the width and the height: `a_width_*` / `a_height_*` (`1` … `6`, `25` … `100` %, `1rem` … `3rem`, `auto`; `a_width_50px` … `a_width_400px`), `a_max_width_*` (`300px` … `800px`, `25` … `100` %, `none`), `a_max_height_100`, `a_max_height_none`, `a_min_width_0`, `a_min_width_100`, `a_min_height_0`, `a_min_height_100`. `a_min_width_0` lets a flex item shrink below the width of its content, e.g. for `a_text_truncate`. `a_viewport_height_100` and `a_min_viewport_height_100` use `100vh`, the variants `_100dvh` use the visible height on mobile devices with browser bars. Suffixes `_mobile` … `_large` enable them at breakpoints.

```html
<div class="a_width_25">a_width_25</div>
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
<div class="a_width_100_mobile">...</div>
```

## Aspect ratio

Classes set the `aspect-ratio` of an element: `a_ratio_1x1`, `a_ratio_4x3`, `a_ratio_16x9`, `a_ratio_21x9`. The height follows the width, e.g. for videos, maps and image placeholders.

```html
<div class="a_ratio_1x1">a_ratio_1x1</div>
<div class="a_ratio_4x3">a_ratio_4x3</div>
<div class="a_ratio_16x9">a_ratio_16x9</div>
<div class="a_ratio_21x9">a_ratio_21x9</div>

<iframe class="a_ratio_16x9 a_width_100" src="..." title="Video"></iframe>
```

## Object fit

Classes set how an image or a video fills its box (`object-fit`): `a_object_fit_cover` fills the box and crops the image, `a_object_fit_contain` shows the whole image, `a_object_fit_fill` stretches it, `a_object_fit_none` keeps the original size, `a_object_fit_scale_down` uses `none` or `contain`, whichever is smaller.

```html
<img class="a_object_fit_cover" src="image.png" alt="" style="width: 10rem; height: 6rem;">
<img class="a_object_fit_contain" src="image.png" alt="" style="width: 10rem; height: 6rem;">
<img class="a_object_fit_fill" src="image.png" alt="" style="width: 10rem; height: 6rem;">
<img class="a_object_fit_none" src="image.png" alt="" style="width: 10rem; height: 6rem;">
<img class="a_object_fit_scale_down" src="image.png" alt="" style="width: 10rem; height: 6rem;">
```

## Stretched link

`a_stretched_link` makes the whole parent with `a_position_relative` clickable, e.g. a card. There is still only one link with a clear text for keyboard and screen reader users. Other links and buttons in the card need `a_position_relative` and `a_z_index_2` to stay clickable.

```html
<div class="a_position_relative a_border a_p_3 a_bg_primary_subtle_hover">
  <p>The whole card is clickable.</p>
  <a class="a_stretched_link" href="/details">a_stretched_link</a>
</div>
```

## Hover

Colors on hover and keyboard focus. `a_link_muted` is a link in the muted text color that gets the link color on hover. `a_bg_{color}_hover` sets the hover tone of a color, e.g. together with `a_bg_primary`. `a_bg_{color}_subtle_hover` sets the subtle background, e.g. for list items and cards. Colors: `primary`, `secondary`, `tertiary`, `success`, `info`, `warning`, `danger`, `light`, `dark`.

```html
<a class="a_link_muted" href="#">a_link_muted</a>

<button class="a_btn a_bg_primary a_bg_primary_hover a_color_white" type="button">
  a_bg_primary_hover
</button>

<div class="a_bg_primary_subtle_hover" tabindex="0">a_bg_primary_subtle_hover</div>
```

## Shadow

Classes set the shadow from the `--a_shadow_*` tokens: `a_shadow_sm`, `a_shadow_md`, `a_shadow_lg`. `a_shadow_none` removes a shadow. The shadows are adapted for the dark theme.

```html
<div class="a_shadow_none a_p_3">a_shadow_none</div>
<div class="a_shadow_sm a_p_3">a_shadow_sm</div>
<div class="a_shadow_md a_p_3">a_shadow_md</div>
<div class="a_shadow_lg a_p_3">a_shadow_lg</div>
```

## Circle

`a_rounded_circle` makes a square element round, e.g. an avatar or a status dot.

```html
<img class="a_rounded_circle" src="avatar.png" alt="" width="48" height="48">
<span class="a_rounded_circle a_bg_success a_d_inline_block" style="width: .75rem; height: .75rem;"></span>
```

## Visibility

`a_invisible` hides an element, but it keeps its place in the layout, unlike `a_d_none`. `a_visible` shows it again. A hidden element is also hidden for screen readers.

```html
<!-- the element is hidden, but keeps its place -->
<div class="a_invisible">...</div>

<!-- the element is hidden and takes no place -->
<div class="a_d_none">...</div>
```

## Cursor

Classes set the mouse `cursor`: `a_cursor_pointer`, `a_cursor_default`, `a_cursor_not_allowed`, `a_cursor_move`. Hover over the elements.

```html
<div class="a_cursor_pointer">a_cursor_pointer</div>
<div class="a_cursor_default">a_cursor_default</div>
<div class="a_cursor_not_allowed">a_cursor_not_allowed</div>
<div class="a_cursor_move">a_cursor_move</div>
```

## Pointer events

`a_pointer_events_none` makes an element ignore the mouse and touch, `a_pointer_events_auto` turns them on again for a child element. The keyboard still works, so also set `tabindex="-1"` and `aria-disabled` for a disabled link.

```html
<a class="a_pointer_events_none" href="#" tabindex="-1" aria-disabled="true">a_pointer_events_none</a>

<div class="a_pointer_events_none">
  <a class="a_pointer_events_auto" href="#">a_pointer_events_auto</a>
</div>
```

## Text selection

With `a_text_select_all` one click selects the whole text, e.g. an ID or a token to copy. `a_text_select_none` prevents selecting the text.

```html
<span class="a_text_select_all a_text_monospace">3f9a1c7e-42b0-4d1e-9c55</span>
<span class="a_text_select_none">Text</span>
```

## Opacity

Classes set `opacity` to 0, 25, 50, 75 or 100 %.

```html
<div class="a_opacity_100 a_bg_primary a_p_2">a_opacity_100</div>
<div class="a_opacity_75 a_bg_primary a_p_2">a_opacity_75</div>
<div class="a_opacity_50 a_bg_primary a_p_2">a_opacity_50</div>
<div class="a_opacity_25 a_bg_primary a_p_2">a_opacity_25</div>
<div class="a_opacity_0 a_bg_primary a_p_2">a_opacity_0</div>
```

## Order

Classes set the `order` of flex and grid items: `a_order_first` (−1), `a_order_0` … `a_order_5`, `a_order_last` (6). Suffixes `_mobile` … `_large` enable them at breakpoints.

```html
<div class="a_d_flex a_gap_2">
  <div class="a_order_last">1: a_order_last</div>
  <div class="a_order_2">2: a_order_2</div>
  <div class="a_order_first">3: a_order_first</div>
  <div class="a_order_1">4: a_order_1</div>
</div>

<!-- only on mobile: the last element is shown first -->
<div class="a_order_first_mobile">...</div>
```

## Z-index

Global layers use the `--a_z_index_*` tokens, so own overlays stay in the right order with modals, dropdowns and popups.

```html
<div class="a_position_fixed a_z_index_popup">...</div>

<!-- local stacking inside a component -->
<div class="a_position_relative a_z_index_1">...</div>
```

## Print

`a_print_none` hides an element when printing, `a_print_block` shows it only in print (together with `a_d_none`).

```html
<nav class="a_print_none">...</nav>
<div class="a_d_none a_print_block">Printed on ...</div>
```
