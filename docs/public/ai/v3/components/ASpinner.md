# ASpinner

Loading indicator with an optional accessible name.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ASpinner } from "aloha-vue";
```

[Runnable Vue example](../examples/ASpinner.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/spinner)

Provide ariaLabel when the indicator conveys loading status on its own.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `ariaLabel` | String, Number, Object | `"_A_SPINNER_LOADING_"` (plugin default) | — | The aria-label attribute for improving accessibility. It can specify separate text for mobile and desktop devices or pass a string for all devices. |
| `extra` | Object | `undefined` (plugin default) | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `safeHtml` | String | `""` (plugin default) | — | Safe HTML content to be displayed inside the loading spinner. Used to customize the spinner's inner content. |
| `size` | String, Number | `undefined` (plugin default) | — | Defines the size of the loading indicator. Valid values range from 1 (largest) to 7 (smallest). |
| `tag` | String | `"span"` (plugin default) | — | The HTML tag used for rendering the loading spinner. By default, it is span, but it can be changed to any other appropriate tag. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

See the linked example and source for forwarded content and any component-specific extension points.

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ASpinner/ASpinner.js)
