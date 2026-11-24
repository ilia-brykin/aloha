# Migration Guide from aloha-vue 2.x to 3.0.x

Version 3.0 changes the styles: all colors, sizes and the focus ring are configured with **CSS** custom properties, the components got a more modern look and are accessible by default. The **JavaScript API** of the components stays compatible, only some defaults changed: class names (section 3), icons (section 4) and accessibility (section 6). A description of the new system and a theme generator are on the page [Theming](../css/theming.md).

## 1. Configuration

- The **SCSS** configuration was removed: `$aloha-prefix`, all `$a_*` / `$a-*` variables (e.g. `$a_primary`, `$a_spacing_*`, `$a_sizing_*`, `$a_breakpoint_*`, `$a-wizard-*`, `$dp-default-color`, `$dp-primary-color`) and the modules `utils/color_utils`, `utils/funktions`, `utils/vars_global`, `utils/global_variables`, `utils/aloha_prefix`, `utils/utils`.
- Colors are configured as hue / saturation / lightness: `--a_primary_h`, `--a_primary_s`, `--a_primary_l` (the same for `secondary`, `tertiary`, `success`, `info`, `warning`, `danger`), the gray scale with `--a_gray_h` and `--a_gray_s`. All variants are derived.
- Radius: one base token `--a_radius`; `--a_border_radius_small`, `_large`, `_xl`, `_2xl` are derived.
- The default palette changed. All default colors reach **WCAG AA**.
- Breakpoints: `$a_breakpoint_mobile`, `_tablet`, `_desktop`, `_desktop_min`, `$a_breakpoints` are now `$mobile`, `$tablet`, `$desktop`, `$desktop_min`, `$all` in `aloha-vue/scss/utils/breakpoint` and no longer `!default`.

```scss
// 2.x: SCSS variables
@use "aloha-vue/scss/utils/color_utils" with (
  $a_primary: #0775b0,
  $a_border_radius: .5rem,
);
```

```css
/* 3.x: CSS custom properties, no rebuild needed */
:root {
  --a_primary_h: 201;
  --a_primary_s: 92%;
  --a_primary_l: 36%;
  --a_radius: .5rem;
}
```

### Cascade layers

All styles are in the cascade layers `aloha.reset`, `aloha.tokens`, `aloha.base`, `aloha.components`, `aloha.utilities`. **CSS** of your application without a layer always wins. Overrides that needed `!important` or a high specificity in 2.x can be simplified.

### New

- Dark theme: `data-a-theme="dark | light | auto"`.
- Density: `data-a-density="compact | comfortable"`.
- Theme for a part of the page with the class `a_theme`.
- Two-colored focus ring for keyboard focus (`:focus-visible`), tokens `--a_focus_width_inside/_outside`, `--a_focus_color_inside/_outside`.
- The icon `AIconClose` is exported.
- In browsers with `color-mix()` it is enough to override `--a_color_primary` on `:root` or `.a_theme`: hover, active and the subtle variants follow. New global tokens `--a_color_surface_translucent`, `--a_z_index_popup`, `--a_shadow_edge_left/_right`.
- New utility classes: `a_focus_ring`, `a_focus_ring_inset`, `a_text_muted`, `a_text_emphasis`, `a_opacity_*`, `a_order_*`, `a_z_index_*`, `a_print_none`, `a_print_block` (page Utilities).
- `ATable`: prop `isStriped` for striped rows (default for all tables: `ATablePlugin` `propsDefault.isStriped`); rows selected with the checkbox get the class `a_table__row_selected`.
- `ARate` is a form element now (label, help text, errors, read-only, `AForm` with `type: "rate"`), can be used with the keyboard (slider) and has new props (thresholds, colors and icons per level, texts, score, `clearable`). Old props still work and are deprecated: `rating` → `max`, `halfIcon` → `allowHalf`, `icon` → `voidIcon`, `iconFill` → `icons`, `color` → `colors`, `size="big"` → `size="large"`, `hoveredColor` → `--a_rate_hover_fill_color`. A double click no longer removes the rating, use `clearable`.
- `AInputFile`: dropzone (`isDropzone`), checks of `accept`, `maxSize` and `maxFiles` with a list of the files that were not added (event `reject`), adding files (`isAppend`), removing files (event `remove`), file size, image preview (`isPreview`), upload status per file (`progress`, `status`, `errorText` in the model) and links (`url`). The default text of the button is translated now (before always «Dateien auswählen»).

