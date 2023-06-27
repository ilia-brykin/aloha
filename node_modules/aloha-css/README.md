# ALOHA - CSS FRAMEWORK #

## Display `display` ##
+ .a_d_inline
+ .a_d_inline_block
+ .a_d_block
+ .a_d_grid
+ .a_d_table
+ .a_d_table_cell
+ .a_d_table_row
+ .a_d_flex
+ .a_d_inline_flex
+ .a_d_none

## Grid ##
+ `.a_columns` -> container
+ `.a_column` -> element
```
<div class="a_columns">
  <div class="a_column">
    First column
  </div>
  <div class="a_column">
    Second column
  </div>
  <div class="a_column">
    Third column
  </div>
  <div class="a_column">
    Fourth column
  </div>
</div>
```

### Breakpoints ####
+ mobile `(max-width: 768px)`
+ tablet `(min-width: 769px) and (max-width: 1023px)`
+ touch `(max-width: 1023px)`
+ desktop `(min-width: 1024px) and (max-width: 1215px)`
+ widescreen `(min-width: 1216px) and (max-width: 1407px)`
+ fullhd `(min-width: 1408px)`


### Columns gap ###
+ .a_columns_gab_1 -> `0.25rem`
+ .a_columns_gab_2 -> `0.5rem`
+ .a_columns_gab_3 -> `0.75rem`
+ .a_columns_gab_4 -> `1rem`
+ .a_columns_gab_5 -> `1.25rem`
+ .a_columns_gab_6 -> `1.5rem`
+ .a_columns_gab_7 -> `1.75rem`
+ .a_columns_gab_8 -> `2rem`

#### With breakpoints ####
+ .a_columns_gab_1_mobile
+ .a_columns_gab_1_tablet
+ .a_columns_gab_1_touch
+ .a_columns_gab_1_desktop
+ .a_columns_gab_1_widescreen
+ .a_columns_gab_1_fullhd
+ ...
+ .a_columns_gab_8_mobile
+ .a_columns_gab_8_tablet
+ .a_columns_gab_8_touch
+ .a_columns_gab_8_desktop
+ .a_columns_gab_8_widescreen
+ .a_columns_gab_8_fullhd

```
<div class="a_columns a_columns_gab_6">
  <div class="a_column">
    First column
  </div>
  <div class="a_column">
    Second column
  </div>
  <div class="a_column">
    Third column
  </div>
  <div class="a_column">
    Fourth column
  </div>
</div>
```

### Column sizes ###
#### for `.a_columns` ####
+ .a_columns_count_1 -> `--column_count: 1;`
+ .a_columns_count_2 -> `--column_count: 2;`
+ .a_columns_count_3 -> `--column_count: 3;`
+ .a_columns_count_4 -> `--column_count: 4;`
+ .a_columns_count_5 -> `--column_count: 5;`
+ .a_columns_count_6 -> `--column_count: 6;`
+ .a_columns_count_7 -> `--column_count: 7;`
+ .a_columns_count_8 -> `--column_count: 8;`
+ .a_columns_count_9 -> `--column_count: 9;`
+ .a_columns_count_10 -> `--column_count: 10;`
+ .a_columns_count_11 -> `--column_count: 11;`
+ .a_columns_count_12 -> `--column_count: 12;`

#### With breakpoints ####
+ .a_columns_count_1_mobile
+ .a_columns_count_1_tablet
+ .a_columns_count_1_touch
+ .a_columns_count_1_desktop
+ .a_columns_count_1_widescreen
+ .a_columns_count_1_fullhd
+ ...
+ .a_columns_count_12_mobile
+ .a_columns_count_12_tablet
+ .a_columns_count_12_touch
+ .a_columns_count_12_desktop
+ .a_columns_count_12_widescreen
+ .a_columns_count_12_fullhd


#### for `.a_column` ####
```
width: calc(100% / var(--a_column_count) * 8);
```
+ .a_column_1
+ .a_column_2
+ .a_column_3
+ .a_column_4
+ .a_column_5
+ .a_column_6
+ .a_column_7
+ .a_column_8
+ .a_column_9
+ .a_column_10
+ .a_column_11
+ .a_column_12

