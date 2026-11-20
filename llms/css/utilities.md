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