## 2. CSS variables

### Removed

- `--a_color_*_rgb` – use `hsl()` with the base tokens (example below).
- `--a_btn_focus_shadow_rgb`, `--a_btn_focus_box_shadow` → `--a_focus_ring`.
- `--a_accordion_btn_focus_border_color`.
- `--a_select_menu_link_focus_color` → `--a_focus_ring_inset`.
- `--a_table_row_focus_shadow_size`, `--a_table_row_focus_shadow_color` → `--a_table_row_focus_shadow`.
- `--a_menu_focus_shadow_color`, `--a_menu_link_focus_size`, `--a_menu_search_link_focus_size` → `--a_menu_link_focus_box_shadow`.
- `--a_tabs_focus_color`, `--a_tabs_botom_hover_color`.
- `--a_wizard_step_focus_shadow_rgb`.
- `--a_btn_box_shadow`, `--a_btn_active_shadow` – buttons have no shadow anymore.
- `--a_btn_focus_color` → `--a_focus_color_outside`.
- `--a_custom_control_radio_input_checked_border_color`, `--a_custom_control_radio_input_checked_border_width` – the radio dot is drawn by a mask, its color is `--a_custom_control_input_checked_color`.
- `--a_progress_box_shadow`, `--a_gradient` – removed without replacement.
- `--a_color_link_50` → `--a_color_primary_50`.
- `--a_accordion_transition`, `--a_dropdown_spacer`, `--a_filters_top_form_width`, `--a_filters_top_label_padding_left`, `--a_menu_btn_toggle_top`, `--a_menu_btn_toggle_margin_left`, `--a_menu_mobile_btn_toggle_margin_left`, `--a_menu_mobile_btn_toggle_margin_top`, `--a_menu_mobile_z_index`, `--a_menu_close_opacity`, `--a_menu_panel_parent_offset`, `--a_select_close_hover_color`, `--a_select_placeholder_color`, `--a_table_draggable_color`, `--a_table_mobile_row_level_icon_width`, `--a_list_group_item_first_border_radius`, `--a_list_group_item_last_border_radius` – they had no effect in 2.x either.
- `--a_tooltip_box_shadow_color` → set the whole shadow with `--a_tooltip_box_shadow`.
- `--a_menu_link_selected_bg`, `--a_menu_link_selected_color` – removed together with the unused class `.a_menu__link_selected`.

```css
/* 2.x */
background-color: rgba(var(--a_color_primary_rgb), .5);

/* 3.x */
background-color: hsl(var(--a_primary_h) var(--a_primary_s) var(--a_primary_l) / .5);
```

### Renamed

2.x  3.x

 `--a__backdrop_bg`  `--a_backdrop_bg`

 `--a__backdrop_opacity`  `--a_backdrop_opacity`

 `--a__backdrop_zindex`  `--a_backdrop_z_index`

 `--a_alert_border-radius`  `--a_alert_border_radius`

 `--a_modal_zindex`  `--a_modal_z_index`

 `--a_flegend_invalid_color`  `--a_legend_invalid_color`

 `--a_rate_empty_color`  `--a_rate_void_color`

### Changed meaning

- `--a_color_focus` is the outer color of the focus ring (dark, contrast at least 3:1). In 2.x it was a light color that was also used as a background.
- `--a_switch_hover_focus_bg` is only the hover background.

## 3. Renamed classes