#### With breakpoints ####
+ .a_column_1_mobile
+ .a_column_1_tablet
+ .a_column_1_touch
+ .a_column_1_desktop
+ .a_column_1_widescreen
+ .a_column_1_fullhd
+ ...
+ .a_column_12_mobile
+ .a_column_12_tablet
+ .a_column_12_touch
+ .a_column_12_desktop
+ .a_column_12_widescreen
+ .a_column_12_fullhd

#### Offset ####
```
margin-left: calc(100% / var(--a_column_count) * 1);
```
+ .a_column_offset_1
+ .a_column_offset_2
+ .a_column_offset_3
+ .a_column_offset_4
+ .a_column_offset_5
+ .a_column_offset_6
+ .a_column_offset_7
+ .a_column_offset_8
+ .a_column_offset_9
+ .a_column_offset_10
+ .a_column_offset_11

#### With breakpoints ####
+ .a_column_offset_1_mobile
+ .a_column_offset_1_tablet
+ .a_column_offset_1_touch
+ .a_column_offset_1_desktop
+ .a_column_offset_1_widescreen
+ .a_column_offset_1_fullhd
+ ...
+ .a_column_offset_11_mobile
+ .a_column_offset_11_tablet
+ .a_column_offset_11_touch
+ .a_column_offset_11_desktop
+ .a_column_offset_11_widescreen
+ .a_column_offset_11_fullhd

## Colors ##

### Variables ###
+ --a_color_primary: #0d6efd;
+ --a_color_secondary: #6c757d;
+ --a_color_tertiary: #da6c8e;
+ --a_color_text: #212529;
+ --a_color_info: #0DCAF0FF;
+ --a_color_success: #198754FF;
+ --a_color_warning: #FFC107FF;
+ --a_color_danger: #DC3545FF;
+ --a_color_link: blue;
+ --a_color_white: #fff;
+ --a_color_black: #000;
+ --a_color_gray_100: #f8f9fa;
+ --a_color_gray_200: #e9ecef;
+ --a_color_gray_300: #dee2e6;
+ --a_color_gray_400: #ced4da;
+ --a_color_gray_500: #adb5bd;
+ --a_color_gray_600: #6c757d;
+ --a_color_gray_700: #495057;
+ --a_color_gray_800: #343a40;
+ --a_color_gray_900: #212529;

### Color `color` ###
+ .a_color_primary
+ .a_color_secondary
+ .a_color_tertiary
+ .a_color_text
+ .a_color_info
+ .a_color_success
+ .a_color_warning
+ .a_color_danger
+ .a_color_link
+ .a_color_white
+ .a_color_black
+ .a_color_gray_100
+ .a_color_gray_200
+ .a_color_gray_300
+ .a_color_gray_400
+ .a_color_gray_500
+ .a_color_gray_600
+ .a_color_gray_700
+ .a_color_gray_800
+ .a_color_gray_900

### Background `background-color` ###
+ .a_bg_primary
+ .a_bg_secondary
+ .a_bg_tertiary
+ .a_bg_text
+ .a_bg_info
+ .a_bg_success
+ .a_bg_warning
+ .a_bg_danger
+ .a_bg_link
+ .a_bg_white
+ .a_bg_black
+ .a_bg_gray_100
+ .a_bg_gray_200
+ .a_bg_gray_300
+ .a_bg_gray_400
+ .a_bg_gray_500
+ .a_bg_gray_600
+ .a_bg_gray_700
+ .a_bg_gray_800
+ .a_bg_gray_900

## Display flex ##

### Direction `flex-direction` ###
+ a_flex_row -> `row`
+ a_flex_column -> `colum`
+ a_flex_row_reverse -> `row-reverse`
+ a_flex_column_reverse -> `column-reverse`

