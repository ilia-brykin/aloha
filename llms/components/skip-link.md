# ASkipLink (Skip link)

**ASkipLink** is the first link of the page: *Skip to main content*. It is hidden until it gets the keyboard focus, then it appears in the top left corner. Keyboard and screen reader users skip the header and the navigation with one key (WCAG 2.4.1). The link moves the focus to the target itself, so it also works with a hash router and with an element like `<main>` that cannot be focused.

## Basic usage

Put `a-skip-link` as the first element of the page and give the main content `<main id="main">`. Try it on this page: reload it and press Tab. The example below jumps to the box under it.

*props: `target-id`*

```html
<!-- App.vue: the first element of the page -->
<a-skip-link />

<header>...</header>
<nav>...</nav>

<main id="main">
  <router-view />
</main>
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| target-id | String | "main" |  | `id` of the element that gets the focus, e.g. `<main id="main">`. If the element does not exist, the link works like a normal link. |
| text | String | "_A_SKIP_LINK_TEXT_" |  | Text of the link. Accepts a translation key. |

## Translations

| key | en |
| --- | --- |
| `_A_SKIP_LINK_TEXT_` | Skip to main content |

## CSS variables (`scss/components/ASkipLink.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_skip_link_offset` |  | Distance from the top and the left edge of the window. |
| `--a_skip_link_padding_x` |  | Horizontal padding. |
| `--a_skip_link_padding_y` |  | Vertical padding. |
| `--a_skip_link_color` |  | Text color. |
| `--a_skip_link_bg` |  | Background. |
| `--a_skip_link_font_weight` |  | Font weight. |
| `--a_skip_link_border_radius` |  | Corner radius. |
| `--a_skip_link_shadow` |  | Shadow. |
| `--a_skip_link_z_index` |  | Stack order, above modals and popups. |