Classes without the prefix `a_` and size suffixes were unified. `a_element` is also the default of the prop `class` in `AElement`, `AButton` and `ALink`.

 2.x  3.x

 `.a_form_control_lg / _sm`  `.a_form_control_large / _small`

 `.a_pagination__parent_lg / _sm`  `.a_pagination__parent_large / _small`

 `.switch_button*`  `.a_switch*`

 `.aloha_btn*`  `.a_button*`

 `.aloha_element*`  `.a_element*`

 `.aloha_group_btn_dropdown`  `.a_group_btn_dropdown`

 `.pux_datepicker*`  `.a_datepicker*`

 `.pux_datepicker_range`  `.a_datepicker_range_mode`

 `.floating`  `.a_floating`

 `.ui_select_menu`  —

 `.a_menu__link_selected`  —

 `.a_rate_container`  `.a_rate`

 `.a_rate_icon, .el-rate__item`  `.a_rate__item`

 `.a_rate_icon_small / _medium / _big`  `.a_rate_small / — / .a_rate_large`

 `.a_decimal_rate_icon, .a_rate_decimal, .a_rate_icon_decimal`  `.a_rate__icon, .a_rate__item__fill`

 `.a_rate_score`  `.a_rate__score`

 `.a_rate_label`  `.a_rate__text`

 `.a_rate_icon_align`  —

 `.a_file__label`  `.a_input_file__button`

 `.a_file__input`  `.a_input_file__input`

### Changed classes

`a_gap_x_*` now sets the horizontal gap (`column-gap`), `a_gap_y_*` the vertical gap (`row-gap`). In 2.x they were swapped. Swap `a_gap_x_*` and `a_gap_y_*` in your templates.

### Renamed SCSS files

Only relevant if you import single files from `aloha-vue/scss`.

 2.x  3.x

 `scss/utils/acordion.scss`  `scss/utils/accordion.scss`

 `scss/components/AProgressCirle.scss`  `scss/components/AProgressCircle.scss`

 `scss/components/ARate.scss`  `scss/components/ui/ARate.scss`

## 4. Close button

`.a_btn_close` no longer draws the cross as a background image. Use it with an icon. `AModal`, `AAlert` and `ADatepicker` already do this. The default close icon of all components, `AFormElementBtnClear` (`icon`) and `AAlertPlugin` (`btnCloseIcon`) changed from `x-lg` to `AIconClose`.

```javascript
import {
  AButton,
  AIconClose,
} from "aloha-vue";

h(AButton, {
  class: "a_btn_close",
  iconLeft: AIconClose,
  textScreenReader: "_CLOSE_",
});
```

## 5. Visual changes

- Form controls are 40px high (depending on density), have a stronger border (contrast at least 3:1) and the focus ring.
- Outline and transparent buttons use the darker `_text_emphasis` text color. `.a_btn_switch_active` is a selected tile (light primary background with primary border).
- Tooltip: dark neutral background instead of primary. `--a_tooltip_bg: var(--a_color_primary)` restores the old look.
- Table: a frame with rounded corners around the table (`--a_table_border_*`; `borderType="innerBordered"` has no frame), a smaller semibold header in a muted color, sortable headers look like the header text instead of links, the sorted column has the primary text color instead of a background, the sort icons of unsorted columns are faded, more space in the cells (`--a_table_cell_padding_x` 0.75rem, `--a_table_cell_padding_y` 0.625rem), digits of the same width, gray hover, a light primary background for selected rows and for the row with an open preview (also the preview below the row) with a bar on the left, a shadow at the sticky actions column, the text of an empty table is centered and muted. The focus frame is only shown for keyboard focus. Every value is a CSS variable (see «CSS variables» on the ATable page).
- Tabs: underline indicator for the active tab. Menu: light primary background for the current item.
- Checkbox, radio, switch, select, datepicker, dropdown and modal: new shapes, shadows and radii from tokens.
- Wizard: contrast fixes, the warning step has black text.

## 6. Accessibility

The components now have accessible names and valid ARIA attributes by default. If your tests or styles depend on the markup, check these changes:

