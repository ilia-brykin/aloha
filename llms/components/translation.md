# ATranslation (Multifunctional Translation Component)

**ATranslation** is a powerful and versatile **Vue.js** component that allows developers to seamlessly integrate translations into **Vue.js** applications. With a variety of supported features such as translating text, **HTML** content, and placeholders, **ATranslation** provides a robust solution for multilingual support in web applications. Supporting both **mobile** and **desktop** displays, as well as concatenation of `Array` data, this component offers a flexible and user-friendly localization solution.

## Basic usage

*props: `text`*

```html
<a-translation
  text="_SHOW_MORE_"
></a-translation>
```

## Hiding elements without a translation

Only the first element is displayed: its translation exists. The key `_A_TRANSLATION_EXAMPLE_MISSING_` is absent from the dictionary, and `_A_TRANSLATION_EXAMPLE_EMPTY_` has an empty translation, so both elements are hidden by `hide-without-translation`. They appear automatically when a non-empty translation is provided.

*props: `hide-without-translation`*

```html
<a-translation
  text="_A_TRANSLATION_SHOW_MORE_"
  hide-without-translation
></a-translation>
<a-translation
  text="_A_TRANSLATION_EXAMPLE_MISSING_"
  hide-without-translation
></a-translation>
<a-translation
  text="_A_TRANSLATION_EXAMPLE_EMPTY_"
  hide-without-translation
></a-translation>
```

## Extending text with `text-after`

This demonstrates how additional text, such as **" *(Aloha)"**, is displayed after the translated main text.

*props: `text-after`*

```html
<a-translation
  text="_SHOW_MORE_"
  text-after=" *(Aloha)"
></a-translation>
```

## Extending text with `text-before`

This demonstrates how additional text, such as **"$Aloha$ "**, is displayed before the translated main text.

*props: `text-before`*

```html
<a-translation
  text="_A_TRANSLATION_SHOW_MORE_"
  text-before="$Aloha$ "
></a-translation>
```

## Extending text with `text-after` and `text-before`

This demonstrates how additional text, such as **" (Text After)"**, is displayed after and **"(Text before) "** before the translated main text to enhance text content flexibility.

*props: `text-after`, `text-before`*

```html
<a-translation
  text="_A_TRANSLATION_SHOW_MORE_"
  text-after=" (Text After)"
  text-before="(Text before) "
></a-translation>
```

## Text with device-specific translations

This example illustrates the functionality of the `text` prop as an object. By using different texts for the **mobile** and **desktop** views, it shows how `"_A_TRANSLATION_SHOW_MORE_"` is displayed for **mobile** and `"_A_TRANSLATION_SHOW_LESS_"` for **desktop**.

*props: `text (as Object)`*

```html
<a-translation
  :text="{ mobile: '_A_TRANSLATION_SHOW_MORE_', desktop: '_A_TRANSLATION_SHOW_LESS_' }"
></a-translation>
```

## Using `safe-html`

The component allows using safe **HTML** content as a string. By enabling the `safe-html` prop and passing an **HTML** string, the provided **HTML** content is treated as trusted and inserted directly via the **JavaScript** attribute `innerHTML`.

*props: `safe-html`*

```html
<a-translation
  safe-html="_A_TRANSLATION_EXAMPLE_HTML_"
></a-translation>
```

## Safe **HTML** text with `DOMPurify.sanitize`

The displayed **HTML** content `"Aloha"` shows the button without the `onclick` attribute because `DOMPurify.sanitize` is used to prevent potential security risks from unsafe **HTML**.

*props: `html`*

```html
<a-translation
  html="_A_TRANSLATION_EXAMPLE_HTML_"
></a-translation>
```

## Using **HTML** with `text-before` and `text-after`

The output shows the **HTML** content `"_A_TRANSLATION_EXAMPLE_HTML_"` with the additional text `"$ "` before and `" €"` after the **HTML**.

*props: `html`, `text-after`, `text-before`*

```html
<a-translation
  html="_A_TRANSLATION_EXAMPLE_HTML_"
  text-before="$ "
  text-after=" €"
></a-translation>
```

