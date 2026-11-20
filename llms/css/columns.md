# Columns

## Basic columns

The **.a_columns** container distributes nested **.a_column** across the width. Without explicit widths, columns stretch evenly.

```html
<div class="a_columns">
  <div class="a_column">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center"><span lang="en">auto</span></div>
  </div>
  <div class="a_column">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center"><span lang="en">auto</span></div>
  </div>
  <div class="a_column">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center"><span lang="en">auto</span></div>
  </div>
  <div class="a_column">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center"><span lang="en">auto</span></div>
  </div>
</div>
```

## Grid and sizes

The **.a_columns_count_{n}** class sets the number of columns (1-12), enables wrapping, and defines the **--a_column_count** variable. Column width is set with **.a_column_{n}** and is calculated relative to the chosen count.

```html
<div class="a_columns a_columns_count_8 a_mb_4">
  <div class="a_column a_column_5">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">5/8</div>
  </div>
  <div class="a_column a_column_3">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">3/8</div>
  </div>
</div>
<div class="a_columns a_columns_count_7 a_mb_4">
  <div class="a_column a_column_2">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">2/7</div>
  </div>
  <div class="a_column a_column_2">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">2/7</div>
  </div>
  <div class="a_column a_column_3">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">3/7</div>
  </div>
</div>
<div class="a_columns a_columns_count_12 a_mb_4">
  <div class="a_column a_column_6">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">6/12</div>
  </div>
  <div class="a_column a_column_3">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">3/12</div>
  </div>
  <div class="a_column a_column_3">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">3/12</div>
  </div>
</div>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_4">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
  <div class="a_column a_column_4">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
  <div class="a_column a_column_4">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
</div>
```

## Column gaps

Gaps are set with **.a_columns_gap_x_{0-8}** and **.a_columns_gap_y_{0-8}**. By default both axes use 0.75rem.

```html
<p class="a_mb_2"><code class="a_color_danger">.a_columns_gap_x_0</code></p>
<div class="a_columns a_columns_count_12 a_columns_gap_x_0 a_mb_4">
  <div class="a_column a_column_4">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
  <div class="a_column a_column_4">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
  <div class="a_column a_column_4">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
</div>
<p class="a_mb_2"><code class="a_color_danger">.a_columns_gap_x_6</code> <code class="a_color_danger">.a_columns_gap_y_6</code></p>
<div class="a_columns a_columns_count_12 a_columns_gap_x_6 a_columns_gap_y_6">
  <div class="a_column a_column_4">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
  <div class="a_column a_column_4">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
  <div class="a_column a_column_4">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
  <div class="a_column a_column_4">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
  <div class="a_column a_column_4">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
  <div class="a_column a_column_4">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
</div>
```

## Offsets

Left offset: **.a_column_offset_{n}**, right offset: **.a_column_offset_right_{n}**, where **n** is 0 to 11.

```html
<p class="a_mb_2"><code class="a_color_danger">.a_column_offset_2</code></p>
<div class="a_columns a_columns_count_12 a_mb_4">
  <div class="a_column a_column_4 a_column_offset_2">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">4/12 + <span lang="en">offset</span> 2</div>
  </div>
  <div class="a_column a_column_4">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
</div>
<p class="a_mb_2"><code class="a_color_danger">.a_column_offset_right_2</code></p>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_4">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center">4/12</div>
  </div>
  <div class="a_column a_column_4 a_column_offset_right_2">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center">4/12 + <span lang="en">offset</span> <span lang="en">right</span> 2</div>
  </div>
</div>
```

## Responsive classes

Add the suffixes **_mobile**, **_tablet**, **_touch**, **_desktop**, **_widescreen**, **_fullhd**, **_large** to **.a_columns_count_***, **.a_columns_gap_***, **.a_column_***, **.a_column_offset_***. Breakpoints: mobile <= 768px, tablet 769-1023px, touch <= 1023px, desktop 1024-1215px, widescreen 1216-1407px, fullhd 1408-1599px, large >= 1600px.

```html
<p class="a_mb_2">
  <code class="a_color_danger">.a_column_12_mobile</code>
  <code class="a_color_danger">.a_column_6_tablet</code>
  <code class="a_color_danger">.a_column_4_desktop</code>
</p>
<div class="a_columns a_columns_count_12">
  <div class="a_column a_column_12_mobile a_column_6_tablet a_column_4_desktop">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center"><span lang="en">mobile</span> 12 / <span lang="en">tablet</span> 6 / <span lang="en">desktop</span> 4</div>
  </div>
  <div class="a_column a_column_12_mobile a_column_6_tablet a_column_4_desktop">
    <div class="a_bg_gray_300 a_height_6 a_p_2 a_text_center"><span lang="en">mobile</span> 12 / <span lang="en">tablet</span> 6 / <span lang="en">desktop</span> 4</div>
  </div>
  <div class="a_column a_column_12_mobile a_column_6_tablet a_column_4_desktop">
    <div class="a_bg_gray_200 a_height_6 a_p_2 a_text_center"><span lang="en">mobile</span> 12 / <span lang="en">tablet</span> 6 / <span lang="en">desktop</span> 4</div>
  </div>
</div>
```
