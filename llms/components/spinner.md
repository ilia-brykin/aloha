# ASpinner (Loading indicator)

The **ASpinner** component is used to display a loading indicator. It supports customizable **aria-label** attributes for improved accessibility, as well as the ability to safely display **HTML** content and customize the tag used for rendering.

## Basic usage

```html
<a-spinner></a-spinner>
```

## **Aria-label** with **extra** parameter

This example shows how to use the **aria-label** with additional parameters from **extra** in the **ASpinner** component. The example dynamically adds a number from the **extra** object to the **aria-label** text to provide a more precise description for users with special needs. In this case, the **aria-label** text will change to 'Loading 1', where **{{ number }}** is taken from the passed object.

*props: `aria-label`, `extra`*

```html
<a-spinner
  :extra="{ number: 1 }"
  aria-label="_PAGE_SPINNER_ARIA_LABEL_{{number}}_"
></a-spinner>
```

## Sizes

This example shows how to use **size** to control the size of the loading indicator. Values range from **1** (largest) to **7** (smallest).

*props: `size`*

```html
<a-spinner
  size="1"
></a-spinner>
<a-spinner
  size="2"
></a-spinner>
<a-spinner
  size="3"
></a-spinner>
<a-spinner
  size="4"
></a-spinner>
<a-spinner
  size="5"
></a-spinner>
<a-spinner
  size="6"
></a-spinner>
<a-spinner
  size="7"
></a-spinner>
```

## Sizes using **CSS**

This example shows how to use different sizes for the **ASpinner** component. The component supports three sizes: **small**, **medium** (default), and **large**. The size is set using the appropriate **CSS** class, such as **a_spinner_small** for a small spinner and **a_spinner_large** for a large one. The medium size is displayed by default.

*props: `class`*

```html
<div>
  <a-spinner
    class="a_spinner_small"
  ></a-spinner>
</div>
<div
  class="a_mt_3"
>
  <a-spinner></a-spinner>
</div>
<div
  class="a_mt_3"
>
  <a-spinner
    class="a_spinner_large"
  ></a-spinner>
</div>
```

## Colors

This example shows how to use various colors for the **ASpinner** component. You can apply different **CSS** classes, such as **a_color_black**, **a_color_danger**, or **a_color_primary**, to change the spinner's color. Standard colors like **primary**, **success**, and **warning** are available, as well as various shades of gray and text colors.

*props: `class`*

```html
<a-spinner
  class="a_color_black"
></a-spinner>
<a-spinner
  class="a_color_danger"
></a-spinner>
<a-spinner
  class="a_color_gray_100"
></a-spinner>
<a-spinner
  class="a_color_gray_200"
></a-spinner>
<a-spinner
  class="a_color_gray_300"
></a-spinner>
<a-spinner
  class="a_color_gray_400"
></a-spinner>
<a-spinner
  class="a_color_gray_500"
></a-spinner>
<a-spinner
  class="a_color_gray_600"
></a-spinner>
<a-spinner
  class="a_color_gray_700"
></a-spinner>
<a-spinner
  class="a_color_gray_800"
></a-spinner>
<a-spinner
  class="a_color_gray_900"
></a-spinner>
<a-spinner
  class="a_color_info"
></a-spinner>
<a-spinner
  class="a_color_link"
></a-spinner>
<a-spinner
  class="a_color_primary"
></a-spinner>
<a-spinner
  class="a_color_secondary"
></a-spinner>
<a-spinner
  class="a_color_success"
></a-spinner>
<a-spinner
  class="a_color_tertiary"
></a-spinner>
<a-spinner
  class="a_color_text"
></a-spinner>
<a-spinner
  class="a_color_warning"
></a-spinner>
<a-spinner
  class="a_color_white"
></a-spinner>
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| aria-label | String / Number / Object | _A_SPINNER_LOADING_ |  | The **aria-label** attribute for improving accessibility. It can specify separate text for mobile and desktop devices or pass a string for all devices. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| safe-html | String |  |  | Safe **HTML** content to be displayed inside the loading spinner. Used to customize the spinner's inner content. |
| size | String / Number |  |  | Defines the size of the loading indicator. Valid values range from **1** (largest) to **7** (smallest). |
| tag | String | span |  | The **HTML** tag used for rendering the loading spinner. By default, it is **span**, but it can be changed to any other appropriate tag. |

## Translations

| key | en |
| --- | --- |
| `_A_SPINNER_LOADING_` | Loading |

## CSS variables (`scss/utils/spinner.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_spinner_width` |  | Width. Changed by .a_spinner_small and .a_spinner_large. |
| `--a_spinner_height` |  | Height. Changed by .a_spinner_small and .a_spinner_large. |
| `--a_spinner_vertical_align` |  | Vertical alignment next to text. |
| `--a_spinner_border_width` |  | Thickness of the ring. Changed by .a_spinner_small and .a_spinner_large. |
| `--a_spinner_animation_speed` |  | Duration of one turn. |
| `--a_spinner_animation_name` |  | Name of the keyframes of the animation. |