### Justify content `justify-content` ###
+ .a_justify_content_start -> `flex-start`
+ .a_justify_content_end -> `flex-end`
+ .a_justify_content_center -> `center`
+ .a_justify_content_between -> `space-between`
+ .a_justify_content_around -> `space-around`
+ .a_justify_content_evenly -> `space-evenly`

### Align items `align-items` ###
+ .a_align_items_start -> `flex-start`
+ .a_align_items_end -> `flex-end`
+ .a_align_items_center -> `center`
+ .a_align_items_baseline -> `baseline`
+ .a_align_items_stretch -> `stretch`

### Align self `align-self` ###
+ .a_align_self_auto -> `auto`
+ .a_align_self_start -> `flex-start`
+ .a_align_self_end -> `flex-end`
+ .a_align_self_center -> `center`
+ .a_align_self_baseline -> `baseline`
+ .a_align_self_stretch -> `stretch`

### Wrap `flex-wrap` ###
+ .a_flex_wrap -> `wrap`
+ .a_flex_nowrap -> `nowrap`
+ .a_flex_wrap_reverse -> `wrap-reverse`


### Align content `align-content` ###
+ .a_align_content_start -> `flex-start`
+ .a_align_content_end -> `flex-end`
+ .a_align_content_center -> `center`
+ .a_align_content_between -> `space-between`
+ .a_align_content_around -> `space-around`
+ .a_align_content_stretch -> `stretch`

### Fill ###
+ .a_flex_fill -> `flex: 1 1 auto`

### Grow and shrink ###
+ .a_flex_grow_0 -> `flex-grow: 0`
+ .a_flex_grow_1 -> `flex-grow: 1`
+ .a_flex_shrink_0 -> `flex-shrink: 0`
+ .a_flex_shrink_1 -> `flex-shrink: 1`

## Text ##

### Alignment `text-align` ###
+ .a_text_left -> `left`
+ .a_text_center -> `center`
+ .a_text_right -> `right`

### Wrapping ###
+ .a_text_wrap -> `white-space: normal`
+ .a_text_nowrap -> `white-space: nowrap`
+ .a_text_break -> `word-wrap: break-word; word-break: break-word; hyphens: auto`
+ .a_text_wrap_hyphens -> `hyphens: auto`
+ .text_truncate -> `overflow: hidden; text-overflow: ellipsis; white-space: nowrap`

### Transform ###
+ .a_text_lowercase -> `text-transform: lowercase`
+ .a_text_uppercase -> `text-transform: uppercase`
+ .a_text_capitalize -> `text-transform: capitalize`
+ .a_text_underline -> `text-decoration: underline`
+ .a_text_italic -> `font-style: italic`
+ .a_text_bold -> `font-weight: 700`
+ .a_text_bolder -> `font-weight: bolder`
+ .a_text_semibold -> `font-weight: 600`
+ .a_text_light -> `font-weight: 300`
+ .a_text_lighter -> `font-weight: lighter`
+ .a_text_normal -> `font-style: normal; text-decoration: none; text-transform: none; font-weight: normal`

### Line height `line-height`
+ .a_line_height_1 -> `1`
+ .a_line_height_small -> `1.25`
+ .a_line_height_base -> `1.5`
+ .a_line_height_large -> `2`

### Font size `font-size` ###
+ .a_fs_1 -> `2.5rem`
+ .a_fs_2 -> `2rem`
+ .a_fs_3 -> `1.75rem`
+ .a_fs_4 -> `1.5rem`
+ .a_fs_5 -> `1.25rem`
+ .a_fs_6 -> `1rem`
+ .a_fs_7 -> `0.75rem`

## Overflow ##
+ .a_overflow_auto -> `overflow: auto`
+ .a_overflow_hidden -> `overflow: hidden`
+ .a_overflow_visible -> `overflow: visible`
+ .a_overflow_scroll -> `overflow: scroll`

### Overflow-X ###
+ .a_overflow_x_auto -> `overflow-x: auto`
+ .a_overflow_x_hidden -> `overflow-x: hidden`
+ .a_overflow_x_visible -> `overflow-x: visible`
+ .a_overflow_x_scroll -> `overflow-x: scroll`

