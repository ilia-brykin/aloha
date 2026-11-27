# Tile

The class `a_tile` is a box on the surface with a border and rounded corners, e.g. for a summary, a dashboard widget or an item in a list of results. It is CSS only, the parts `a_tile__header`, `a_tile__body`, `a_tile__footer` are optional.

## Basic

`a_tile` with `a_tile__body`. The tile is a flex column, so `a_tile__body` fills the free height.

```html
<div class="a_tile">
  <div class="a_tile__body">
    A tile groups related content on the surface.
  </div>
</div>
```

## Header and footer

`a_tile__header` and `a_tile__footer` get a subtle background and a line to the body. Use a heading of the right level (`h2` … `h6`) in the header, so the structure of the page stays correct for screen readers.

```html
<div class="a_tile">
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
</div>
```

## Clickable tile

With `a_stretched_link` on the link the whole tile is clickable, `a_bg_{color}_subtle_hover` highlights it on hover. Keyboard and screen reader users still get one link with a clear text. Other buttons in the tile need `a_position_relative` and `a_z_index_2`.

```html
<div class="a_tile a_bg_primary_subtle_hover">
  <div class="a_tile__body">
    <h3 class="a_fs_5">
      <a class="a_stretched_link" href="/projects/1">Project Aloha</a>
    </h3>
    <p>The whole tile is clickable.</p>
  </div>
</div>
```

## Colors, shadow and border

The tile is changed with the utility classes: border color (`a_border_{color}`, `a_border_{color}_subtle`), shadow (`a_shadow_sm` / `_md` / `_lg`), line style (`a_border_style_dashed`). The defaults and the corner radius are set with the CSS variables below.

```html
<div class="a_tile a_border_primary_subtle">...</div>
<div class="a_tile a_border_danger">...</div>
<div class="a_tile a_shadow_md a_border_0">...</div>
<div class="a_tile a_border_style_dashed">...</div>
```

## Tiles in a grid

Tiles in `a_columns`. With `a_height_100` all tiles of a row get the same height, `a_columns_count_1_mobile` shows one tile per row on mobile devices.

```html
<div class="a_columns a_columns_count_3 a_columns_count_1_mobile">
  <div class="a_column a_column_1">
    <div class="a_tile a_height_100">...</div>
  </div>
  <div class="a_column a_column_1">
    <div class="a_tile a_height_100">...</div>
  </div>
  <div class="a_column a_column_1">
    <div class="a_tile a_height_100">...</div>
  </div>
</div>
```

## CSS variables (`scss/utils/tile.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_tile_padding_x` |  | Horizontal padding of all parts. |
| `--a_tile_padding_y` |  | Vertical padding of the body. |
| `--a_tile_header_padding_y` |  | Vertical padding of the header and the footer. |
| `--a_tile_color` |  | Text color. |
| `--a_tile_bg` |  | Background. |
| `--a_tile_border_width` |  | Width of the border and of the lines below the header and above the footer. |
| `--a_tile_border_color` |  | Border color. The classes .a_border_{color} and .a_border_{color}_subtle also work. |
| `--a_tile_border_radius` |  | Corner radius. |
| `--a_tile_shadow` |  | Shadow. The classes .a_shadow_sm / _md / _lg also work. |
| `--a_tile_header_bg` |  | Background of the header and the footer. |
| `--a_tile_header_font_weight` |  | Font weight of the header. |