- New token `--a_color_<name>_text`: the theme color with enough contrast for text on the surface (lightness limited by `--a_tone_text_min_l` / `--a_tone_text_max_l`). Error texts (`--a_form_element_error_color`, `--a_custom_control_error_color`, `--a_fieldset_invalid_color`, `--a_switch_button_invalid_color`) and the texts of active and failed wizard steps use it, so they are darker in the light theme and lighter in the dark theme.
- `AElement`, `AButton`, `ALink`: if there is only an icon and a `title`, the title is also rendered as `a_sr_only` text.
- `ADropdown`: a toggle without text and title gets the screen reader text `_A_DROPDOWN_BUTTON_SCREEN_READER_`.
- `ASelect`: the remove button of a selected value gets the screen reader text `_A_SELECT_REMOVE_`.
- `AProgress`, `AProgressCircle`: new prop `aria-label` (default `_A_PROGRESS_ARIA_LABEL_`).
- `ATabs`: `li.a_tabs__list__item` has `role="presentation"`.
- `AWizard`: `ul.a_wizard__steps` no longer has `role="navigation"`.
- `ADatepicker`: the input has `aria-haspopup="dialog"` and `aria-controls` (only while the calendar is open) instead of `aria-owns`.
- `ASlider`: the handle is labelled by the label (`aria-labelledby`), `aria-valuenow` is always set.
- The text of the progress bar follows the background utility class (`a_bg_warning`, `a_bg_gray_300`, …).
- `AAlert`: the props `role` and `aria-atomic` have no default any more. They are set by the new prop `announce` (`alert`, `alert-changes`, `status`, `status-changes`, `none`, default `alert`), so the default markup is the same as in 2.x (`role="alert"` `aria-atomic="true"`). `role` and `aria-atomic` set as props or attributes win over `announce`. `:aria-atomic="false"` now renders `aria-atomic="false"` instead of removing the attribute. To switch the announcement off, use `announce="none"`.
- `AAccordion`: the header is a `<button type="button">` instead of an `<a role="button">`, so it works with Enter and Space. `.a_accordion__header` is a heading, `h3` by default (prop `header-tag`), nested items get the next level. The panel has `aria-labelledby` and, with up to 6 items, `role="region"`. With `one-item-always-open` the open item stays a focusable button with `aria-disabled="true"`. Every accordion gets its own `id`. Labels and contents accept translation keys (`extra`, `always-translate`), the open items work with `v-model`. To check: own CSS and tests with `a.a_accordion__button`, `div.a_accordion__header`. If the heading level does not fit the page, set `header-tag` (e.g. `h2`); `header-tag="div"` gives the old markup without a heading. `item.disabled` now really disables the item (before, it could still be opened). With `always-open` closing an item no longer closes other items whose id starts the same way (`1` closed `10` too).

## 7. Label position

- New prop `labelPosition` with `"float"`, `"inset"` and `"top"` for `AInput`, `ATextarea`, `AInputNumber`, `AInputCurrency`, `ASelect`, `ASelectIcon`, `ASelectStyle`, `ADatepicker`, `AColorPicker` (`AMultiselectOrdered`: `selectLabelPosition`). `"inset"` is new: the label stays inside the field, small above the value.
- `isLabelFloat` is deprecated but still works: `true` → `"float"`, `false` → `"top"`. It will be removed in 4.0.
- **The default is now `"float"` for all form elements.** In 2.x `AInputNumber`, `AInputCurrency`, `ADatepicker` had the label above the field (`isLabelFloat: false`). To keep this: `label-position="top"` on the component or `labelPosition: "top"` in `AComponentsPlugin` (`props`).
- The default for all form elements is set with `AFormPlugin` (`labelPosition`).

```html
<!-- 2.x -->
<a-input label="Name" :is-label-float="true"></a-input>
<a-input label="Name" :is-label-float="false"></a-input>

<!-- 3.x -->
<a-input label="Name" label-position="float"></a-input>
<a-input label="Name" label-position="top"></a-input>
<!-- new: the label stays inside the field, small above the value -->
<a-input label="Name" label-position="inset"></a-input>

// default for all form elements ("float" if not set)
app.use(AFormPlugin, {
  labelPosition: "inset",
});

// 2.x look of AInputNumber, AInputCurrency and ADatepicker (label above the field)
app.use(AComponentsPlugin, {
  AInputNumber: { props: { labelPosition: "top" } },
  AInputCurrency: { props: { labelPosition: "top" } },
  ADatepicker: { props: { labelPosition: "top" } },
});
```