### Overflow-Y ###
+ .a_overflow_y_auto -> `overflow-y: auto`
+ .a_overflow_y_hidden -> `overflow-y: hidden`
+ .a_overflow_y_visible -> `overflow-y: visible`
+ .a_overflow_y_scroll -> `overflow-y: scroll`

## Screen reader ##
+ .a_sr_only
+ .a_sr_only_focusable
```
<h2 class="a_sr_only">Info for screen readers</h2>
<a class="a_sr_only_focusable" href="#content">Skip to main content</a>
<div class="a_sr_only_focusable">A container with a <a href="#">focusable element</a>.</div>
```

## Position ##
### `position` ###
+ .a_position_static -> `static`
+ .a_position_relative -> `relative`
+ .a_position_absolute -> `absolute`
+ .a_position_absolute_all -> `position: absolute; top: 0; right: 0; bottom: 0; left: 0;`
+ .a_position_fixed -> `fixed`
+ .a_position_sticky -> `sticky`

### `top` ###
+ .a_top_0 -> `0`
+ .a_top_50 -> `50%`
+ .a_top_100 -> `100%`

### `bottom` ###
+ .a_bottom_0 -> `0`
+ .a_bottom_50 -> `50%`
+ .a_bottom_100 -> `100%`

### `left` ###
+ .a_start_0 -> `0`
+ .a_start_50 -> `50%`
+ .a_start_100 -> `100%`

### `right` ###
+ .a_end_0 -> `0`
+ .a_end_50 -> `50%`
+ .a_end_100 -> `100%`

### `transform: translate()` ###
+ .a_translate_middle -> `transform: translate(-50%, -50%)`
+ .a_translate_middle_x -> `transform: translateX(-50%)`
+ .a_translate_middle_y -> `transform: translateY(-50%)`

## List ##
+ .a_list_without_styles -> `padding-left: 0; list-style: none;`
```
<ul class="list-unstyled">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>  
```
+ .a_list_inline -> `padding-left: 0; list-style: none;`
+ .a_list_inline_item -> `display: inline-block; margin-right: 0.5rem;`
+ .a_list_inline_item_comma -> `:not(:last-child):after { content: ","; }`

### DL ###
+ .a_list_dl
+ .a_list_dl_dt_right

## List group ##
+ .a_list_group
+ .a_list_group__item
+ .a_list_group_gap

## Styles for `<body>` ##

## Buttons ##
+ .a_btn
+ .a_btn_primary
+ .a_btn_secondary
+ .a_btn_tertiary
+ .a_btn_success
+ .a_btn_danger
+ .a_btn_warning
+ .a_btn_info
+ .a_btn_link
+ .a_btn_light
+ .a_btn_dark
+ .a_btn_large
+ .a_btn_small
+ .a_btn_not_active
+ .a_btn_check

### Outline buttons ###
+ .a_btn_outline_primary
+ .a_btn_outline_secondary
+ .a_btn_outline_tertiary
+ .a_btn_outline_success
+ .a_btn_outline_info
+ .a_btn_outline_warning
+ .a_btn_outline_danger
+ .a_btn_outline_light
+ .a_btn_outline_dark
+ .a_btn_switch
+ .a_btn_switch_active

### Button close ###
+ .a_btn_close

## Buttons group ##
+ .a_btn_group
+ .a_btn_group_vertical
+ .a_btn_group_large
+ .a_btn_large

## Pagination ##
+ .a_pagination
+ .a_pagination__item
+ .a_pagination__item__link

## Float ##
+ .a_float_left
+ .a_float_right
+ .a_float_none

## Alert ##
+ .a_alert
+ .a_alert__parent
+ .a_alert__parent_closable
+ .a_alert__content
+ .alert__icon
+ .a_alert_primary
+ .a_alert_secondary
+ .a_alert_tertiary
+ .a_alert_success
+ .a_alert_info
+ .a_alert_warning
+ .a_alert_danger
+ .a_alert_light
+ .a_alert_dark

