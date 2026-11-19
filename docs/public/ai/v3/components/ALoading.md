# ALoading

Wraps content with a loading indicator controlled by isLoading.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ALoading } from "aloha-vue";
```

[Runnable Vue example](../examples/ALoading.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/loading)

Keep the loading announcement concise and the underlying content meaningful after loading.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `align` | String | `"center"` (plugin default) | — | Defines the alignment of the text and spinner within the component. Possible values: left, center, and right. |
| `alwaysTranslate` | Boolean | `false` | — | Forces translation regardless of the `is-translate` flag. |
| `extra` | Object | `undefined` (plugin default) | — | An object that contains variables for substitution in the translation template. It is used for dynamically replacing values in translation strings. For example, if the translation string has placeholders like "_WELCOME_{{foo}}_{{bar}}_", which is translated as "Welcome {{ foo }}: {{ bar }}", you can pass an object like { foo: "abc", bar: "123" }, and the result will be the translation "Welcome abc: 123". |
| `isLoading` | Boolean | `undefined` | — | Determines whether the loading indicator should be displayed. If set to true, the loading indicator will appear over the component's content. |
| `size` | String, Number | `6` (plugin default) | — | Defines the size of the text and loading indicator. Valid values range from 1 (largest) to 7 (smallest). |
| `spinnerClass` | String, Object | `undefined` | — | CSS class for customizing the appearance of the loading indicator. |
| `spinnerSafeHtml` | String | `""` (plugin default) | — | Safe HTML content to be displayed inside the loading spinner. Used to customize the spinner's inner content. |
| `spinnerTag` | String | `"span"` (plugin default) | — | The HTML tag used for rendering the loading spinner. By default, it is span, but it can be changed to any other appropriate tag. |
| `tag` | String | `"div"` (plugin default) | — | HTML tag used to render the component. |
| `text` | String | `"_A_LOADING_LOADING_"` (plugin default) | — | Text that will be displayed next to the loading indicator. |
| `textAlign` | String | `"right"` (plugin default) | — | Defines the alignment of the text relative to the spinner. Possible values: left and right. By default, the text is right-aligned. |

## Events and model bindings

This component does not declare dedicated events. See the usage notes for callback props or delegated behavior.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `default` | — | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ALoading/ALoading.js)
