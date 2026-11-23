# ACloak (Loading screen)

The **ACloak** component displays a loading indicator with text indicating the current loading of the page or a large component. It supports various customization options, including text alignment, size of the indicator, and the ability to change the **HTML** tag for rendering.

## Basic usage

```html
<a-cloak></a-cloak>
```

## Component alignment

This example shows how to use **align**. It allows you to adjust the alignment of the text and spinner to the center, left, or right. For example, the first spinner is aligned to the left, the second to the center, and the third to the right.

*props: `align`*

```html
<a-cloak
  align="left"
></a-cloak>
<a-cloak
  align="center"
></a-cloak>
<a-cloak
  align="right"
></a-cloak>
```

## Text alignment

This example shows how to use **text-align**. This property allows you to align the text accompanying the loading spinner to the left or right. In the first example, the text is aligned to the left, while in the second it is aligned to the right.

*props: `text-align`*

```html
<a-cloak
  text-align="left"
></a-cloak>
<a-cloak
  text-align="right"
></a-cloak>
```

## Sizes

This example shows how to use **size** to control the sizes of both the text and loading indicator. Values range from **1** (largest) to **7** (smallest).

*props: `size`*

```html
<a-cloak
  size="1"
></a-cloak>
<a-cloak
  size="2"
></a-cloak>
<a-cloak
  size="3"
></a-cloak>
<a-cloak
  size="4"
></a-cloak>
<a-cloak
  size="5"
></a-cloak>
<a-cloak
  size="6"
></a-cloak>
<a-cloak
  size="7"
></a-cloak>
```

## Text with **extra** Parameter

This example shows how to use **text** and **extra**. The **extra** parameter allows you to dynamically change the text. In this case, the text displays the message 'Loading 1', where the number **{{ number }}** is taken from the passed **extra** object.

*props: `text`, `extra`*

```html
<a-cloak
  :extra="{ number: 1 }"
  text="_PAGE_CLOAK_TEXT_{{number}}_"
></a-cloak>
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| align | String | center |  | Defines the alignment of the text and spinner within the component. Possible values: **left**, **center**, and **right**. |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| size | String / Number | 6 |  | Defines the size of the text and loading indicator. Valid values range from **1** (largest) to **7** (smallest). |
| spinner-class | String / Number |  |  | **CSS** class for customizing the appearance of the loading indicator. |
| spinner-safe-html | String |  |  | Safe **HTML** content to be displayed inside the loading spinner. Used to customize the spinner's inner content. |
| spinner-tag | String | span |  | The **HTML** tag used for rendering the loading spinner. By default, it is **span**, but it can be changed to any other appropriate tag. |
| tag | String | div |  | **HTML** tag used to render the component. |
| text | String | _A_CLOAK_LOADING_ |  | Text that will be displayed next to the loading indicator. |
| text-align | String | right |  | Defines the alignment of the text relative to the spinner. Possible values: **left** and **right**. By default, the text is right-aligned. |

## Translations

| key | en |
| --- | --- |
| `_A_CLOAK_LOADING_` | Loading |