## Modal ##
+ .a_modal_open
+ .a_modal
+ .a_modal_confirm
+ .a_modal_show
+ .a_modal_dialog
+ .a_modal_content
+ .a_modal_dialog_scrollable
+ .a_modal_header
+ .a_modal_title
+ .a_modal_body
+ .a_modal_footer
+ .a_modal_small
+ .a_modal_large
+ .a_modal_xl
+ .a_modal_xxl
+ .a_modal_fullscreen

### backdrop
+ .a_backdrop
+ .a_backdrop_confirm
+ .a_backdrop_fade
+ .a_backdrop_show

## Notification ##
+ .a_notification_parent
+ .a_notification

## Checkbox and radio ##
+ .a_custom_control
+ .a_custom_radio
+ .a_custom_checkbox
+ .a_custom_control_input
+ .a_custom_control_label
+ .a_custom_control_label_width_auto
+ .a_custom_control_invalid

## Spinner ##
+ .a_spinner
+ .a_spinner_small
+ .a_spinner_large

## Sizing ##

### Width ###
+ .a_width_1 -> `0.25rem`
+ .a_width_2 -> `0.5rem`
+ .a_width_3 -> `0.75rem`
+ .a_width_4 -> `1rem`
+ .a_width_5 -> `1.5rem`
+ .a_width_6 -> `4rem`
+ .a_width_25 -> `25%`
+ .a_width_50 -> `50%`
+ .a_width_75 -> `75%`
+ .a_width_100 -> `100%`
+ .a_width_auto -> `auto`
+ .a_viewport_width_100 -> `100vw`

#### `max-width` ####
+ .a_max_width_100 -> `100%`

#### `min-width` ####
+ .a_min_viewport_width_100 -> `100vw`

### Height ###
+ .a_height_1 -> `0.25rem`
+ .a_height_2 -> `0.5rem`
+ .a_height_3 -> `0.75rem`
+ .a_height_4 -> `1rem`
+ .a_height_5 -> `1.5rem`
+ .a_height_6 -> `4rem`
+ .a_height_25 -> `25%`
+ .a_height_50 -> `50%`
+ .a_height_75 -> `75%`
+ .a_height_100 -> `100%`
+ .a_height_auto -> `auto`
+ .a_viewport_height_100 -> `100vw`

#### `max-height` ####
+ .a_max_height_100 -> `100%`

#### `min-height` ####
+ .a_min_viewport_height_100 -> `100vw`

## Acordion ##
+ .a_accordion
+ .a_accordion__button
+ .a_accordion__button_with_gap
+ .a_accordion__button_collapsed
+ .a_accordion__button_has_not_caret
+ .a_accordion__header
+ .a_accordion__item
+ .a_accordion__item_with_gap
+ .a_accordion__body
+ .a_accordion__collapse_box
+ .a_accordion__collapse_box_show

## Progress ##
+ .a_progress
+ .a_progress_small
+ .a_progress_medium
+ .a_progress_large
+ .a_progress_revers
+ .a_progress__bar


## Dropdown ##
+ .a_dropdown
+ .a_dropdown__caret
+ .a_dropdown__menu
+ .a_dropdown__item
+ .a_dropdown__item_text
+ .a_dropdown__item_text
+ .a_dropdown__item_header 


## Tooltip ##
+ .a_tooltip__container
+ .a_tooltip__wrapper
+ .a_tooltip__arrow

## Badges ##
+ .a_badge
+ .a_pill_rounded

## Border Radius ##
```border-radius:```
+ .a_rounded_inherit
+ .a_rounded_top_inherit
+ .a_rounded_right_inherit
+ .a_rounded_bottom_inherit
+ .a_rounded_left_inherit
+ .a_rounded_top_left_inherit
+ .a_rounded_top_right_inherit
+ .a_rounded_bottom_right_inherit
+ .a_rounded_bottom_left_inherit
+ .a_rounded_0