## Using `tag` and `placeholder` for an input field

This example demonstrates the use of the `tag` prop to create an input field in the component. The code shows how the placeholder text `"_A_TRANSLATION_SHOW_MORE_"` is displayed in the input field.

*props: `tag`, `placeholder`*

```html
<a-translation
  tag="input"
  placeholder="_SHOW_MORE_"
></a-translation>
```

## Translation of `aria-label` for a button

Demonstrates the use of `aria-label` for translating the text content of a button.

*props: `aria-label`*

```html
<a-translation
  tag="button"
  class="a_btn a_btn_secondary"
  aria-label="_SHOW_MORE_"
>+</a-translation>
```

## Translation of `title`

Demonstrates the use of `title` for translating a tooltip text.

*props: `title`*

```html
<a-translation
  title="_SHOW_MORE_"
>Aloha</a-translation>
```

## Device-specific translation of `title`

Demonstrates the use of `title` as an object for device-specific translations. The `title` text is not displayed if the screen width is smaller than the value defined in [AMobilePlugin](../plugins/mobile-plugin.md).

*props: `title (as Object)`*

```html
<a-translation
  :title="{ desktop: '_A_TRANSLATION_SHOW_MORE_' }"
>Aloha</a-translation>
```

## Concatenated translation of `title`

Demonstrates the use of an `Array` for `title` translation. The values are translated and concatenated with a space.

*props: `title (as Array)`*

```html
<a-translation
  :title="['_A_TRANSLATION_SHOW_MORE_', '_A_TRANSLATION_SHOW_MORE_', 'Aloha']"
>Aloha</a-translation>
```

## Translation with `extra` values

Demonstrates the use of `extra` to replace placeholders in the translation. The translated text is displayed in the browser with the specified values.

*props: `extra`*

```html
<a-translation
  html="_A_TRANSLATION_EXAMPLE_EXTRA_{{aloha}}_{{a}}_{{b}}_"
  :extra="{ aloha: 'ALOHA', a: 10, b: 123 }"
></a-translation>
```

## Using the `default` slot with `text-before` and `text-after`

This example shows how the `default` slot is used in combination with `text-before` and `text-after`. In the browser, the text is displayed as **+ Aloha -**.

*slots: `default`*

```html
<a-translation
  text-before="+ "
  text-after=" -"
>Aloha</a-translation>
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| always-translate | Boolean |  |  | Forces translation regardless of the `is-translate` flag. |
| aria-label | String / Number / Object |  |  | A translatable text for the **ARIA** labeling function. (`Object -> mobile and desktop`) |
| extra | Object |  |  | Variables for translations. |
| hide-without-translation | Boolean | false |  | Hides the entire element if a translation used in its content or attributes is missing, null, undefined, or an empty string. Supports arrays and the current device variant. The element appears automatically when translations are updated. Literal text and numeric zero remain visible. |
| html | String / Number / Object / Array |  |  | A translatable content that may contain **HTML** tags is sanitized and rendered. (`Object` -> **mobile** and **desktop**, `Array` -> Concatenation) |
| placeholder | String / Number / Object |  |  | A translatable placeholder text, e.g., for an `input` tag. (`Object` -> **mobile** and **desktop**) |
| safe-html | String / Number / Object / Array |  |  | Inserts the provided **HTML** content as is via `innerHTML`. (`Object` -> **mobile** and **desktop**, `Array` -> Concatenation) |
| tag | String | div |  | The **HTML** tag used for the wrapping element. Default value: `div`. |
| text | String / Number / Object / Array |  |  | A translatable text. (`Object` -> **mobile** and **desktop**, `Array` -> Concatenation) |
| text-after | String / Number / Object |  |  | A static text appended after the main content without being translated. |
| text-before | String / Number / Object |  |  | A static text prepended before the main content without being translated. |
| title | String / Number / Object / Array |  |  | A translatable `title` text displayed as a tooltip. (`Object` -> **mobile** and **desktop**, `Array` -> Concatenation) |

## Slots

| name | description |
| --- | --- |
| default | Default slot for the main content of the component. |