## 8. Settings of the components

- `propsDefault` and the plugins of single components were removed. All settings of the components are set with `AComponentsPlugin`, the key is the name of the component: `propsDefault` → `props`, `icons` → `icons`, `config` → `config`, `cssClasses` → `cssClasses`, `propsDefault.routes` / `excludedPathRoutes` → `ARouterLinkConfig: { routes, excludedPathRoutes }`.
- Removed plugins: `AAlertPlugin`, `AAvatarPlugin`, `ACarouselPlugin`, `ACloakPlugin`, `AFiltersPlugin`, `AGroupButtonDropdownPlugin`, `AInputCurrencyPlugin`, `AInputNumberPlugin`, `ALoadingPlugin`, `AModalPlugin`, `AMultiselectOrderedPlugin`, `ARouterLinkConfigPlugin`, `ASelectPlugin`, `ASelectStylesPlugin`, `ASkeletonPlugin`, `ASpinnerPlugin`, `ATablePlugin`. Removed exports: `AInputCurrencyPluginOptions`, `AInputNumberPluginOptions`, `AMultiselectOrderedPluginOptions`, `ARouterLinkConfigPluginOptions`, `ASelectStylePluginOptions`.
- `config` of `AFiltersPlugin` was not used by any component and was removed without replacement.
- As in 2.x, the prop defaults are shared: `AModalForm`, `AModalWizard` → `AModal`; `ASelectIcon`, `ASelectStyle` → `ASelect`; `ACalendar.firstDayOfWeek` → `ADatepicker`, `ACloak` / `ALoading` `spinnerSafeHtml`, `spinnerTag` → `ASpinner`.
- The class `a_spinner` of `ASpinner` is fixed now (`propsDefault.class`). Add own classes with the attribute `class`.
- `cssClasses` of `ASelectStyle`: in 2.x every `app.use` added the classes to the list, now the last call replaces it. Set all own classes in one call.

```javascript
// 2.x
app.use(AModalPlugin, {
  propsDefault: {
    closeButtonClass: "a_btn a_btn_link",
  },
});
app.use(ASelectPlugin, {
  propsDefault: {
    keyId: "id",
  },
});
app.use(ARouterLinkConfigPlugin, {
  propsDefault: {
    routes: router.getRoutes(),
  },
  excludedPathRoutes: ["/:catchAll(.*)"],
});
app.use(AAlertPlugin, {
  icons: {
    info: CheckLg,
  },
});
app.use(ATablePlugin, {
  propsDefault: {
    isStriped: true,
  },
});

// 3.x
app.use(AComponentsPlugin, {
  // also for AModalForm and AModalWizard
  AModal: {
    props: {
      closeButtonClass: "a_btn a_btn_link",
    },
  },
  // also for ASelectIcon and ASelectStyle
  ASelect: {
    props: {
      keyId: "id",
    },
  },
  ARouterLinkConfig: {
    routes: router.getRoutes(),
    excludedPathRoutes: ["/:catchAll(.*)"],
  },
  AAlert: {
    icons: {
      info: CheckLg,
    },
  },
  ATable: {
    props: {
      isStriped: true,
    },
  },
});
```

## 9. JavaScript

- `AKeysCode` is deprecated and will be removed in a later version. It contains values of `$event.keyCode`, which is deprecated in the browsers. Use `$event.key` in own code, e.g. `$event.key === "Enter"` instead of `$event.keyCode === AKeysCode.enter`. In fields with input of Chinese or Japanese (IME) also check `$event.isComposing`.
- `AInputNumber` checks minus, plus and `"e"` by the typed character (`$event.key`). Before, the minus with `min` ≥ 0 and the plus were not blocked in Firefox and on the numpad, because these keys have another `keyCode` there.