## Margin ##
```margin```
+ .a_m_1 -> ```margin: 0.25rem```
+ .a_mt_1 -> ```margin-top: 0.25rem```
+ .a_mr_1 -> ```margin-right: 0.25rem```
+ .a_mb_1 -> ```margin-bottom: 0.25rem```
+ .a_ml_1 -> ```margin-left: 0.25rem```
+ .a_mx_1 -> ```margin-left: 0.25rem; margin-right: 0.25rem```
+ .a_my_1 -> ```margin-top: 0.25rem; margin-bottom: 0.25rem```
+ .a_m_2 -> ```margin: 0.5rem```
+ .a_mt_2 -> ```margin-top: 0.5rem```
+ .a_mr_2 -> ```margin-right: 0.5rem```
+ .a_mb_2 -> ```margin-bottom: 0.5rem```
+ .a_ml_2 -> ```margin-left: 0.5rem```
+ .a_mx_2 -> ```margin-left: 0.5rem; margin-right: 0.5rem```
+ .a_my_2 -> ```margin-top: 0.5rem; margin-bottom: 0.5rem```
+ .a_m_3 -> ```margin: 0.75rem```
+ .a_mt_3 -> ```margin-top: 0.75rem```
+ .a_mr_3 -> ```margin-right: 0.75rem```
+ .a_mb_3 -> ```margin-bottom: 0.75rem```
+ .a_ml_3 -> ```margin-left: 0.75rem```
+ .a_mx_3 -> ```margin-left: 0.75rem; margin-right: 0.75rem```
+ .a_my_3 -> ```margin-top: 0.75rem; margin-bottom: 0.75rem```
+ .a_m_4 -> ```margin: 1rem```
+ .a_mt_4 -> ```margin-top: 1rem```
+ .a_mr_4 -> ```margin-right: 1rem```
+ .a_mb_4 -> ```margin-bottom: 1rem```
+ .a_ml_4 -> ```margin-left: 1rem```
+ .a_mx_4 -> ```margin-left: 1rem; margin-right: 1rem```
+ .a_my_4 -> ```margin-top: 1rem; margin-bottom: 1rem```
+ .a_m_5 -> ```margin: 1.5rem```
+ .a_mt_5 -> ```margin-top: 1.5rem```
+ .a_mr_5 -> ```margin-right: 1.5rem```
+ .a_mb_5 -> ```margin-bottom: 1.5rem```
+ .a_ml_5 -> ```margin-left: 1.5rem```
+ .a_mx_5 -> ```margin-left: 1.5rem; margin-right: 1.5rem```
+ .a_my_5 -> ```margin-top: 1.5rem; margin-bottom: 1.5rem```
+ .a_m_6 -> ```margin: 3rem```
+ .a_mt_6 -> ```margin-top: 3rem```
+ .a_mr_6 -> ```margin-right: 3rem```
+ .a_mb_6 -> ```margin-bottom: 3rem```
+ .a_ml_6 -> ```margin-left: 3rem```
+ .a_mx_6 -> ```margin-left: 3rem; margin-right: 3rem```
+ .a_my_6 -> ```margin-top: 3rem; margin-bottom: 3rem```
+ .a_m_auto -> ```margin: auto```
+ .a_mt_auto -> ```margin-top: auto```
+ .a_mr_auto -> ```margin-right: auto```
+ .a_mb_auto -> ```margin-bottom: auto```
+ .a_ml_auto -> ```margin-left: auto```
+ .a_mx_auto -> ```margin-left: auto; margin-right: auto```
+ .a_my_auto -> ```margin-top: auto; margin-bottom: auto```
+ .a_m_0 -> ```margin: 0```
+ .a_mt_0 -> ```margin-top: 0```
+ .a_mr_0 -> ```margin-right: 0```
+ .a_mb_0 -> ```margin-bottom: 0```
+ .a_ml_0 -> ```margin-left: 0```
+ .a_mx_0 -> ```margin-left: 0; margin-right: 0```
+ .a_my_0 -> ```margin-top: 0; margin-bottom: 0```

