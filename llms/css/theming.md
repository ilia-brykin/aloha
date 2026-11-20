# Theming

All styles of **aloha-vue** are configured with **CSS** custom properties (tokens). They change at runtime, without rebuilding **SCSS**.

- **Base tokens** – the few values a project usually changes: colors as hue / saturation / lightness, gray tint, `--a_radius`, focus ring widths, `--a_density`.
- **Derived tokens** – calculated from the base tokens: hover, active, subtle and text variants of each color, gray scale, surfaces, all radii, spacing, focus ring. You never have to define them, but you can override each one.
- **Component tokens** – `--a_btn_*`, `--a_table_*`, … They reference the derived tokens and allow fine tuning of one component.

## Quick start

Define the base tokens in your own **CSS**. Theme colors: `primary`, `secondary`, `tertiary`, `success`, `info`, `warning`, `danger`. Each color has `--a__h`, `_s` and `_l`.

```css
:root {
  /* brand color as hue / saturation / lightness */
  --a_primary_h: 201;
  --a_primary_s: 92%;
  --a_primary_l: 36%;

  /* gray scale tint */
  --a_gray_h: 228;
  --a_gray_s: 14%;

  /* one radius, all others are derived */
  --a_radius: .5rem;
}

/* Browsers with color-mix(): a single color is enough for hover, active
   and the subtle variants. Text contrast (_contrast, _text, _text_emphasis)
   is still calculated from --a_primary_h / _s / _l. */
.a_theme.my_brand {
  --a_color_primary: #e60000;
}
```

## Theme generator

Choose colors, radius, focus ring, theme and density. The preview updates immediately and the generated **CSS** can be copied into your project. The contrast column shows the ratio of the text color (white or black) on the chosen color; **WCAG AA** requires at least 4.5:1.

### Preview

This is an alert. All colors follow the base tokens.

This is an alert. All colors follow the base tokens.

Text field

### Generated CSS

```css
:root {
  --a_primary_h: 0;
  --a_primary_s: 0%;
  --a_primary_l: 0%;
  --a_primary_contrast_threshold: 101%;
  --a_secondary_h: 0;
  --a_secondary_s: 0%;
  --a_secondary_l: 0%;
  --a_secondary_contrast_threshold: 101%;
  --a_tertiary_h: 0;
  --a_tertiary_s: 0%;
  --a_tertiary_l: 0%;
  --a_tertiary_contrast_threshold: 101%;
  --a_success_h: 0;
  --a_success_s: 0%;
  --a_success_l: 0%;
  --a_success_contrast_threshold: 101%;
  --a_info_h: 0;
  --a_info_s: 0%;
  --a_info_l: 0%;
  --a_info_contrast_threshold: 101%;
  --a_warning_h: 0;
  --a_warning_s: 0%;
  --a_warning_l: 0%;
  --a_warning_contrast_threshold: 101%;
  --a_danger_h: 0;
  --a_danger_s: 0%;
  --a_danger_l: 0%;
  --a_danger_contrast_threshold: 101%;
  --a_gray_h: 0;
  --a_gray_s: 0%;
  --a_radius: 0.375rem;
  --a_focus_width_inside: 2px;
  --a_focus_width_outside: 2px;
}
```

## Dark theme

Set `data-a-theme` on `` or on any element. Only the tones and the gray scale change, all colors are recalculated. `auto` follows the operating system setting (`prefers-color-scheme`).

```html
<!-- always dark -->
<html data-a-theme="dark">

<!-- follows the operating system -->
<html data-a-theme="auto">
```

## Density

`data-a-density` scales control heights and paddings with `--a_density` (`compact` = 0.75, `comfortable` = 1.25). Font sizes stay the same.

```html
<html data-a-density="compact">
<!-- or -->
<html data-a-density="comfortable">
```

## Theme for a part of the page

Derived tokens are calculated on `:root`, on elements with the class `a_theme` and on elements with `data-a-theme` or `data-a-density`. To re-theme only a part of the page, put the base tokens on such an element.

```html
<section class="a_theme" style="--a_primary_h: 145; --a_primary_s: 63%; --a_primary_l: 29%;">
  <!-- all aloha components here use the green primary color -->
</section>

<div data-a-theme="dark">
  <!-- dark island inside a light page -->
</div>
```

## Focus ring

All components show a two-colored focus ring for keyboard focus (`:focus-visible`): an inner gap and an outer ring. Widths and colors can be overridden globally or on any element. In forced colors mode (Windows high contrast) a system outline is shown instead.

```css
:root {
  --a_focus_width_inside: 2px;
  --a_focus_width_outside: 3px;
  --a_focus_color_inside: var(--a_color_surface);
  --a_focus_color_outside: #6a1b9a;
}

/* only for one component */
.my_search .a_form_control {
  --a_focus_color_outside: var(--a_color_success);
}
```

## Component tokens

Every component describes its tokens at the end of its **SCSS** file inside `:where(…)`. They have no specificity, so a simple class selector in your **CSS** overrides them.

```css
/* all buttons */
.a_btn {
  --a_btn_border_radius: var(--a_border_radius_pill);
  --a_btn_font_weight: var(--a_font_weight_semibold);
}

/* one table */
.my_table.a_table__parent {
  --a_table_th_bg: var(--a_color_primary_bg_subtle);
}
```

## Cascade layers

All styles of **aloha-vue** are in cascade layers. **CSS** of your application that is not in a layer always wins, independent of specificity.

```css
@layer aloha.reset, aloha.tokens, aloha.base, aloha.components, aloha.utilities;

/* your CSS without a layer always wins, no !important needed */
.a_btn_primary {
  --a_btn_bg: rebeccapurple;
}
```

## Global tokens

The current values are read from the page. Derived color tokens exist for every theme color (`primary`, `secondary`, `tertiary`, `success`, `info`, `warning`, `danger`, `light`, `dark`); the table shows `primary` as an example.
