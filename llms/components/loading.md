# ALoading (Loading screen over content)

The **ALoading** component displays a loading spinner with text over the content when the **is-loading** property is set to **true**. It is used to block content and show a spinner until the loading process is complete.

## Basic usage

*props: `is-loading`*

```html
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
```

## Component alignment

This example shows how to use **align**. It allows you to adjust the alignment of the text and spinner to the center, left, or right. For example, the first spinner is aligned to the left, the second to the center, and the third to the right.

*props: `align`*

```html
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
    align="left"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
    align="center"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
    align="right"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
```

## Text alignment

This example shows how to use **text-align**. This property allows you to align the text accompanying the loading spinner to the left or right. In the first example, the text is aligned to the left, while in the second it is aligned to the right.

*props: `text-align`*

```html
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
    text-align="left"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
    text-align="right"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
```

## Sizes

This example shows how to use **size** to control the sizes of both the text and loading indicator. Values range from **1** (largest) to **7** (smallest).

*props: `size`*

```html
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
    size="1"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
    size="2"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
    size="3"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
    size="4"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
    size="5"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
    size="6"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
<div
  class="a_position_relative"
>
  <a-loading
    :is-loading="true"
    size="7"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
```

## Text with **extra** Parameter

This example shows how to use **text** and **extra**. The **extra** parameter allows you to dynamically change the text. In this case, the text displays the message 'Loading 1', where the number **{{ number }}** is taken from the passed **extra** object.

*props: `text`, `extra`*

```html
<div
  class="a_position_relative"
>
  <a-loading
    :extra="{ number: 1 }"
    :is-loading="true"
    text="_PAGE_LOADING_TEXT_{{number}}_"
  >
    <ul>
      <li>Aloha 1</li>
      <li>Aloha 2</li>
      <li>Aloha 3</li>
    </ul>
  </a-loading>
</div>
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| align | String | center |  | Defines the alignment of the text and spinner within the component. Possible values: **left**, **center**, and **right**. |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| extra | Object |  |  | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like **"_WELCOME_{{foo}}_{{bar}}_"**, which is translated as **"Welcome {{ foo }}: {{ bar }}"**, you can pass an object like **{ foo: "abc", bar: "123" }**, and the result will be the translation **"Welcome abc: 123"**. |
| is-loading | Boolean |  |  | Determines whether the loading indicator should be displayed. If set to **true**, the loading indicator will appear over the component's content. |
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
| `_A_LOADING_LOADING_` | Loading |

## CSS variables (`scss/components/ALoading.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_loading_bg` |  | Background of the overlay over the loading content (translucent). |
| `--a_loading_z_index` |  | Stacking order of the overlay. |