## Padding ##
```padding```
+ .a_p_1 -> ```padding: 0.25rem```
+ .a_pt_1 -> ```padding-top: 0.25rem```
+ .a_pr_1 -> ```padding-right: 0.25rem```
+ .a_pb_1 -> ```padding-bottom: 0.25rem```
+ .a_pl_1 -> ```padding-left: 0.25rem```
+ .a_px_1 -> ```padding-left: 0.25rem; padding-right: 0.25rem```
+ .a_py_1 -> ```padding-top: 0.25rem; padding-bottom: 0.25rem```
+ .a_p_2 -> ```padding: 0.5rem```
+ .a_pt_2 -> ```padding-top: 0.5rem```
+ .a_pr_2 -> ```padding-right: 0.5rem```
+ .a_pb_2 -> ```padding-bottom: 0.5rem```
+ .a_pl_2 -> ```padding-left: 0.5rem```
+ .a_px_2 -> ```padding-left: 0.5rem; padding-right: 0.5rem```
+ .a_py_2 -> ```padding-top: 0.5rem; padding-bottom: 0.5rem```
+ .a_p_3 -> ```padding: 0.75rem```
+ .a_pt_3 -> ```padding-top: 0.75rem```
+ .a_pr_3 -> ```padding-right: 0.75rem```
+ .a_pb_3 -> ```padding-bottom: 0.75rem```
+ .a_pl_3 -> ```padding-left: 0.75rem```
+ .a_px_3 -> ```padding-left: 0.75rem; padding-right: 0.75rem```
+ .a_py_3 -> ```padding-top: 0.75rem; padding-bottom: 0.75rem```
+ .a_p_4 -> ```padding: 1rem```
+ .a_pt_4 -> ```padding-top: 1rem```
+ .a_pr_4 -> ```padding-right: 1rem```
+ .a_pb_4 -> ```padding-bottom: 1rem```
+ .a_pl_4 -> ```padding-left: 1rem```
+ .a_px_4 -> ```padding-left: 1rem; padding-right: 1rem```
+ .a_py_4 -> ```padding-top: 1rem; padding-bottom: 1rem```
+ .a_p_5 -> ```padding: 1.5rem```
+ .a_pt_5 -> ```padding-top: 1.5rem```
+ .a_pr_5 -> ```padding-right: 1.5rem```
+ .a_pb_5 -> ```padding-bottom: 1.5rem```
+ .a_pl_5 -> ```padding-left: 1.5rem```
+ .a_px_5 -> ```padding-left: 1.5rem; padding-right: 1.5rem```
+ .a_py_5 -> ```padding-top: 1.5rem; padding-bottom: 1.5rem```
+ .a_p_6 -> ```padding: 3rem```
+ .a_pt_6 -> ```padding-top: 3rem```
+ .a_pr_6 -> ```padding-right: 3rem```
+ .a_pb_6 -> ```padding-bottom: 3rem```
+ .a_pl_6 -> ```padding-left: 3rem```
+ .a_px_6 -> ```padding-left: 3rem; padding-right: 3rem```
+ .a_py_6 -> ```padding-top: 3rem; padding-bottom: 3rem```
+ .a_p_auto -> ```padding: auto```
+ .a_pt_auto -> ```padding-top: auto```
+ .a_pr_auto -> ```padding-right: auto```
+ .a_pb_auto -> ```padding-bottom: auto```
+ .a_pl_auto -> ```padding-left: auto```
+ .a_px_auto -> ```padding-left: auto; padding-right: auto```
+ .a_py_auto -> ```padding-top: auto; padding-bottom: auto```
+ .a_p_0 -> ```padding: 0```
+ .a_pt_0 -> ```padding-top: 0```
+ .a_pr_0 -> ```padding-right: 0```
+ .a_pb_0 -> ```padding-bottom: 0```
+ .a_pl_0 -> ```padding-left: 0```
+ .a_px_0 -> ```padding-left: 0; padding-right: 0```
+ .a_py_0 -> ```padding-top: 0; padding-bottom: 0```