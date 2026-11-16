export default function CodeAPI() {
  const codeQuickStart = `:root {
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
}`;

  const codeDarkTheme = `<!-- always dark -->
<html data-a-theme="dark">

<!-- follows the operating system -->
<html data-a-theme="auto">`;

  const codeDensity = `<html data-a-density="compact">
<!-- or -->
<html data-a-density="comfortable">`;

  const codeScoped = `<section class="a_theme" style="--a_primary_h: 145; --a_primary_s: 63%; --a_primary_l: 29%;">
  <!-- all aloha components here use the green primary color -->
</section>

<div data-a-theme="dark">
  <!-- dark island inside a light page -->
</div>`;

  const codeFocus = `:root {
  --a_focus_width_inside: 2px;
  --a_focus_width_outside: 3px;
  --a_focus_color_inside: var(--a_color_surface);
  --a_focus_color_outside: #6a1b9a;
}

/* only for one component */
.my_search .a_form_control {
  --a_focus_color_outside: var(--a_color_success);
}`;

  const codeComponent = `/* all buttons */
.a_btn {
  --a_btn_border_radius: var(--a_border_radius_pill);
  --a_btn_font_weight: var(--a_font_weight_semibold);
}

/* one table */
.my_table.a_table__parent {
  --a_table_th_bg: var(--a_color_primary_bg_subtle);
}`;

  const codeLayers = `@layer aloha.reset, aloha.tokens, aloha.base, aloha.components, aloha.utilities;

/* your CSS without a layer always wins, no !important needed */
.a_btn_primary {
  --a_btn_bg: rebeccapurple;
}`;

  return {
    codeComponent,
    codeDarkTheme,
    codeDensity,
    codeFocus,
    codeLayers,
    codeQuickStart,
    codeScoped,
  };
}
