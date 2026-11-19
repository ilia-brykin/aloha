# ATranslation

Renders translated text and optional accessible text or HTML.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ATranslation } from "aloha-vue";
```

[Runnable Vue example](../examples/ATranslation.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/translation)

Install AI18nPlugin before using translation keys. Supply plain text when interpolation does not require HTML.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `ariaLabel` | String, Number, Object | `undefined` | — | A translatable text for the ARIA labeling function. (`Object -> mobile and desktop`) |
| `extra` | Object | `undefined` | — | Variables for translations. |
| `hideWithoutTranslation` | Boolean | `false` | — | Hides the entire element if a translation used in its content or attributes is missing, null, undefined, or an empty string. Supports arrays and the current device variant. The element appears automatically when translations are updated. Literal text and numeric zero remain visible. |
| `html` | String, Number, Object, Array | `undefined` | — | A translatable content that may contain HTML tags is sanitized and rendered. (`Object` -> mobile and desktop, `Array` -> Concatenation) |
| `placeholder` | String, Number, Object | `undefined` | — | A translatable placeholder text, e.g., for an `input` tag. (`Object` -> mobile and desktop) |
| `safeHtml` | String, Number, Object, Array | `undefined` | — | Inserts the provided HTML content as is via `innerHTML`. (`Object` -> mobile and desktop, `Array` -> Concatenation) |
| `tag` | String | `"div"` | — | The HTML tag used for the wrapping element. Default value: `div`. |
| `text` | String, Number, Object, Array | `undefined` | — | A translatable text. (`Object` -> mobile and desktop, `Array` -> Concatenation) |
| `textAfter` | String, Number, Object | `""` | — | A static text appended after the main content without being translated. |
| `textBefore` | String, Number, Object | `""` | — | A static text prepended before the main content without being translated. |
| `title` | String, Number, Object, Array | `undefined` | — | A translatable `title` text displayed as a tooltip. (`Object` -> mobile and desktop, `Array` -> Concatenation) |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `default` | — | Default slot for the main content of the component. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ATranslation/ATranslation.js)
